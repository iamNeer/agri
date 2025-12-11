import type { Express, Request, Response } from "express";
import { type Server } from "http";
import { createProxyMiddleware } from "http-proxy-middleware";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Proxy all /api requests to Django backend running on port 8000
  const apiProxy = createProxyMiddleware({
    target: 'http://127.0.0.1:8000',
    changeOrigin: true,
  });

  app.use('/api', apiProxy);

  return httpServer;
}
