import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import logo from "../../icons/logo.png";
import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 className="text1">
        TrapChat.io

      </h1>
      <h2>
        Created by Pricacy conserned people for Privavacy con
    >
          ❤️
        
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <img alt="TrapChat" src={logo} />
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
