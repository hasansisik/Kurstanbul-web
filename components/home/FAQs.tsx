"use client"
import { useState } from "react";
import PlusIcon from "../../public/icons/plus.svg";
import MinusIcon from "../../public/icons/minus.svg";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "Kurstanbul KOS nedir?",
    answer:"Kurstanbul KOS, sürücü kursları için geliştirilmiş bir yönetim sistemidir. Kurs kayıtları, öğrenci takibi, eğitmen atamaları, ödeme yönetimi ve sınav takibi gibi işlemleri dijital ortamda kolayca yönetmenizi sağlar."},
  {
    question: "Kurstanbul KOS'a nasıl üye olabilirim?",
    answer:
      "Kurstanbul KOS’a üye olmak için web sitesi üzerinden kayıt işlemi yapabilirsiniz. Kayıt işlemi sonrasında, sürücü kursunuzu sisteme ekleyebilir ve yönetmeye başlayabilirsiniz.",
  },
  {
    question: "Kurstanbul KOS, sürücü kurslarına hangi özellikleri sunuyor?",
    answer:
      "Kurstanbul KOS, öğrenci kayıtları, sınav takibi, ödeme yönetimi, eğitim materyalleri paylaşımı, eğitmen atamaları, sertifika düzenleme ve raporlama gibi özellikler sunar.",
  },
  {
    question: "Sistem, öğrencilerin eğitim ilerlemesini nasıl takip eder?",
    answer:
      "Kurstanbul KOS, öğrencilerin eğitim süreçlerini takip etmek için ders geçmişi, sınav sonuçları ve başarı durumu gibi bilgileri kaydeder. Her öğrenciye özel bir profil oluşturularak eğitim ilerlemesi izlenebilir.",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
        Sıkça Sorulan Sorular
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
