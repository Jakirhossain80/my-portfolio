export type SkillTier = "primary" | "supporting";

export type SkillId =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "tanstack-query"
  | "react-hook-form"
  | "zod"
  | "nodejs"
  | "express"
  | "rest-apis"
  | "jwt-authentication"
  | "firebase-admin"
  | "mongodb"
  | "mongoose"
  | "firebase-authentication"
  | "jwt-cookies"
  | "git"
  | "github"
  | "pnpm"
  | "vercel"
  | "vscode"
  | "npm"
  | "postman"
  | "render";

export type Skill = {
  id: SkillId;
  name: string;
  tier: SkillTier;
};

export type SkillCategoryId =
  | "frontend"
  | "backend-apis"
  | "database-authentication"
  | "tools-deployment";

export type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  description: string;
  skills: readonly Skill[];
};
