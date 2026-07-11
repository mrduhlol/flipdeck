import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import { useState } from "react";
import { defaultAvatar } from "../utils/defaultAvatar";

function Home() {
  const [avatar, setAvatar] = useState(defaultAvatar);

  return (
    <>
      <Header />
        <Hero
        avatar={avatar}
        setAvatar={setAvatar}
        />
    </>
  );
}

export default Home;