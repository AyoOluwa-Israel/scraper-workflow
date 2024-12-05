import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TaskRegistry } from "@/lib/workflows/Registry";
import { TaskType } from "@/types/taskTypes";
import { CoinsIcon, GripVerticalIcon } from "lucide-react";

type Props = {
  taskType: TaskType;
};

const NodeHeader = ({ taskType }: Props) => {
  console.log(taskType);
  const task = TaskRegistry[taskType];

  console.log(task);
  return (
    <div className="flex items-center gap-2 p-2">
      <task.icon size={16} />
      <div className="flex justify-between items-center w-full">
        <p className="text-xs font-bold uppercase">{task.label}</p>

        <div className="flex gap-1 items-center">
          {task.isEntryPoint && <Badge>Entry point</Badge>}

          <Badge>
            <CoinsIcon size={16} />
            TODO
          </Badge>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="drag-handle cursor-grab"
          >
            <GripVerticalIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NodeHeader;
