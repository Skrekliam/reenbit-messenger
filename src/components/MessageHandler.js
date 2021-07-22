export default function messageHandler(chatId, action) {
  switch (action) {
    case "create":
      var audio = new Audio("./sounds/notification_sound.mp3");
      audio.play();
        document.querySelector(`#${chatId}`).classList.add('newMessage');
      break;
  }
}
