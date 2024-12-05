import CustomDialogHeader from "@/components/CustomDialogHeader";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Layers2Icon, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { createWorkflowSchema } from "@/schema/workflow";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TCreateWorkflowSchema,
  WorkflowDefinition,
  WorkflowStatus,
} from "@/types/workflowTypes";
import { useAuth } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { createWorkFlows } from "@/services/userServices";
import { toast } from "sonner";
import { QUERY_KEY } from "@/constants/queryConstant";
import { queryClient } from "@/config/gateway";
// import { useNavigate } from "react-router-dom";

type TProps = {
  triggerText?: string;
};

const CreateWorkflowDialog = ({ triggerText }: TProps) => {
  const [open, setOpen] = useState(false);
  const { userId } = useAuth();
  // const navigate = useNavigate();

  console.log(userId);

  const form = useForm<TCreateWorkflowSchema>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {},
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createWorkFlows,
    onSuccess: (data) => {
      toast.success("Workflow created", { id: "create-workflow" });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_WORKFLOW] });
      setOpen(!open);
      console.log(data, "FROM ONSUCCESS");
      // navigate(`/workflow/editor/${data?.id}`)
    },
    onError: () => {
      toast.error("Failed to create workflow", { id: "create-workflow" });
    },
  });

  const onSubmit = useCallback(
    (values: TCreateWorkflowSchema) => {
      toast.loading("Creating workflow", { id: "create-workflow" });
      mutate({
        ...values,
        user_id: userId as string,
        status: WorkflowStatus.DRAFT,
        definition: WorkflowDefinition.TODO,
      });
    },
    [mutate, userId]
  );

  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={() => {
          form.reset();
          setOpen(!open);
        }}
      >
        <DialogTrigger asChild>
          <Button>{triggerText ?? "Create Workflow"}</Button>
        </DialogTrigger>

        <DialogContent className="px-0">
          <CustomDialogHeader
            icon={Layers2Icon}
            title={"Create Workflow"}
            subTitle="Start building your workflow"
          />

          <div className="p-6">
            <Form {...form}>
              <form
                className="space-y-8 w-full"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-1 items-center">
                        Name
                        <p className="text-xs text-primary">(required)</p>
                      </FormLabel>

                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormDescription>
                        Choose a descriptive and unique name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex gap-1 items-center">
                        Description
                        <p className="text-xs text-primary">(optional)</p>
                      </FormLabel>

                      <FormControl>
                        <Textarea className="resize-none" {...field} />
                      </FormControl>

                      <FormDescription>
                        Provide a brief description of what your workflow does.{" "}
                        <br /> This is optional but can help you remember the
                        workflow&apos;s purpose
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <Loader2 className="animate-spin" /> : "Proceed"}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateWorkflowDialog;
