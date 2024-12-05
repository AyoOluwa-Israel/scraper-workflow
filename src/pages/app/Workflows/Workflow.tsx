import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserWorkFlows } from "@/services/userServices";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, InboxIcon } from "lucide-react";
import CreateWorkflowDialog from "./components/CreateWorkflowDialog";
import WorkflowCard from "./components/WorkflowCard";
import { QUERY_KEY } from "@/constants/queryConstant";


const Workflow = () => {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex  justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>

        <CreateWorkflowDialog />
      </div>

      <div className="h-full py-6">
        <UserWorkflows />
      </div>
    </div>
  );
};

function UserWorkflowsSkelton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
  );
}

function UserWorkflows() {
  const {
    data: workflows,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.GET_WORKFLOW],
    queryFn: getUserWorkFlows,
  });

  if (error) {
    return (
      <Alert variant={"destructive"}>
        <AlertCircle className="w-4 h-4" />

        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again later
        </AlertDescription>
      </Alert>
    );
  }

  if (workflows?.length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
          <InboxIcon size={40} className="stroke-primary" />
        </div>

        <div className="flex flex-col gap-1 text-center">
          <p className="font-bold">No workflow Created</p>
          <p className="text-sm text-muted-foreground">
            Click the button to create your first workflow
          </p>
        </div>

        <CreateWorkflowDialog triggerText="Create your first workflow" />
      </div>
    );
  }

  console.log(workflows, "workflows");

  if (isLoading) {
    return <UserWorkflowsSkelton />; // Show loading until async operation finishes
  }

  return <div className="grid  grid-cols-1 gap-4">
    {
      workflows?.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))
    }

{
  JSON.stringify(workflows, null, 4)
}
  </div>;
}

export default Workflow;
