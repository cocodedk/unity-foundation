import {test, expect} from '@playwright/test';

test.describe('API endpoints', () => {
  test('GET /api/announcement returns data or null', async ({request, baseURL}) => {
    const res = await request.get(`${baseURL}/api/announcement`);
    expect(res.ok()).toBeTruthy();
    const data = await res.json();
    // Should return announcement object or null
    if (data) {
      expect(data).toHaveProperty('mobilePay');
      expect(data).toHaveProperty('enabled');
    }
  });

  test('POST /api/contact validates payload', async ({request, baseURL}) => {
    // Bad request with invalid data
    const bad = await request.post(`${baseURL}/api/contact`, {
      data: {name: '', email: 'nope', message: 'short'}
    });
    expect(bad.status()).toBe(400);
    const badJson = await bad.json();
    expect(badJson).toHaveProperty('error');

    // Good request with valid data
    const good = await request.post(`${baseURL}/api/contact`, {
      data: {
        name: 'Alice Smith',
        email: 'alice@example.com',
        message: 'This is a valid contact message with enough length to pass validation.'
      }
    });
    expect(good.status()).toBe(200);
    const goodJson = await good.json();
    expect(goodJson.success).toBeTruthy();
  });

  test('GET /api/posts returns posts list', async ({request, baseURL}) => {
    const res = await request.get(`${baseURL}/api/posts?locale=en`);
    expect(res.ok()).toBeTruthy();
    const data = await res.json();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test('GET /api/tags returns tags list', async ({request, baseURL}) => {
    const res = await request.get(`${baseURL}/api/tags?locale=en`);
    expect(res.ok()).toBeTruthy();
    const data = await res.json();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test('POST /api/upload requires authentication', async ({request, baseURL}) => {
    const res = await request.post(`${baseURL}/api/upload`, {
      multipart: {
        file: {
          name: 'test.txt',
          mimeType: 'text/plain',
          buffer: Buffer.from('test content')
        }
      }
    });
    // Should return 401 without auth
    expect(res.status()).toBe(401);
  });

  test('POST /api/posts requires authentication', async ({request, baseURL}) => {
    const res = await request.post(`${baseURL}/api/posts`, {
      data: {
        title: 'Test Post',
        body: 'Test content that is long enough to pass validation requirements.',
        locale: 'en'
      }
    });
    // Should return 401 without auth
    expect(res.status()).toBe(401);
  });
});
