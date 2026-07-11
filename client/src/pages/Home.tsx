import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import { useState } from "react";
import { defaultAvatar } from "../utils/defaultAvatar";
import JoinRoomModal from "../components/modals/JoinRoomModal";

function Home() {
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <>
      <Header />
        <Hero
            avatar={avatar}
            setAvatar={setAvatar}
            onJoinRoom={() => setJoinOpen(true)}
        />

        <JoinRoomModal
            open={joinOpen}
            onClose={() => setJoinOpen(false)}
        />
    </>
  );
}

export default Home;