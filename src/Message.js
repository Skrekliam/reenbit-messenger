import React from "react";
import "./message.scss";

function Message({toggleMenu, user}) {
  return (
    <div className="messageBlock" onClick={() => toggleMenu('page')}>
      {/* chat avatar + name */}
      <div className="message__header">
        <img src="./imgs/menu.svg" onClick={() => toggleMenu('btn')} alt="Back" className="back" />
        <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />{" "}
        <p>Josefina</p>
      </div>
      <div className="message__text">
        <div className="income">
          <div className="textSection">
            <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
            <div className="messageContext">
              <p className="messageIncome">
                {/* Quickly come to the meeting room 1B, we have a big server issue */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores debitis sint ut, minima quae dicta obcaecati,
                accusantium at voluptates voluptatibus, architecto quas sed
                impedit quam quis nam maxime tempora et praesentium veniam modi
                cupiditate officia omnis! Exercitationem nesciunt nobis atque
                facere repellendus eligendi eaque. Quia excepturi sit optio nam
                ratione!
              </p>
              <span className="time">4/22/17, 4:00AM</span>
            </div>
          </div>
        </div>
        <div className="outcome">
          <p className="messageOutcome">
            {/* I'm having breakfest right now, can't you wait for 10 minutes? */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quod
            culpa id repudiandae, aliquam, aperiam quae suscipit sint, ducimus
            ullam nobis? Culpa porro distinctio unde optio ipsa qui nobis, aut
            sunt sit voluptatum laboriosam a laborum facere earum exercitationem
            perspiciatis reprehenderit maxime fugit ab error consectetur alias.
            Nobis, culpa officiis!
          </p>
          <span className="time">4/22/17, 4:05AM</span>
        </div>
        <div className="income">
          <div className="textSection">
            <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
            <div className="messageContext">
              <p className="messageIncome">We are losing money! Quick!</p>
              <span className="time">4/22/17, 4:10AM</span>
            </div>
          </div>
        </div>
        <div className="outcome">
          <p className="messageOutcome">
            {/* I'm having breakfest right now, can't you wait for 10 minutes? */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quod
            culpa id repudiandae, aliquam, aperiam quae suscipit sint, ducimus
            ullam nobis? Culpa porro distinctio unde optio ipsa qui nobis, aut
            sunt sit voluptatum laboriosam a laborum facere earum exercitationem
            perspiciatis reprehenderit maxime fugit ab error consectetur alias.
            Nobis, culpa officiis!
          </p>
          <span className="time">4/22/17, 4:05AM</span>
        </div>
      </div>
      <div className="message__send">
        <div className="input-group">
          <button className="icon"><img src="./imgs/paper-plane.svg" alt="send" /></button>
          <input type="text" placeholder="Type your message" />
        </div>
      </div>
    </div>
  );
}

export default Message;
