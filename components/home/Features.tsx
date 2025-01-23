import Bentodemo from './bentogrid';

export const Features = () => {
  return (

    <div className="bg-black text-white py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className="text-center font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tighter">Kurstanbul KOS Nedir?</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
        Kurstanbul KOS, sürücü kurslarının tüm süreçlerini dijitalleştirerek hız, verimlilik ve anlık iletişim sağlıyor. Öğrencilerle doğrudan bağlantıya geçin, evrak işlerini kolayca yönetin. Sizi, kursiyer ile buluşturan platform.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div>
      </div>
    </div>
  )
}
