import { FaCircle } from 'react-icons/fa';

import './styles.css'


function SecondSection() {

  return(
    <section className="h-screen flex justify-around items-center bg-black sm:flex-row min-[320px]:text-center pt-60 min-[320px]:flex-col">
        <div className='p-12 bg-black'>
           <div className='flex items-center gap-3 min-[320px]:justify-center'>
            <FaCircle color='#fff' />
            <h3 className='text-white font-medium text-2xl sm:text-2xl min-[320px]:text-sm'>Conheça os personagens</h3>
           </div>
           <h2 className='text-white font-extrabold sm:text-5xl my-6 min-[320px]:text-4xl'>Toda grande aventura é uma história esperando para ser contada</h2>
           <p className='text-white text-lg flex sm:justify-center sm:text-center sm:w-full py-6 mb-6 '>Lute e Vença<br/> Reviva o aclamado jogo que deu início a tudo, totalmente reconstruído do zero para o console PlayStation®5.</p>
            <div className='flex gap-2 mb-96 min-[320px]:justify-center min-[320px]:p-6'>
                <img className=' sm:w-6/12 min-[320px]:w-full h-full' src="https://vgboxart.com/resources/logo/15994_devil-may-cry-5-prev.png" />
            </div>
        </div>
       <div>
       
       </div>
    </section>
  )
}

export default SecondSection;