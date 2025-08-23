import { supabaseAdmin } from '../config/supabase';

export class DatabaseManager {
  
  /**
   * Create the chat tables if they don't exist
   */
  async initializeTables(): Promise<boolean> {
    try {
      console.log('Initializing database tables...');
      
      // Create chat_sessions table
      const sessionTableQuery = `
        CREATE TABLE IF NOT EXISTS chat_sessions (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          title VARCHAR(255) NOT NULL DEFAULT 'New Chat',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `;
      
      const { error: sessionError } = await supabaseAdmin.rpc('exec', {
        query: sessionTableQuery
      });
      
      if (sessionError) {
        console.error('Error creating chat_sessions table:', sessionError);
        return false;
      }
      
      // Create chat_messages table
      const messageTableQuery = `
        CREATE TABLE IF NOT EXISTS chat_messages (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
          role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant')),
          content TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `;
      
      const { error: messageError } = await supabaseAdmin.rpc('exec', {
        query: messageTableQuery
      });
      
      if (messageError) {
        console.error('Error creating chat_messages table:', messageError);
        return false;
      }
      
      // Create indexes
      await this.createIndexes();
      
      // Create triggers
      await this.createTriggers();
      
      console.log('Database tables initialized successfully');
      return true;
    } catch (error) {
      console.error('Error initializing database tables:', error);
      return false;
    }
  }
  
  /**
   * Create database indexes for performance
   */
  private async createIndexes(): Promise<void> {
    const indexes = [
      'CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);',
      'CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at);',
      'CREATE INDEX IF NOT EXISTS idx_chat_sessions_updated_at ON chat_sessions(updated_at);',
      'CREATE INDEX IF NOT EXISTS idx_chat_messages_role ON chat_messages(role);'
    ];
    
    for (const indexQuery of indexes) {
      const { error } = await supabaseAdmin.rpc('exec', { query: indexQuery });
      if (error) {
        console.error('Error creating index:', error);
      }
    }
  }
  
  /**
   * Create database triggers
   */
  private async createTriggers(): Promise<void> {
    // Function to update session timestamp
    const functionQuery = `
      CREATE OR REPLACE FUNCTION update_session_timestamp()
      RETURNS TRIGGER AS $$
      BEGIN
        UPDATE chat_sessions 
        SET updated_at = NOW() 
        WHERE id = NEW.session_id;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `;
    
    const { error: functionError } = await supabaseAdmin.rpc('exec', {
      query: functionQuery
    });
    
    if (functionError) {
      console.error('Error creating function:', functionError);
      return;
    }
    
    // Create trigger
    const triggerQuery = `
      DROP TRIGGER IF EXISTS trigger_update_session_timestamp ON chat_messages;
      CREATE TRIGGER trigger_update_session_timestamp
        AFTER INSERT ON chat_messages
        FOR EACH ROW
        EXECUTE FUNCTION update_session_timestamp();
    `;
    
    const { error: triggerError } = await supabaseAdmin.rpc('exec', {
      query: triggerQuery
    });
    
    if (triggerError) {
      console.error('Error creating trigger:', triggerError);
    }
  }
  
  /**
   * Check if tables exist and are properly configured
   */
  async validateDatabase(): Promise<boolean> {
    try {
      // Check if tables exist by trying to select from them
      const { error: sessionError } = await supabaseAdmin
        .from('chat_sessions')
        .select('id')
        .limit(1);
      
      const { error: messageError } = await supabaseAdmin
        .from('chat_messages')
        .select('id')
        .limit(1);
      
      if (sessionError || messageError) {
        console.log('Database validation failed, tables may not exist');
        return false;
      }
      
      console.log('Database validation successful');
      return true;
    } catch (error) {
      console.error('Error validating database:', error);
      return false;
    }
  }
  
  /**
   * Setup RLS policies (if needed)
   */
  async setupRLS(): Promise<void> {
    const policies = [
      'ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;',
      'ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;',
      `CREATE POLICY IF NOT EXISTS "Allow all operations on chat_sessions" 
       ON chat_sessions FOR ALL USING (true);`,
      `CREATE POLICY IF NOT EXISTS "Allow all operations on chat_messages" 
       ON chat_messages FOR ALL USING (true);`
    ];
    
    for (const policy of policies) {
      const { error } = await supabaseAdmin.rpc('exec', { query: policy });
      if (error && !error.message.includes('already exists')) {
        console.error('Error creating policy:', error);
      }
    }
  }
  
  /**
   * Get database statistics
   */
  async getStats(): Promise<{
    totalSessions: number;
    totalMessages: number;
    oldestSession: string | null;
    newestSession: string | null;
  }> {
    try {
      const { data: sessions, error: sessionError } = await supabaseAdmin
        .from('chat_sessions')
        .select('created_at');
      
      const { data: messages, error: messageError } = await supabaseAdmin
        .from('chat_messages')
        .select('id');
      
      if (sessionError || messageError) {
        throw new Error('Failed to fetch stats');
      }
      
      const totalSessions = sessions?.length || 0;
      const totalMessages = messages?.length || 0;
      
      let oldestSession = null;
      let newestSession = null;
      
      if (sessions && sessions.length > 0) {
        const sorted = sessions.sort((a, b) => 
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        oldestSession = sorted[0].created_at;
        newestSession = sorted[sorted.length - 1].created_at;
      }
      
      return {
        totalSessions,
        totalMessages,
        oldestSession,
        newestSession
      };
    } catch (error) {
      console.error('Error fetching database stats:', error);
      return {
        totalSessions: 0,
        totalMessages: 0,
        oldestSession: null,
        newestSession: null
      };
    }
  }
}

export const databaseManager = new DatabaseManager();