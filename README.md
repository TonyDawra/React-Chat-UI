# React Chat UI

A **single‑page chat interface** built with **React 18**, **TypeScript**, and the **CometChat UI Kit v4**. The goal is to provide a plug‑and‑play front‑end you can drop into any project to enable 1‑to‑1 and group messaging, voice/video calling, and presence indicators out of the box.

> ⚠️  This repository focuses on the **client‑side UI only**. You do **not** need to host your own back‑end; CometChat handles real‑time messaging, media storage, and authentication for you.

---

## Project structure

```
React-Chat-UI/
 ├─ public/
 └─ src/
      ├─ components/     # custom wrappers & helpers
      ├─ theme/          # Tailwind / CSS variables
      ├─ App.tsx         # root component
      └─ AppConstants.ts # <— put your CometChat credentials here
```

---

## Prerequisites

* **Node.js ≥ 18**
* **npm** (or **yarn** / **pnpm**)
* A **CometChat** developer account (free tier works fine)

---

## 1 · Clone & install

```bash
# grab the repo
git clone <repo-url>
cd React-Chat-UI

# install dependencies
npm install   # or yarn install / pnpm i
```

---

## 2 · Get your CometChat credentials

1. Sign up / log in at **[dashboard.cometchat.com](https://dashboard.cometchat.com/)**.
2. Click **➕ Add App** → choose **v3** (UI Kit v4 is built on the v3 platform).
3. Inside the app dashboard, copy these values:

   * **APP ID**
   * **REGION** (e.g. `eu`, `us`, `in`)
   * **Auth Key** (from the **API & Auth Keys** tab, typically marked `auth_only`)
   * *(optional)* **REST API Key** – only needed for server‑to‑server calls.
4. Open `src/AppConstants.ts` and paste them in:

```ts
export const AppConstants = {
  APP_ID : "YOUR_APP_ID_HERE",
  REGION : "YOUR_REGION_HERE",  // e.g. "us"
  AUTH_KEY : "YOUR_AUTH_KEY_HERE",
  REST_KEY : "YOUR_OPTIONAL_REST_KEY_HERE", // leave blank if unused
};
```

> **Why these keys?**
> *`APP_ID`* and *`REGION`* locate your CometChat app in the cloud.
> *`AUTH_KEY`* lets the JavaScript SDK authenticate as any user without exposing your master secret.
> The optional *`REST_KEY`* is for secure server calls (e.g., creating users from a backend) and **should never be exposed in the browser**.

---

## 3 · Run the app

```bash
npm start      # launches CRA dev server at http://localhost:3000
```

On first launch you’ll be prompted for a **UID** to log in as. You can:

* Use CometChat’s **Dashboard → Users** page to create a test user, or
* Call the REST API to create users programmatically if you have the REST key.

---

## Features

| Capability        | Details                                         |
| ----------------- | ----------------------------------------------- |
| **Messaging**     | Text, emojis, file sharing, threads             |
| **Voice & Video** | 1‑to‑1 & group calling with automatic UI states |
| **Presence**      | Online/offline, typing indicators               |
| **Groups**        | Public, password, or private groups             |
| **Theming**       | Tailwind + CSS variables for easy re‑skin       |

---

## Useful scripts

| Command         | Purpose                              |
| --------------- | ------------------------------------ |
| `npm start`     | Start CRA dev server with hot reload |
| `npm run build` | Production build in `build/`         |
| `npm test`      | React Testing Library + Jest         |
| `npm run lint`  | ESLint & Prettier checks             |

---

## Deployment

After `npm run build`, host the contents of the `build/` folder on any static host (Netlify, Vercel, S3, Firebase Hosting, etc.). Ensure your domain is added under **Dashboard → Settings → Allowed Origins** so CometChat can accept requests from it.

---

## License

MIT — see [`LICENSE`](LICENSE) for full text.

---
