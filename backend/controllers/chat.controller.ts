import { Request, Response } from 'express';
import { chatService } from '../models/chat.servic';
import { 
  CreateSessionRequest, 
  CreateMessageRequest, 
  UpdateSessionRequest,
  ApiResponse 
} from '../models/chat.types';

export class ChatController {

  /**
   * Create a new chat session
   * POST /api/chat/sessions
   */
  async createSession(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateSessionRequest = req.body;
      const session = await chatService.createSession(data);

      if (!session) {
        res.status(400).json({
          success: false,
          error: 'Failed to create session'
        } as ApiResponse<null>);
        return;
      }

      res.status(201).json({
        success: true,
        data: session,
        message: 'Session created successfully'
      } as ApiResponse<typeof session>);
    } catch (error) {
      console.error('Controller error creating session:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }

  /**
   * Add a message to a session
   * POST /api/chat/messages
   */
  async addMessage(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateMessageRequest = req.body;

      // Validate required fields
      if (!data.session_id || !data.role || !data.content) {
        res.status(400).json({
          success: false,
          error: 'Missing required fields: session_id, role, content'
        } as ApiResponse<null>);
        return;
      }

      const message = await chatService.addMessage(data);

      if (!message) {
        res.status(400).json({
          success: false,
          error: 'Failed to add message'
        } as ApiResponse<null>);
        return;
      }

      res.status(201).json({
        success: true,
        data: message,
        message: 'Message added successfully'
      } as ApiResponse<typeof message>);
    } catch (error) {
      console.error('Controller error adding message:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }

  /**
   * Get all messages for a session
   * GET /api/chat/sessions/:id/messages
   */
  async getSessionMessages(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const messages = await chatService.getSessionMessages(id);

      res.json({
        success: true,
        data: messages
      } as ApiResponse<typeof messages>);
    } catch (error) {
      console.error('Controller error fetching session messages:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }

  /**
   * Get session with all its messages
   * GET /api/chat/sessions/:id
   */
  async getSession(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const session = await chatService.getSessionWithMessages(id);

      if (!session) {
        res.status(404).json({
          success: false,
          error: 'Session not found'
        } as ApiResponse<null>);
        return;
      }

      res.json({
        success: true,
        data: session
      } as ApiResponse<typeof session>);
    } catch (error) {
      console.error('Controller error fetching session:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }

  /**
   * Get all sessions
   * GET /api/chat/sessions
   */
  async getAllSessions(req: Request, res: Response): Promise<void> {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const sessions = await chatService.getRecentSessions(limit);

      res.json({
        success: true,
        data: sessions
      } as ApiResponse<typeof sessions>);
    } catch (error) {
      console.error('Controller error fetching sessions:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }

  /**
   * Update session title
   * PUT /api/chat/sessions/:id
   */
  async updateSession(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: UpdateSessionRequest = req.body;

      if (!data.title) {
        res.status(400).json({
          success: false,
          error: 'Title is required'
        } as ApiResponse<null>);
        return;
      }

      const session = await chatService.updateSession(id, data);

      if (!session) {
        res.status(404).json({
          success: false,
          error: 'Session not found or failed to update'
        } as ApiResponse<null>);
        return;
      }

      res.json({
        success: true,
        data: session,
        message: 'Session updated successfully'
      } as ApiResponse<typeof session>);
    } catch (error) {
      console.error('Controller error updating session:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }

  /**
   * Delete a session
   * DELETE /api/chat/sessions/:id
   */
  async deleteSession(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const success = await chatService.deleteSession(id);

      if (!success) {
        res.status(404).json({
          success: false,
          error: 'Session not found or failed to delete'
        } as ApiResponse<null>);
        return;
      }

      res.json({
        success: true,
        message: 'Session deleted successfully'
      } as ApiResponse<null>);
    } catch (error) {
      console.error('Controller error deleting session:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }

  /**
   * Clear old sessions
   * DELETE /api/chat/sessions/cleanup
   */
  async clearOldSessions(req: Request, res: Response): Promise<void> {
    try {
      const keepCount = req.query.keep ? parseInt(req.query.keep as string) : 50;
      const success = await chatService.clearOldSessions(keepCount);

      if (!success) {
        res.status(400).json({
          success: false,
          error: 'Failed to clear old sessions'
        } as ApiResponse<null>);
        return;
      }

      res.json({
        success: true,
        message: `Old sessions cleared, keeping ${keepCount} recent sessions`
      } as ApiResponse<null>);
    } catch (error) {
      console.error('Controller error clearing old sessions:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      } as ApiResponse<null>);
    }
  }
}

export const chatController = new ChatController();