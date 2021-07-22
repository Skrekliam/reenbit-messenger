import React, { useEffect, useState } from "react";
import { db } from "./firebase";

function SearchInput({ chatsList, setActiveChats }) {
  const [query, setQuery] = useState("");

//   const handleSearch = () => {

useEffect(() => {
    let tmpArr = [];
    if (query.length < 1) { setActiveChats(false); return;}
    chatsList?.map((chatId) =>
      db
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("message", "desc")
        // .startAt(query)
        // .endAt(query + "\uf8ff")
        // .where("message", ">",query)
        // .where("message", "<", query + "z")
        .get()
        .then((res) => {
          console.log(chatId, res);
          res.docs.map((el) => {
            if (!el.data().message.includes(query)) return;
            tmpArr = [
              ...tmpArr,
              {
                id: chatId,
                chat: {
                  lastMessage: el.data().message,
                  lastUpdated: el.data().timestamp,
                  user1: el.data().sender,
                },
              },
            ];
          });
          return tmpArr;
        })
        .then((res) => setActiveChats(res))
        .catch((err) => console.error(err))
    );

},[query])
    // setActiveChats(tmpArr);
//   };

  return (
    <div className="input-group">
      <span className="icon">
        🔍{" "}
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search in messages"
      />
    </div>
  );
}

export default SearchInput;
