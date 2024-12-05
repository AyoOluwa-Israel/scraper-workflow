import supabase from "@/config/supabaseClient";
import { TCreateWorkflow, TWorkflow } from "@/types/workflowTypes";
import { handleApiError } from "@/utils/httpApiErrors";

export const getUserWorkFlows = async (): Promise<TWorkflow[]> => {
  try {
    const { data, error } = await supabase
      .from("workflows")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching waitlist count:", error);

    throw handleApiError(error);
    // or handle the error as needed
  }
};

export const createWorkFlows = async (payload: TCreateWorkflow) => {
  try {
    const { data, error } = await supabase.from("workflows").insert([payload]);

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const deleteWorkflow = async ({
  workflowId,
  userId,
}: {
  workflowId: string;
  userId: string;
}) => {
  try {
    const { data, error } = await supabase
      .from("workflows")
      .delete()
      .eq("id", workflowId)
      .eq("user_id", userId);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};



export const findWorkflowById = async ({
  workflowId,
  userId,
}: {
  workflowId: string;
  userId: string;
}) => {
  try {
    const { data, error } = await supabase
      .from("workflows").select("*")
      .eq("id", workflowId)
      .eq("user_id", userId)
      .single()

    if (error) {
      throw error;
    }
console.log("here")
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
}