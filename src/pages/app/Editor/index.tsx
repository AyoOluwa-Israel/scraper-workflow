import { QUERY_KEY } from "@/constants/queryConstant";
import { findWorkflowById } from "@/services/userServices";
import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "./loading";
import Editor from "./components/Editor";

// interface Props {
//   params: {
//     workflowId: string;
//   };
// }

const EditorIndex = () => {
  const { workflowId } = useParams();

  const { userId } = useAuth();

  const { data: workflow, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_WORKFLOW_BY_ID, workflowId, userId],
    queryFn: () =>
      findWorkflowById({
        workflowId: workflowId as string,
        userId: userId as string,
      }),

    enabled: userId !== undefined && !!workflowId,
  });

  console.log(workflow, userId, "data");

  if (isLoading) {
    return <Loading />;
  }

  if (!userId) return <div>Unauthenticated</div>;
  if (!workflow) {
    return <div>Workflow not found</div>;
  }
  return <Editor workflow={workflow}/>;
};

export default EditorIndex;
