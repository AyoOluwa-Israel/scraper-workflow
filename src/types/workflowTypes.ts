import { createWorkflowSchema } from "@/schema/workflow";
import { z } from "zod";

export type TCreateWorkflowSchema = z.infer<typeof createWorkflowSchema>;

export enum WorkflowStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export enum WorkflowDefinition {
  TODO = "TODO",
}

export interface TCreateWorkflow extends TCreateWorkflowSchema {
  status: WorkflowStatus;
  user_id: string;
  definition: WorkflowDefinition;
}

export interface TWorkflow {
  id: string;
  user_id: string;
  name: string;
  description: string;
  definition: WorkflowDefinition;
  status: WorkflowStatus;
  created_at: string;
  updated_at: string;
}
