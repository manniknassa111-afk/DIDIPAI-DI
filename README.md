# DIDIPAI Presale - Ready project

This Next.js project is prepared for deployment to Vercel or export for GitHub Pages.

## Quick start

1. Copy `.env.example` to `.env.local` and set:
   `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id`

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in development:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Export static files (for GitHub Pages):
   ```bash
   npm run export
   ```

## Notes

- Place your `logo-DIDIPAI.png` in `public/`. A generated image was copied if present.
- Ensure your WalletConnect Project ID is set for WalletConnect support.
