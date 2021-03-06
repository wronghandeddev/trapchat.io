import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import logo from "../../icons/logo.png";
import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        TrapChat.io Is for privacy minded people so when{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
        make sure your talking to the right perosn.{ }
        <span role="img" aria-label="emoji">
          😉
        </span>
      </h1>
      <h2>
        Created by and for People{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
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
