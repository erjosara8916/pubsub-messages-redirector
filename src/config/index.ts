export const config = {
  google: {
    projectId: process.env.GCP_PROJECT_ID || ``,
    pubsub: {
      topics: {
        clientMessages: process.env.GCP_PUBSUB_TOPIC_CLIENT_MESSAGES || `dev-client-messages`,
      },
    },
  },
};
