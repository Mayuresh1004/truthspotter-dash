import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import chatRoutes from './routes/chat.routes';

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/chat', chatRoutes);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Default route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Chat History API',
    version: '1.0.0',
    endpoints: {
      'GET /health': 'Health check',
      'POST /api/chat/sessions': 'Create new session',
      'GET /api/chat/sessions': 'Get all sessions',
      'GET /api/chat/sessions/:id': 'Get session with messages',
      'PUT /api/chat/sessions/:id': 'Update session title',
      'DELETE /api/chat/sessions/:id': 'Delete session',
      'POST /api/chat/messages': 'Add message to session',
      'GET /api/chat/sessions/:id/messages': 'Get session messages',
      'DELETE /api/chat/sessions/cleanup': 'Clean old sessions'
    }
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { details: err.message })
  });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

export default app;