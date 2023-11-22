import { FaCircle } from 'react-icons/fa';

import './styles.css'

function FirstSection() {
  return(
    <section className="h-screen flex justify-around items-center bg-black sm:flex-row min-[320px]:text-center border-t-2 min-[320px]:flex-col">
        <div className='p-12'>
           <div className='flex items-center gap-3 min-[320px]:justify-center'>
            <FaCircle color='#fff' />
            <h3 className='text-white font-medium text-2xl sm:text-2xl min-[320px]:text-sm'>Capcom Interactive Entertainment</h3>
           </div>
           <h2 className='text-white font-extrabold sm:text-5xl my-6 min-[320px]:text-4xl'>Embarque com<br/> Dante, Nero e V em<br/> uma jornada épica.</h2>
           <p className='text-white text-lg max-w-4xl mb-6'>Conta a história de Dante, Nero e do misterioso V, personagem que procura a ajuda de Dante para poder derrotar o temido Urizen, o rei demônio.</p>
            <div className='flex gap-2 min-[320px]:justify-center'>
                <img className='w-21 h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/2560px-Capcom_logo.svg.png" alt="logo da empresa NaughtyDog" width={300} />
                <img className='w-21 h-20' src="https://ovicio.com.br/wp-content/uploads/2023/02/20230222-ovicio-playstation-logo-compostior.jpg" alt="logo da PlayStation" />
            </div>
        </div>

        <div className='px-6 flex sm:flex sm:w-6/12 min-[320px]:justify-center min-[320px]:hidden'>
            <img className='h-full w-11/12 img' src="https://tm.ibxk.com.br/2018/06/14/devil-may-cry-5-14173929735296.jpg" alt="joel e ellie" />
        </div>
    </section>
  )
}

export default FirstSection;