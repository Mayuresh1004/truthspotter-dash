import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import chatRoutes from './routes/chat.routes';

dotenv.config();

console.log('Environment variables loaded');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Present' : 'Missing');
console.log('PORT:', process.env.PORT || '3000');

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Test routes first
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Chat History API - Minimal Version',
    version: '1.0.0',
    status: 'Working'
  });
});


app.use('/api/chat', chatRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Add a simple test route to verify basic functionality
app.get('/test', (req: Request, res: Response) => {
  res.json({
    message: 'Test route working',
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      PORT: process.env.PORT || 3000,
      SUPABASE_URL: process.env.SUPABASE_URL ? 'Set' : 'Not set'
    }
  });
});

console.log('Routes defined, attempting to start server...');

// Start server
try {
  const server = app.listen(PORT, () => {
    console.log(`✅ Minimal server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Test it: http://localhost:${PORT}/test`);
  });

  server.on('error', (error: any) => {
    console.error('Server error:', error);
  });
} catch (error) {
  console.error('Failed to start server:', error);
  process.exit(1);
}

export default app;