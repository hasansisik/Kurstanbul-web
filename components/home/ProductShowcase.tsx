"use client"
import appScreen from "../../public/images/product.avif";
import Image from 'next/image';
import {motion , useScroll, useTransform} from 'framer-motion';
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]

  });

const rotateX = useTransform(scrollYProgress, [0, 1], [15,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [.3,1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] pt-[350px] pb-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">KOS Arayüz</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-xl text-white/70 text-center mt-5 ">Kullanıcı dostu arayüzü sayesinde kurs yönetimi, personel takibi, değerlendirme raporları, ehliyet sınıfları, ders kayıtları ve kurum bilgileri gibi işlemleri tek bir yerden yönetmeyi sağlar. Ayrıca, aday kayıt, dönem bilgileri, evrak yönetimi ve durum takibi gibi detaylı süreçleri hızlı ve etkili bir şekilde gerçekleştirir.</p>
        </div>
        <div className="flex justify-center">
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",

        }}
        >
        <Image src={appScreen}  ref={appImage} alt="app screen" className="mt-14" />
        </motion.div>
        </div>

      </div>

    </div>
  )
};
