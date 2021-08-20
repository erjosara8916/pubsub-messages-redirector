import { ClientConfig, PubSub as GooglePubSub } from '@google-cloud/pubsub';

import { encodeToBase64 } from './base64';

export const getPubSubClient = (projectId: string): GooglePubSub => {
  const config: ClientConfig = {
    projectId,
  };
  const client = new GooglePubSub(config);
  return client;
};

export const sendMessageToPubSub = async <T>(
  client: GooglePubSub,
  data: T,
  topic: string,
): Promise<string> => {
  try {
    const messageEncoded = encodeToBase64(data);
    const messageId = await client.topic(topic).publish(messageEncoded);
    return messageId;
  } catch (error) {
    console.log(error);
    return `error`;
  }
};
