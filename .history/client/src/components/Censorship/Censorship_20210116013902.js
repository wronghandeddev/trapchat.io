import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Redirect } from "react-router";

import
return (
    <div className="outerContainer">
      <div className="container">
			<h1>
				Censorchip circumvision is necessary for many people, and many reasons. Here Are some tips to Help stay anonymous and safe.
			</h1>
			<ul>
				<li>When Ever Possible Meet in a person to discuss the room name(which should be random but memorable), and the usernames that your going to go by.</li>
			</ul>
			<p>

		</p>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Censorship;