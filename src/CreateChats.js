import { db } from "./firebase";
import firebase from "firebase"


export default async function createMessages(user) {
    const chat = [
        {
          user1: "Alice Freeman",
          user2: user.displayName,
          messages: [
              { message: "Hey, tell me joke (:", sender: user.displayName, timestamp: 5*1000*60 },
              { message: await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => res.value), sender: "Alice Freeman", timestamp: 3*1000*60 },
              { message: "That was fun, send another one 😁", sender: user.displayName, timestamp: 2*1000*60 },
              { message: await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => res.value), sender: "Alice Freeman", timestamp: 1*1000*60 },
            
            ],
        },
        {
          user1: "Josefina",
          user2: user.displayName,
          messages: [
              { message: "Do I need to take test?", sender: user.displayName, timestamp: 1000*60*60 },
              { message: await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => res.value), sender: "Alice Freeman", timestamp: 1000*60*55 },
              { message: "What is with you?🤔", sender: user.displayName, timestamp: 1000*60*53 },
              { message: await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => res.value), sender: "Alice Freeman", timestamp: 1000*60*52 },
            
            ],
        },
        {
          user1: "Velazquez",
          user2: user.displayName,
          messages: [
              { message: "Hey, tell me joke (:", sender: user.displayName, timestamp: 1000*60*60*24 },
              { message: await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => res.value), sender: "Alice Freeman", timestamp: 1000*60*29*24 },
              { message: "That was fun, send another one 😁", sender: user.displayName, timestamp: 1000*60*23*24 },
              { message: await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => res.value), sender: "Alice Freeman", timestamp: 1000*60*22*24 },
            
            ],
        },
      ];



  chat.map((el) => {
    let ref = db.collection("chats").doc();
    ref.set({ user1: el.user1, user2: user.displayName }).then((res) => {
      el.messages.map((elMessage) => {
        ref.collection("messages").doc().set({
          message: elMessage.message,
          sender: elMessage.sender,
          timestamp: new Date() - elMessage.timestamp,
        });
      });
      db.collection("users").doc(user.uid).update({
          chats: firebase.firestore.FieldValue.arrayUnion(ref.id)
      })
    });
  });
}
