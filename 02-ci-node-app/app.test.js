const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return a greeting message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Hello from GitHub Actions CI!');
    });
});

describe('GET /add', () => {
    it('should add two numbers correctly', async () => {
        const res = await request(app).get('/add?a=3&b=7');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(10);
    });

    it('should handle negative numbers', async () => {
        const res = await request(app).get('/add?a=-5&b=3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(-2);
    });
});
