# Home Game Phase 1 — delivery status

Included: npm workspace layout, Next.js responsive preview page, /api/health endpoint, strict TypeScript, initial users/profiles/consents SQL migration, environment variable template.

Not completed: managed authentication integration, live Neon project connection and migration execution, Expo mobile project, worker/realtime infrastructure, test suite, legal/app store clearance.

## Local
From the repository, run `cd home-game`, `npm ci`, and `npm run dev:web`. The extracted npm workspace is in `home-game/`; the web app is in `home-game/apps/web` relative to the Git repository root.

For Vercel, use team Rage Factory (`rage-factory1`), project `home-game`, framework Next.js, Root Directory `home-game/apps/web`, and Node.js 22.x. Deploy to the Preview environment. Build with `npm run build`; retain the default Next.js output directory. No application environment variables or database migration are required for this preview.

Dependencies are pinned in `package-lock.json`. Next.js and React use patched releases in their existing release lines; workspace overrides patch PostCSS and sharp transitive dependencies.

## Security
Do not enable account signup or tournament payments from preview. Do not expose DATABASE_URL to browsers or commit secrets. Marketing consent default-off. Compliance review is a release blocker.
