import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Redirect } from "react-router";


const Censorchip = ({ }) => {
	socket = io(ENDPOINT);
}
return (
    <div className="outterContainer2">
      <div className="container2">
			<h6>
				Censorchip circumvision is necessary for many people, and many reasons. Here Are some tips to Help stay anonymous and safe.
			</h6>
			<ul>
				<li className="list1">When Ever Possible Meet in a person to discuss the room name(which should be random but memorable), and the usernames that your going to go by.(never write these things down use only your memory for gaurenteed security)</li>
				<li className="list1">
					Use a vps and or Tor if you have it configured correctly to handle both layers of security.
				</li>
				<li className="list1">
				Understand that any browser you use while using this app could have trackers because of logins to 3rd party sites(google, facebook, linkin, and so on). We reccommend that to stay absolutely anonymous
				</li>
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
