# TaraBaho (Expo)

Targets **Expo SDK 58** (React Native 0.88, Node 22.13+). Built from the Figma file `AU8Bq79KCsPLwTnxHHiBAA` (pages: *job hunter's perspective*, *employer's perspective*).

```bash
npm install      # also downloads Figma assets (postinstall → scripts/fetch-assets.mjs)
npx expo start
```

- Every screen is drawn in the Figma 360×800 space (`DesignCanvas`) and scaled to the device width, so spacing matches the design 1:1.
- Tokens live in `src/theme`. Asset URLs are in `assets/manifest.json` (Figma URLs expire after 7 days).
- `src/navigation/routes.ts` lists every screen with its Figma node id; unported screens show a placeholder. Long-press the top-left corner of the Landing screen to open **ScreenIndex** and jump to any screen.

## Status
Ported: Landing, Login, Signup (with Job Seeker / Employer account type), Forgot Password, Reset Password, job hunter Home and Search. Everything else in `routes.ts` is still a placeholder.
