"use client";
import React from "react";
import { Banner } from "@/components/home/Banner";
import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { LogoTicker } from "@/components/home/LogoTicker";
import { Features } from "@/components/home/Features";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { FAQs } from "@/components/home/FAQs";
import { CallToAction } from "@/components/home/CallToAction";
import { Footer } from "@/components/home/Footer";
import { Pricing } from "@/components/home/Pricingdemo";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />
        <ProductShowcase />
        <FAQs />
        <Pricing />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}