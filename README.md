## Realtime Chat App

A real-time chat application whose style is heavily inspired by WhatsApp. Built using the MERN Stack (`MongoDB`, `Express.js`, `React`, `Node.js`) with `Firebase` for file storage and `Socket.IO` for instant messaging.

> [!WARNING]
> Messages sent in direct messages and group chats are **_not encrypted_** and are stored as **_plain text_** in the database. **DO NOT share** sensitive information, such as passwords, financial details, or any private data that you use in other applications or accounts. Use this chat app only for the purpose of previewing a demo application.

### 🚩 Live Demo

Current version running at: [https://realtime-chat-app-one-topaz.vercel.app](https://realtime-chat-app-one-topaz.vercel.app)

> [!NOTE]
> It may take up to 1 minute for the site to be brought up while the loading indicator is displayed, since free instances in Render will spin down with inactivity which can delay requests by 50 seconds or more.

### ✨ Features

- signing up & signing in
- setting up your profile info when signing in for the first time
- updating your profile info
- adding new friends to chat with by sending them friend requests
- approving or rejecting the received friend requests
- creating group messages
- real-time chatting with your friends in direct messages and groups
- sending images and other files in chats
- filtering your chats for displaying `all chats`, `DMs` or `groups`
- searching for a specific chat in direct messages and groups or a request in friend requests
- viewing the `contact information`, `groups in common` and `files shared between you` in your friends' profile
- viewing the `creation date`, `members` and `files shared` of the groups you are in

### ⚙ Setup

- ### create a `.env` file in the `server` folder

```
PORT=3001
JWT_KEY="YOUR_JWT_KEY"
ORIGIN="http://localhost:3000"
DATABASE_URL="YOUR_DATABASE_URL"
PEPPER_STRING="YOUR_PEPPER_STRING"
```

- ### create a `.env` file in the `client` folder

```
VITE_FIREBASE_API_KEY="YOUR_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
VITE_FIREBASE_APP_ID="YOUR_APP_ID"
VITE_SERVER_URL="http://localhost:3001"
```

### 🏃‍♂️ Running in local development mode

- `server`

```bash
cd server
npm install
npm run dev
```

- `client`

```bash
cd client
npm install
npm run dev
```

open http://localhost:3000 with your browser to see the result.

### 📷 Screenshots

`SIGNING UP & SIGNING IN:`
![signup](https://github.com/user-attachments/assets/9f656b5b-bdd6-42be-9293-e44f52ca0359)
![signin](https://github.com/user-attachments/assets/7f9e478c-c802-437d-acae-10794bf12392)

`SETTING UP YOUR PROFILE:`
![profile-landing](https://github.com/user-attachments/assets/25656c2d-9dcf-4f11-a242-b8e90745a84f)

`SENDING & VIEWING FRIEND REQUESTS:`
![send-friend-request](https://github.com/user-attachments/assets/3e5d6bd1-5110-4452-8c73-4d159661719d)
![friend-requests](https://github.com/user-attachments/assets/a81c0290-ff62-4f01-9792-de9be3ff30af)

`DIRECT MESSAGING:`
![start-new-chat](https://github.com/user-attachments/assets/95dada0c-b57f-438f-87ec-b7c219b18880)
![chats](https://github.com/user-attachments/assets/5ca65d19-c537-419e-984d-533a7d939aaf)

`GROUP MESSAGING:`
![create-group](https://github.com/user-attachments/assets/cae7f705-9665-4c32-973b-c3fd89d75c60)
![group-chat](https://github.com/user-attachments/assets/8c070f09-e482-47de-8b48-d059f453b6b6)

`SEARCH FUNCTIONALITY:`
![search-chats](https://github.com/user-attachments/assets/a01e754f-8a12-4b95-abcb-d4060a8a9a0d)

`UPDATING YOUR PROFILE:`
![profile-update](https://github.com/user-attachments/assets/858fc66f-5e2d-4ae6-b2a8-ea5b00315501)

`VIEWING FRIEND & GROUP PROFILE:`
![friend-info](https://github.com/user-attachments/assets/c577cda1-1f15-4c74-a367-73661c56a5bc)
![group-info](https://github.com/user-attachments/assets/bcb770e9-aea9-4b42-bcfd-02ae935d19fd)

![Image](https://raw.githubusercontent.com/Aswith-Dev/Real-time-chat-application/main/img1.png)

````
