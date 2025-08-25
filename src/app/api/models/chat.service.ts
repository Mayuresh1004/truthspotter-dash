import supabase from "../config/supabase";
import type { ChatRequest, ChatResponse } from "./chat.types";

export async function handleChatRequest(input: ChatRequest): Promise<ChatResponse> {
  // Example: persist message in a 'messages' table
  const { data, error } = await supabase
    .from("messages")
    .insert([{ content: input.message }])
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  // Example reply
  return {
    reply: `Echo: ${input.message}`,
    saved: true,
    id: data?.id,
  };
}
