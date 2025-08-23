import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/environment';

// Rate limiting middleware
export const rateLimiter = rateLimit({
  windowMs: config.api.rateLimit.windowMs,
  max: config.api.rateLimit.max,
  message: {
    success: false,
    error: 'Too many requests, please try again later.',
    retryAfter: Math.ceil(config.api.rateLimit.windowMs / 1000)
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limit for write operations
export const writeRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute for write operations
  message: {
    success: false,
    error: 'Too many write requests, please slow down.',
  },
  skip: (req: Request) => req.method === 'GET',
});

// Request logging middleware
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const { method, url, ip } = req;
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    
    console.log(`${method} ${url} - ${statusCode} - ${duration}ms - ${ip}`);
  });
  
  next();
};

// Error handling for async routes
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Content-Type validation middleware
export const validateContentType = (req: Request, res: Response, next: NextFunction) => {
  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    if (!req.is('application/json')) {
      return res.status(400).json({
        success: false,
        error: 'Content-Type must be application/json'
      });
    }
  }
  next();
};

// Request size limiter
export const requestSizeLimit = (req: Request, res: Response, next: NextFunction) => {
  const contentLength = parseInt(req.get('content-length') || '0');
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (contentLength > maxSize) {
    return res.status(413).json({
      success: false,
      error: 'Request payload too large'
    });
  }
  
  next();
};