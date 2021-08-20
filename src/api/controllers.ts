import { Request, Response } from 'express';

import { config } from '../config';
import { getPubSubClient, sendMessageToPubSub } from '../utils/pubsub';

export const ping = async (req: Request, res: Response): Promise<Response> => {
  const responseData = {
    status: 200,
    message: 'Server Running',
  };
  return res.json(responseData);
};

export const sendClientMessage = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const { projectId, pubsub } = config.google;
    const message = request.query.message || request.body.message;
    const clientMessagesTopic = pubsub.topics.clientMessages;

    const data = {
      clientMessage: message,
    };

    const pubsubClient = getPubSubClient(projectId);
    const messageId = await sendMessageToPubSub(pubsubClient, data, clientMessagesTopic);

    const result = {
      ...data,
      messageId,
    };
    return response.status(200).json(result);
  } catch (err) {
    const error = err;
    return response.status(400).json(error);
  }
};
