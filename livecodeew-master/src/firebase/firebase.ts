import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE__MESSAGING_SENDER_ID,
	appId:process.env.NEXT_PUBLIC_FIREBASE__APP_ID,
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
