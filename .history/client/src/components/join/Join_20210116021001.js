import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../icons/logo.png";
import "./Join.css";
import Censorship from "../../Censorship";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
	const Censorship(
		onclick={(mouseDown) => setPage(event.target.value));
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">
          TrapChat.io
          <logo />
        </h1>
        <h5 className="missionStatement">
          A Censorship Minded Chat service, no logging, no signin, just know the
          room and the user your supposed to be talking to
        </h5>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Start Chatting
          </button>
        </Link>
        <Link>
          onClick={(event) => (Censoship().preventDefault() : null)}
        </Link>
      </div>
    </div>
  );
};

export default Join;
