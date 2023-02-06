import  Capilar  from '../assets/icons/Capilar.svg';

import  Icon01  from '../assets/icons/Icon-1.svg';

import  Icon02  from '../assets/icons/Icon-2.svg';



import {  Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export function CarruselService () {
  return (
       <div className='mx-10'>
    <Swiper    // install Swiper modules
      modules={[ Pagination, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      pagination={{  clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

       {/* Sliede-01 */}
      <SwiperSlide className='hover:shadow-2xl h-[352px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded'>
        <div className='' >
          
        
        <img className='mx-auto mt-14' src={Capilar} alt="" />
        
        <h2 className='mt-[26.5px] font-sans font-bold text-2xl text-center'>
          Terapia capilar
          </h2>


        <p className='mt-3 font-serif font-normal text-base text-center text-gray-400 mb-14'>
          Terapia completa para couro
          <br />
           cabeludo e fios, protegendo todos
           <br />
            os tipos de cabelos, inclusive os 
            <br />
            longos e finos.</p>

          </div>
      </SwiperSlide>


         {/* Sliede-02 */}
      <SwiperSlide className='hover:shadow-2xl h-[352px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded'>
        <div className='' >
          
        
        <img className='mx-auto mt-14' src={Icon01} alt="" />
        
        <h2 className='mt-[26.5px] font-sans font-bold text-2xl text-center'>
         Corte
          </h2>


        <p className='mt-3 font-serif font-normal text-base text-center text-gray-400 mb-14'>
          Terapia completa para couro
          <br />
           cabeludo e fios, protegendo todos
           <br />
            os tipos de cabelos, inclusive os 
            <br />
            longos e finos.</p>

          </div>
      </SwiperSlide>



    {/* Sliede-03 */}
      <SwiperSlide className='hover:shadow-2xl h-[352px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded'>
        <div className='' >
          
        
        <img className='mx-auto mt-14' src={Icon02} alt="" />
        
        <h2 className='mt-[26.5px] font-sans font-bold text-2xl text-center'>
        Tratamentos
          </h2>


        <p className='mt-3 font-serif font-normal text-base text-center text-gray-400 mb-14'>
          Terapia completa para couro
          <br />
           cabeludo e fios, protegendo todos
           <br />
            os tipos de cabelos, inclusive os 
            <br />
            longos e finos.</p>

          </div>
      </SwiperSlide>


    {/* Sliede-04 */}

      <SwiperSlide className='hover:shadow-2xl h-[352px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded'>
        <div className='' >
          
        
        <img className='mx-auto mt-14' src={Capilar} alt="" />
        
        <h2 className='mt-[26.5px] font-sans font-bold text-2xl text-center'>
          Terapia capilar
          </h2>


        <p className='mt-3 font-serif font-normal text-base text-center text-gray-400 mb-14'>
          Terapia completa para couro
          <br />
           cabeludo e fios, protegendo todos
           <br />
            os tipos de cabelos, inclusive os 
            <br />
            longos e finos.</p>

          </div>
      </SwiperSlide>



    {/* Sliede-05 */}

      <SwiperSlide className='hover:shadow-2xl h-[352px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded'>
        <div className='' >
          
        
        <img className='mx-auto mt-14' src={Capilar} alt="" />
        
        <h2 className='mt-[26.5px] font-sans font-bold text-2xl text-center'>
          Terapia capilar
          </h2>


        <p className='mt-3 font-serif font-normal text-base text-center text-gray-400 mb-14'>
          Terapia completa para couro
          <br />
           cabeludo e fios, protegendo todos
           <br />
            os tipos de cabelos, inclusive os 
            <br />
            longos e finos.</p>

          </div>
      </SwiperSlide>


     
    </Swiper>
    </div>
  );
}