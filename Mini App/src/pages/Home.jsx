import React from "react";
import About from "../components/js/home/about/About";
import Community from "../components/js/home/community/Community";
import Covered from "../components/js/home/covered/Covered";
import Feature from "../components/js/home/feature/Feature";
import Hero from "../components/js/home/hero/Hero";
import Technology from "../components/js/home/technology/Technology";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <Community />
      <Technology />
      <Covered />
    </>
  );
}
