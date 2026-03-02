# WhatsappX

An open source **WhatsApp Web style chat clone** built with **Vue 3 (Vite)** + **Tailwind CSS** + **Pinia** + **Firebase Firestore** + **Google Sign In**.  
Includes a tiny **Express backend** (`localhost:4001`) that **verifies Google ID tokens** and returns the user profile payload.

---

## ✨ What’s inside
- Google Sign-In (via `vue3-google-login`)
- Firestore `users` collection (auto-save on first login)
- Firestore `chat` collection with real-time updates (`onSnapshot`)
- Chats list + active chat UI (WhatsApp Web-like layout)
- Start a new chat (Find Friends)
- Send messages (stored in Firestore array)
- Read/seen state (double-tick indicator)
- Persistent session/state (Pinia persisted state)

---

## 🚀 Quick Start (clone + run)

~~~bash
set -euo pipefail
cd "/Users/alok/Desktop"

git clone <your-repo-url> WhatsappX
cd "WhatsappX"

npm i
npm run dev
~~~

Open the app at `http://localhost:5173` (Vite default).

---

## 🧩 Start the backend (Google token verify API)

In a new terminal:

~~~bash
set -euo pipefail
cd "/Users/alok/Desktop/WhatsappX/backend"

npm i
npm run watch
~~~

Backend runs at `http://localhost:4001`.

---

## 🔐 Configure Google OAuth Client ID (required)

You must paste your **Google OAuth Client ID** in **two places**:

1) Frontend: `src/main.js`
- Replace:
  - `clientId: "OAuth Client ID API Key"`

2) Backend: `backend/index.js`
- Replace:
  - `new OAuth2Client('OAuth Client ID API Key')`

In Google Cloud Console:
- Create an **OAuth 2.0 Client ID** (Web application)
- Add Authorized JavaScript origins:
  - `http://localhost:5173`
- If you deploy later, add your production domain too.

---

## 🔥 Setup Firebase (Firestore) (required)

1) Create a Firebase project
2) Enable **Cloud Firestore**
3) Update `src/firebase-init.js` with your Firebase web config:

~~~js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
~~~

### Firestore collections used
- `users/{sub}`
  - `sub`, `email`, `picture`, `firstName`, `lastName`
- `chat/{chatId}`
  - `sub1`, `sub2`, `sub1HasViewed`, `sub2HasViewed`, `messages[]`

---

## 📁 Project structure (high level)

~~~text
WhatsappX/
  backend/
    index.js
    package.json
  public/
    whatsapp-logo.png
    message-bg.png
    w-web-not-loaded-chat.png
  src/
    components/
      MessageRowComponent.vue
    router/
      index.js
    store/
      user-store.js
    views/
      LoginView.vue
      HomeView.vue
      ChatsView.vue
      FindFriendsView.vue
      MessageView.vue
    firebase-init.js
    main.js
    App.vue
    style.css
  vite.config.js
  tailwind.config.cjs
  package.json
~~~

---

## 🛠 Customize
- **Backend URL**: `src/store/user-store.js`  
  Change `axios.defaults.baseURL = 'http://localhost:4001/'` if your backend runs elsewhere.
- **Ports**
  - Frontend: Vite (usually `5173`)
  - Backend: Express (`4001`)

---

## 🧯 Troubleshooting
- **Google login button shows errors**
  - Ensure you used an **OAuth Client ID** (not an API key)
  - Add `http://localhost:5173` to Authorized JavaScript origins
  - Make sure the same Client ID is pasted in **frontend + backend**
- **Backend 400/CORS issues**
  - Confirm backend is running on `http://localhost:4001`
  - If you changed ports, update `axios.defaults.baseURL`
- **Firestore “permission denied”**
  - Check Firestore rules (for demos you may temporarily allow reads/writes, but lock it down before production)
- **No users/chats appearing**
  - Login once to create your user doc
  - Create a second user (login with another Google account) to start chats
