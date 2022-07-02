import { app } from ".";
import { getMessaging, getToken } from "firebase/messaging";

export const messaging = getMessaging(app);

export const generateToken = () =>
  getToken(messaging, {
    vapidKey: process.env.REACT_APP_VAPID_ID,
  });
