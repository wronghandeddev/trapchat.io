import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Redirect } from "react-router";


const Censorship = ({ }) => {
	socket = io(ENDPOINT);
}
return ({
    <div className="outterContainer2">
		<div className="container2">
		<h1 className="title1">
			Censorship circumvision
		</h1>
			<h4>
				Censorchip circumvision is necessary for many people, and many reasons. Here Are some tips to Help stay anonymous and safe.
			</h4>
			<ul>
				<li className="list1">When Ever Possible Meet in a person to discuss the room name(which should be random but memorable), and the usernames that your going to go by.(never write these things down use only your memory for guaranteed security)</li>
				<li className="list1">
					Use a vps and or Tor if you have it configured correctly to handle both layers of security.
				</li>
				<li className="list1">
				Understand that any browser you use while using this app could have trackers because of logins to 3rd party sites(google, facebook, linkin, and so on). We reccommend that to stay absolutely anonymous use a new device never logged into personal accounts on public wifi.
				</li>
		</ul>

	</div>
	  </div >
		  
};
  );


export default Censorship;
