import { Router } from 'express';
import { chatController } from '../controllers/chat.controller';
import {
  validateCreateSession,
  validateCreateMessage,
  validateUpdateSession,
  validateSessionId,
  validateQueryLimit
} from '../middlewares/validation';

const router = Router();

// Session routes
router.post('/sessions', validateCreateSession, chatController.createSession.bind(chatController));
router.get('/sessions', validateQueryLimit, chatController.getAllSessions.bind(chatController));
router.get('/sessions/:id', validateSessionId, chatController.getSession.bind(chatController));
router.put('/sessions/:id', validateUpdateSession, chatController.updateSession.bind(chatController));
router.delete('/sessions/:id', validateSessionId, chatController.deleteSession.bind(chatController));

// Message routes
router.post('/messages', validateCreateMessage, chatController.addMessage.bind(chatController));
router.get('/sessions/:id/messages', validateSessionId, chatController.getSessionMessages.bind(chatController));

// Cleanup routes
router.delete('/sessions/cleanup', validateQueryLimit, chatController.clearOldSessions.bind(chatController));

export default router;