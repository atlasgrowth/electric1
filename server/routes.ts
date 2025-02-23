import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Octokit } from "@octokit/rest";
import { businessDataSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  app.post("/api/deploy-site", async (req, res) => {
    try {
      // Validate the request body
      const data = businessDataSchema.parse(req.body);

      // Create a new repository name based on the business name
      const repoName = `electrician-site-${data.basic_info.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

      // Create a new repository
      const repoResponse = await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        private: false,
        auto_init: true
      });

      // Create necessary files with customized content
      await Promise.all([
        // Create business data file
        octokit.repos.createOrUpdateFileContents({
          owner: repoResponse.data.owner.login,
          repo: repoName,
          path: 'src/data/business.json',
          message: 'Add business data',
          content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64')
        }),
        // Add other necessary files and customizations
      ]);

      res.json({
        success: true,
        url: repoResponse.data.html_url,
        message: 'Site deployed successfully'
      });
    } catch (error) {
      console.error('Deployment error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);
  return httpServer;
}