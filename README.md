# React Chat UI Kit Example (v6)

A fully‑functional, plug‑and‑play chat interface powered by the **CometChat React UI Kit v6**. The project is delivered as a TypeScript Create‑React‑App you can run out‑of‑the‑box, tailor to your own brand, or cherry‑pick components from for an existing React stack.

---

## ✨ Highlights

| Feature                       | Details                                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **One‑line initialisation**   | The UI Kit is boot‑strapped in `src/index.tsx` via `CometChatUIKit.init()` and a `UIKitSettingsBuilder`.             |
| **100 % TypeScript**          | Strict‑mode TypeScript for safer refactors and IDE autocompletion.                                                   |
| **Centralised settings file** | Toggle chat, call, AI, layout, and style options from a single JSON descriptor (`project-info/BUILDER_SETTINGS.md`). |
| **Multi‑lingual**             | 20+ locale JSON files live under `src/CometChat/locales/`.                                                           |
| **CRA build pipeline**        | Uses the standard `react‑scripts` workflow (`npm start`, `npm run build`, `npm test`).                               |
| **E2E ready**                 | All DOM nodes are exported with deterministic `data-testid` attributes for easy testing.                             |

---

## 🗺️ Folder Map

```text
chat-ui-kit-react/
│
├─ public/                # CRA static assets
├─ src/
│  ├─ CometChat/          # Auto‑generated UI Kit + helpers
│  │   ├─ assets/         # Icons, images & SVGs
│  │   ├─ components/     # Chat UI components (calls, groups, threads…)
│  │   ├─ context/        # React Context for settings
│  │   ├─ locales/        # i18n JSON bundles
│  │   └─ styles/         # Component‑scoped CSS modules
│  ├─ App.tsx             # Thin shell that mounts <CometChatHome/>
│  └─ index.tsx           # CRA entry – Initialises & renders the UI Kit
│
├─ project-info/
│  └─ BUILDER_SETTINGS.md # Documentation for every available toggle
│
├─ package.json           # Dependencies & npm scripts
└─ tsconfig.json          # TypeScript compiler rules
```

---

## 🔧 Prerequisites

* **Node ≥ 16** (LTS recommended)
* **npm ≥ 8** or **Yarn ≥ 1.22**
* A CometChat **App ID**, **Region**, and **Auth Key**

---

## 🚀 Quick Start

```bash
# 1 ▸ Install dependencies
npm install

# 2 ▸ Add your credentials
#    Edit the COMETCHAT_CONSTANTS object in src/index.tsx

# 3 ▸ Run in development mode (http://localhost:3000)
npm start
```

### Production build

```bash
npm run build   # Outputs static assets into build/
```

Deploy the **build/** folder to any static host (Netlify, Vercel, S3, Cloudflare Pages, etc.).

---

## ⚙️ Configuring the UI Kit

All runtime options are defined in **`project-info/BUILDER_SETTINGS.md`**. Edit that file to enable/disable:

* **Chat features** – typing indicator, threaded replies, reactions, polls…
* **Call features** – one‑to‑one & group calling, recording, screenshare…
* **Layout** – show/hide side‑panes, message list density, RTL support…
* **Style** – accent colour, typography scale, roundedness, dark mode…

Changes are hot‑reloaded; no rebuild is required.

---

## 🛠️ Extending

| Goal                         | Where to start                                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Add custom message types** | Create a component in `src/CometChat/components` and register it via the `MessageComposerExtension` API. |
| **Override theme tokens**    | Add CSS vars under `:root` in `src/CometChat/styles/global.css` or wrap the app in a ThemeProvider.      |
| **Integrate with your auth** | Replace the guest **Auth Key** flow in `src/index.tsx` with tokens from your backend.                    |
| **State management**         | The project is context‑driven, but you can slot Redux/Zustand around it if desired.                      |

---

## 📜 Scripts

| Command         | Purpose                                                                  |
| --------------- | ------------------------------------------------------------------------ |
| `npm start`     | Launch CRA dev server on [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Compile an optimised production bundle to **build/**.                    |
| `npm test`      | Run Jest/React‑Testing‑Library tests (none included by default).         |
| `npm run eject` | Permanently expose CRA webpack config (irreversible).                    |

---

## 🪪 License

MIT License
