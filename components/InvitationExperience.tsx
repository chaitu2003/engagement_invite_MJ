"use client";

import { useState } from "react";
import InvitationOpener from "./InvitationOpener";
import MusicPlayer from "./MusicPlayer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Story from "./Story";
import EventDetails from "./EventDetails";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function InvitationExperience() {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpened) {
    return <InvitationOpener onOpen={() => setIsOpened(true)} />;
  }

  return (
    <main className="overflow-hidden">
      <MusicPlayer />
      <Navbar />
      <Hero />
      <Story />
      <EventDetails />
      <Gallery />
      <Footer />
    </main>
  );
}
