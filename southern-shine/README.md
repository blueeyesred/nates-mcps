# Southern Shine

This is a Next.js website for "A Southern Glow", a housekeeping and cleaning services business.

This project is built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI. It features:

- Service selection and dynamic price estimation.
- A service request submission system using Server Actions.
- A customer reviews section.
- An AI-powered tool to suggest seasonal specials.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:9002](http://localhost:9002) with your browser.

4. Configure environment variables
   - Copy `.env.example` to `.env.local` and fill in values. At minimum, set:
     - `RESEND_API_KEY` (create a free key at resend.com)
     - `RESEND_DOMAIN` (verify your domain in Resend; used for the From address)
     - `NOTIFY_TO` (your email to receive inquiries/bookings)

5. Optional: Set `NEXT_PUBLIC_SITE_URL` to your deployment URL for correct links.
6. Optional analytics:
   - `NEXT_PUBLIC_GA_ID` (e.g., G-XXXXXXX) for Google Analytics 4
   - `NEXT_PUBLIC_CLARITY_ID` for Microsoft Clarity session replay

### If the folder path is missing on your machine

- Make sure the repo exists locally. From a terminal, run `ls` to see your directories. If `/workspace/nates-mcps/southern-shine` is missing, clone the repo first:

  ```bash
  git clone https://github.com/glowingsouthshine/southern-shine.git
  cd southern-shine
  ```

- In WSL, your home path usually looks like `/mnt/c/Users/<YourUser>`; change into the folder where you cloned the project (for example, `cd ~/projects/southern-shine` or `cd /mnt/c/Users/<YourUser>/southern-shine`). Run `pwd` to confirm you are inside `southern-shine` before running `npm install` or `npm run dev`.

- If you previously cloned into another directory, open that exact folder in VS Code (File → Open Folder) so the terminal starts in the right place.

### Quick checklist to preview and deploy

1. Confirm you are inside the project folder (`pwd` should end with `southern-shine`).
2. Run `npm install` to fetch dependencies.
3. Start the dev server with `npm run dev` and open http://localhost:9002. Click every link/button (quote, contact, specials, about) to verify responses.
4. Stop the dev server and run `npm run lint` to ensure the code passes checks in your environment.
5. Copy `.env.example` to `.env.local` and add your email/Resend values so form submissions send successfully in production.
6. Push the branch to the GitHub repo that backs your hosting (or add that remote and push there) and redeploy your host to update asouthernglow.com.

## Prompt to share with the VS Code AI assistant (Codex)

If you start a new Codex chat and need it to reference this repo and the updated instructions, paste the prompt below. It tells Codex where to look for the project and the README you are reading now.

```
Use the workspace folder `/workspace/nates-mcps/southern-shine`.
Open `README.md` at the root of that folder for setup, commands, and deployment steps.
Run `npm install`, then `npm run dev` (port 9002) to preview, and `npm run lint` after stopping the dev server.
```

## Deploying on Vercel (Free)

1. Push this folder to a GitHub repository.
2. In Vercel, import the repo and select the default Next.js settings.
3. Add the environment variables from `.env.example` in Vercel Project Settings → Environment Variables.
4. Trigger a deploy. API routes use Resend (HTTPS) so no SMTP is needed.

Notes:

- No Firebase or paid database is required. Submissions are delivered via email.
- If you want to store submissions, we can integrate a free Notion DB or Supabase (free tier) later.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- ShadCN UI
- Resend Email (free tier)
- Google Analytics (optional)
- Microsoft Clarity (optional)
- Google Genkit AI
