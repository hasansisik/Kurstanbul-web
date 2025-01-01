"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const images = [
  "/images/auth-b-1.png",
  "/images/auth-b-2.png",
  "/images/auth-b-3.png",
];

const quotes = [
  {
    text: "Ticarette başarı, doğru zamanda doğru adımı atmaktan geçer.",
    author: "Henry Ford",
  },
  {
    text: "Başarı, hazırlık ve fırsatın kesiştiği noktadır.",
    author: "Bobby Unser",
  },
  {
    text: "Başarının anahtarı, insanların ne istediğini bilmektir.",
    author: "Steve Jobs",
  },
];

export default function AuthLayout({ children }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 50000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Image
          src={images[currentImageIndex]}
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src={images[currentImageIndex]}
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div
          className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/images/gegift-w-icon.png"
              width={40}
              height={40}
              alt="kurstanbul"
            />
            kurstanbul
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;{quotes[currentQuoteIndex].text}&rdquo;
              </p>
              <footer className="text-sm">{quotes[currentQuoteIndex].author}</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}