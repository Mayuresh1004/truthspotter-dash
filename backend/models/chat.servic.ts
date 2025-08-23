import { supabase } from '../config/supabase';
import {
  ChatSession,
  ChatMessage,
  CreateSessionRequest,
  CreateMessageRequest,
  UpdateSessionRequest,
  SessionWithMessages,
  SessionWithLatestMessage
} from './chat.types';

export class ChatService {
  
  /**
   * Create a new chat session
   */
  async createSession(data: CreateSessionRequest): Promise<ChatSession | null> {
    try {
      const { data: session, error } = await supabase
        .from('chat_sessions')
        .insert([{ 
          title: data.title || 'New Chat'
        }])
        .select()
        .single();

      if (error) {
        console.error('Error creating session:', error);
        return null;
      }

      return session;
    } catch (error) {
      console.error('Service error creating session:', error);
      return null;
    }
  }

  /**
   * Add a message to a session
   */
  async addMessage(data: CreateMessageRequest): Promise<ChatMessage | null> {
    try {
      const { data: message, error } = await supabase
        .from('chat_messages')
        .insert([{
          session_id: data.session_id,
          role: data.role,
          content: data.content
        }])
        .select()
        .single();

      if (error) {
        console.error('Error adding message:', error);
        return null;
      }

      return message;
    } catch (error) {
      console.error('Service error adding message:', error);
      return null;
    }
  }

  /**
   * Get all messages for a session
   */
  async getSessionMessages(sessionId: string): Promise<ChatMessage[]> {
    try {
      const { data: messages, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
        return [];
      }

      return messages || [];
    } catch (error) {
      console.error('Service error fetching messages:', error);
      return [];
    }
  }

  /**
   * Get session with all its messages
   */
  async getSessionWithMessages(sessionId: string): Promise<SessionWithMessages | null> {
    try {
      const { data: session, error: sessionError } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('id', sessionId)
        .single();

      if (sessionError || !session) {
        console.error('Error fetching session:', sessionError);
        return null;
      }

      const messages = await this.getSessionMessages(sessionId);

      return {
        ...session,
        messages
      };
    } catch (error) {
      console.error('Service error fetching session with messages:', error);
      return null;
    }
  }

  /**
   * Get all chat sessions (ordered by most recent)
   */
  async getAllSessions(): Promise<ChatSession[]> {
    try {
      const { data: sessions, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching sessions:', error);
        return [];
      }

      return sessions || [];
    } catch (error) {
      console.error('Service error fetching sessions:', error);
      return [];
    }
  }

  /**
   * Get recent sessions with their latest message
   */
  async getRecentSessions(limit: number = 10): Promise<SessionWithLatestMessage[]> {
    try {
      const { data: sessions, error } = await supabase
        .from('chat_sessions')
        .select(`
          *,
          chat_messages(
            content,
            role,
            created_at
          )
        `)
        .order('updated_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching recent sessions:', error);
        return [];
      }

      return (sessions || []).map(session => {
        const messages = session.chat_messages as ChatMessage[];
        const latest_message = messages
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];

        return {
          id: session.id,
          title: session.title,
          created_at: session.created_at,
          updated_at: session.updated_at,
          latest_message,
          message_count: messages.length
        };
      });
    } catch (error) {
      console.error('Service error fetching recent sessions:', error);
      return [];
    }
  }

  /**
   * Update session title
   */
  async updateSession(sessionId: string, data: UpdateSessionRequest): Promise<ChatSession | null> {
    try {
      const { data: session, error } = await supabase
        .from('chat_sessions')
        .update({ title: data.title })
        .eq('id', sessionId)
        .select()
        .single();

      if (error) {
        console.error('Error updating session:', error);
        return null;
      }

      return session;
    } catch (error) {
      console.error('Service error updating session:', error);
      return null;
    }
  }

  /**
   * Delete a session and all its messages
   */
  async deleteSession(sessionId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('chat_sessions')
        .delete()
        .eq('id', sessionId);

      if (error) {
        console.error('Error deleting session:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Service error deleting session:', error);
      return false;
    }
  }

  /**
   * Clear old sessions (keep only recent N sessions)
   */
  async clearOldSessions(keepCount: number = 50): Promise<boolean> {
    try {
      const { data: sessionsToKeep, error: fetchError } = await supabase
        .from('chat_sessions')
        .select('id')
        .order('updated_at', { ascending: false })
        .limit(keepCount);

      if (fetchError || !sessionsToKeep || sessionsToKeep.length === 0) {
        return false;
      }

      const keepIds = sessionsToKeep.map(s => s.id);

      const { error: deleteError } = await supabase
        .from('chat_sessions')
        .delete()
        .not('id', 'in', `(${keepIds.map(id => `"${id}"`).join(',')})`);

      if (deleteError) {
        console.error('Error clearing old sessions:', deleteError);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Service error clearing old sessions:', error);
      return false;
    }
  }
}

export const chatService = new ChatService();