export interface ChatSession {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

export interface CreateSessionRequest {
  title?: string;
}

export interface CreateMessageRequest {
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface UpdateSessionRequest {
  title: string;
}

export interface SessionWithMessages extends ChatSession {
  messages: ChatMessage[];
}

export interface SessionWithLatestMessage extends ChatSession {
  latest_message?: ChatMessage;
  message_count?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}