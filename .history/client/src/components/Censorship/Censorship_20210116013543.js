import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Redirect } from "react-router";

import
return (
    <div className="outerContainer">
      <div className="container">
			<In></In>
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
