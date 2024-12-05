import { Node } from "@xyflow/react";
import { TaskParamType, TaskType } from "./taskTypes";

export interface AppNodeData {
  type: TaskType;
  inputs: Record<string, string>;
  [key: string]: any;
}
export interface AppNode extends Node {
  data: AppNodeData;
}


export interface TaskParam {
  name: string
  type: TaskParamType
  helperText?: string
  required: boolean
  hideHandle?: boolean
  [key: string]: any
}