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

// Message routes
router.post('/messages',  chatController.addMessage.bind(chatController));

// Cleanup route (specific route before parameterized routes)
router.delete('/sessions/cleanup',  chatController.clearOldSessions.bind(chatController));

// Session routes (parameterized routes go last)
router.post('/sessions',  chatController.createSession.bind(chatController));
router.get('/sessions',  chatController.getAllSessions.bind(chatController));
router.get('/sessions/:id',  chatController.getSession.bind(chatController));
router.get('/sessions/:id/messages',  chatController.getSessionMessages.bind(chatController));
router.put('/sessions/:id',  chatController.updateSession.bind(chatController));
router.delete('/sessions/:id',  chatController.deleteSession.bind(chatController));

export default router;