import React, { useEffect } from "react";
import "./App.css";
import { app } from "./firebase";
import { generateToken } from "./firebase/cloud-messaging";
import { getMessaging, onMessage } from "firebase/messaging";

const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

function App() {
  useEffect(() => {
    generateToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }, []);
  return <div className="App">{console.log(app)}</div>;
}

export default App;
