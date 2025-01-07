import Bentodemo from './bentogrid';

export const Features = () => {
  return (

    <div className="bg-black text-white py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className="text-center font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tighter">Kurstanbul KOS: Size Ne Sunuyoruz</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
        Kurstanbul KOS, sürücü kurslarınızın yönetimini dijital ortamda kolaylaştıran ve sizleri sürücü adayları ile buluşturan platform.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div>
      </div>
    </div>
  )
}
