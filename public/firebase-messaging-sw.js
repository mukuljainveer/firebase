importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAScB_omUCYlpolnkDx8uOm5AdI-vfv1wQ",
  authDomain: "push-notifications-8d1cb.firebaseapp.com",
  projectId: "push-notifications-8d1cb",
  storageBucket: "push-notifications-8d1cb.appspot.com",
  messagingSenderId: "228600270170",
  appId: "1:228600270170:web:20bb94ea8abffe3e2a3763",
  measurementId: "G-5447YCCMSB",
};

firebase.initializeApp(firebaseConfig);

const isSupported = () => {
  return true;

  //   return (
  //     "Notification" in window &&
  //     "serviceWorker" in navigator &&
  //     "PushManager" in window
  //   );
};

let messaging = null;

if (isSupported()) {
  messaging = firebase.messaging();
}

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  //   const notificationTitle = payload.notification.title;
  //   const notificationOptions = {
  //     body: payload.notification.body,
  //     icon: "/logo192.png",
  //   };

  // dispatch({
  //   type:'SET_NOTIFICATION',
  //   payload:payload.notification
  // })
  // const notification = new Notification(payload.notification.title, {
  //   body: payload.notification.body,
  // });

  // eslint-disable-next-line no-restricted-globals
  //   return self.registration.showNotification(
  //     notificationTitle,
  //     notificationOptions
  //   );
});
