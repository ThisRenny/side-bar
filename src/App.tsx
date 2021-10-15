import React from 'react';

import { BsTwitter, BsInstagram, BsYoutube, BsGithub } from "react-icons/bs"
import profileImage from "./images.jpg"


import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from './types/types';


function App() {
  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "Twitter",
      icon: BsTwitter,
      url: "https://twitter.com/RennyThis"
    },
        {
      id: "2",
      label: "Instagram",
      icon: BsInstagram,
      url: "https://www.instagram.com/this.renny/?hl=es"
    },
        {
      id: "3",
      label: "Youtube",
      icon: BsYoutube,
      url: "https://www.youtube.com/channel/UCm5qjKkdupfRSOzmkw6wa4A"
    },
        {
      id: "4",
      label: "GitHub",
      icon: BsGithub,
      url: "https://github.com/ThisRenny"
    },
  ]

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "Renny Sánchez F",
    title: "Programador",
    photoUrl: profileImage,
    url: "/"
  }
  
  return (
    <div>
      <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default App;
