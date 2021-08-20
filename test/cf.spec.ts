import { config } from 'dotenv';
import request from 'supertest';

import { app } from '../src/app';

beforeAll(() => {
  config();
});

describe('Health Check', () => {
  describe('GET /ping', () => {
    it('return status 200: when message is provided as query param', async () => {
      const response = await request(app).get(`/ping`);
      expect(response.status).toBe(200);
    });
  });
});

describe('Client Messages', () => {
  describe('POST /clients/messages', () => {
    it('return status 200: when message is provided as body param', async () => {
      const data = {
        message: `Test Message`,
      };
      const response = await request(app)
        .post(`/clients/messages`)
        .send(data)
        .set('Accept', 'application/json');
      expect(response.status).toBe(200);
    });

    it('return status 400: when message is not provided as body param', async () => {
      const response = await request(app).post(`/clients/messages`);
      expect(response.status).toBe(400);
    });
  });
});
