import { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';

// Error handling middleware for validation
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors.array()
    });
  }
  next();
};

// Validation rules for creating a session
export const validateCreateSession = [
  body('title')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Title must be between 1 and 255 characters'),
  handleValidationErrors
];

// Validation rules for creating a message
export const validateCreateMessage = [
  body('session_id')
    .notEmpty()
    .isUUID()
    .withMessage('Valid session_id is required'),
  body('role')
    .notEmpty()
    .isIn(['user', 'assistant'])
    .withMessage('Role must be either "user" or "assistant"'),
  body('content')
    .notEmpty()
    .isString()
    .trim()
    .isLength({ min: 1 })
    .withMessage('Content is required and cannot be empty'),
  handleValidationErrors
];

// Validation rules for updating a session
export const validateUpdateSession = [
  param('id')
    .isUUID()
    .withMessage('Valid session ID is required'),
  body('title')
    .notEmpty()
    .isString()
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Title is required and must be between 1 and 255 characters'),
  handleValidationErrors
];

// Validation rules for session ID parameter
export const validateSessionId = [
  param('id')
    .isUUID()
    .withMessage('Valid session ID is required'),
  handleValidationErrors
];

// Validation rules for query parameters
export const validateQueryLimit = [
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  query('keep')
    .optional()
    .isInt({ min: 1, max: 1000 })
    .withMessage('Keep must be between 1 and 1000'),
  handleValidationErrors
];