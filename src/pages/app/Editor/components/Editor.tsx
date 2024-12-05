import { TWorkflow } from "@/types/workflowTypes";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";

interface Props {
  workflow: TWorkflow;
}
const Editor = ({ workflow }: Props) => {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <section className="flex h-full overflow-auto">
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
