"use client";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import QuoteBorder from "@/components/quote";

export default function Home() {
  return <section className="w-full h-screen flex items-center justify-center bg-slate-300 flex-col gap-[30px]">
    <h1 className="text-[50px] font-sans font-bold">Random quote generator using api</h1>
    <p className="text-[30px] font-sans font-medium">Click border to change quote</p>
    <QuoteBorder></QuoteBorder>
  </section>;
}
