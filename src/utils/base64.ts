export const encodeToBase64 = <T>(data: T): Buffer => {
  const result = Buffer.from(JSON.stringify(data));
  return result;
};

export const decodeFromBase64 = <T>(message: string): T => {
  const messageDecoded = Buffer.from(message, 'base64').toString();
  const data = JSON.parse(messageDecoded);
  return data;
};
