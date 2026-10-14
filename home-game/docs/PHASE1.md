# Home Game Phase 1 — delivery status

Included: npm workspace layout, Next.js responsive preview page, /api/health endpoint, strict TypeScript, initial users/profiles/consents SQL migration, environment variable template.

Not completed: managed authentication integration, live Neon project connection and migration execution, Expo mobile project, worker/realtime infrastructure, test suite, legal/app store clearance.

## Local
Run `npm install` at root and `npm run dev:web`. Web app is in `apps/web`. For Vercel select Root Directory `apps/web`, framework Next.js; note this workspace may require repository-root install and root access to workspace package. Prefer configure Vercel Root Directory `apps/web` with standalone app dependencies; if monorepo workspace install fails, set install command from root and build web workspace.

## Security
Do not enable account signup or tournament payments from preview. Do not expose DATABASE_URL to browsers or commit secrets. Marketing consent default-off. Compliance review is a release blocker.
