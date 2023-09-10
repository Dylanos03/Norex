import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "@/components/home/Hero";
import CoinBoard from "@/components/home/coinBoard";

export default function Home() {
  return (
    <>
      <Hero />
      <CoinBoard />
    </>
  );
}
