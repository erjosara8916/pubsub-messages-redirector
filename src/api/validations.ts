import { NextFunction, Request, Response } from 'express';

export const clientMessageValidations = (
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void => {
  const { message } = request.body;

  if (!message) {
    return response.status(400).json({
      status: 400,
      error: `message not provided`,
    });
  }

  next();
};
