import Aspas from '../assets/icons/Aspas.svg';



import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export function Carruseltestimonials () {
return (
<div className='mx-10'>
<Swiper    // install Swiper modules
      modules={[ Pagination, A11y]}
      spaceBetween={150}
      slidesPerView={2}
      navigation
      pagination={{  clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

    {/* Sliede-01 */}
    <SwiperSlide className='h-[320px]'>
      <div
        className=' hover:shadow-2xl h-[264px] w-[554px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded '>

        <div className=' flex '>


          <span className=' font-sans font-normal text-base text-[#0F241D] flex mt-[52px]'>
            <span className='font-News text text-[48px] text-green-400 translate-x-3 translate-y-2'>"</span>

            &nbsp; &nbsp;
            Eu sou cliente do Beautysalon há 5 anos e não troco
            <br />
            por nada! Certamente meu cabelo mudou muito depois <br />
            que comecei a tratar somente com produtos naturais e
            <br />
            veganos. São profissionais incríveis e qualificados.
          </span>
        </div>


        <div className='mb-[52px] flex items-center mt-8 ml-14'>
          <img className='rounded-full w-9 h-9 object-cover mr-2 mt' src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=8ZanqZPUGnq35YEyoEN9706LLYZYGf3JVu7BnsJ28hc=
          " alt="" />

          <span className=' font-serif font-normal text-base text-gray-400'> Wanessa Souza</span>
        </div>


      </div>
    </SwiperSlide>

    {/* Sliede-02 */}
    <SwiperSlide>
      <div
        className='hover:shadow-2xl h-[264px] w-[554px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded '>

        <div className='  justify-center flex '>


          <span className=' font-sans font-normal text-base text-[#0F241D] flex mt-[52px]'>
            <span className='font-News text text-[48px] text-green-400 translate-x-3 translate-y-2'>"</span>

            &nbsp; &nbsp;
            Eu sou cliente do Beautysalon há 5 anos e não troco
            <br />
            por nada! Certamente meu cabelo mudou muito depois <br />
            que comecei a tratar somente com produtos naturais e
            <br />
            veganos. São profissionais incríveis e qualificados.
          </span>
        </div>


        <div className='mb-[52px] flex items-center mt-8 ml-14'>
          <img className='rounded-full w-9 h-9 object-cover mr-2 mt' src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=8ZanqZPUGnq35YEyoEN9706LLYZYGf3JVu7BnsJ28hc=
          " alt="" />

          <span className=' font-serif font-normal text-base text-gray-400'> Wanessa Souza</span>
        </div>


      </div>
    </SwiperSlide>



    {/* Sliede-01 */}
    <SwiperSlide className=''>
      <div
        className=' hover:shadow-2xl h-[264px] w-[554px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded '>

        <div className='  justify-center flex '>


          <span className=' font-sans font-normal text-base text-[#0F241D] flex mt-[52px]'>
            <span className='font-News text text-[48px] text-green-400 translate-x-3 translate-y-2'>"</span>

            &nbsp; &nbsp;
            Eu sou cliente do Beautysalon há 5 anos e não troco
            <br />
            por nada! Certamente meu cabelo mudou muito depois <br />
            que comecei a tratar somente com produtos naturais e
            <br />
            veganos. São profissionais incríveis e qualificados.
          </span>
        </div>


        <div className='mb-[52px] flex items-center mt-8 ml-14'>
          <img className='rounded-full w-9 h-9 object-cover mr-2 mt' src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=8ZanqZPUGnq35YEyoEN9706LLYZYGf3JVu7BnsJ28hc=
          " alt="" />

          <span className=' font-serif font-normal text-base text-gray-400'> Wanessa Souza</span>
        </div>


      </div>
    </SwiperSlide>

    {/* Sliede-01 */}
    <SwiperSlide className=''>
      <div
        className=' hover:shadow-2xl h-[264px] w-[554px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded '>

        <div className='  justify-center flex '>


          <span className=' font-sans font-normal text-base text-[#0F241D] flex mt-[52px]'>
            <span className='font-News text text-[48px] text-green-400 translate-x-3 translate-y-2'>"</span>

            &nbsp; &nbsp;
            Eu sou cliente do Beautysalon há 5 anos e não troco
            <br />
            por nada! Certamente meu cabelo mudou muito depois <br />
            que comecei a tratar somente com produtos naturais e
            <br />
            veganos. São profissionais incríveis e qualificados.
          </span>
        </div>


        <div className='mb-[52px] flex items-center mt-8 ml-14'>
          <img className='rounded-full w-9 h-9 object-cover mr-2 mt' src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=8ZanqZPUGnq35YEyoEN9706LLYZYGf3JVu7BnsJ28hc=
          " alt="" />

          <span className=' font-serif font-normal text-base text-gray-400'> Wanessa Souza</span>
        </div>


      </div>
    </SwiperSlide>
    {/* Sliede-01 */}
    <SwiperSlide className=''>
      <div
        className=' hover:shadow-2xl h-[264px] w-[554px]  shadow-lg border-b-green-400 border-solid border-b-[5px]  rounded '>

        <div className='  justify-center flex '>


          <span className=' font-sans font-normal text-base text-[#0F241D] flex mt-[52px]'>
            <span className='font-News text text-[48px] text-green-400 translate-x-3 translate-y-2'>"</span>

            &nbsp; &nbsp;
            Eu sou cliente do Beautysalon há 5 anos e não troco
            <br />
            por nada! Certamente meu cabelo mudou muito depois <br />
            que comecei a tratar somente com produtos naturais e
            <br />
            veganos. São profissionais incríveis e qualificados.
          </span>
        </div>


        <div className='mb-[52px] flex items-center mt-8 ml-14'>
          <img className='rounded-full w-9 h-9 object-cover mr-2 mt' src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=8ZanqZPUGnq35YEyoEN9706LLYZYGf3JVu7BnsJ28hc=
          " alt="" />

          <span className=' font-serif font-normal text-base text-gray-400'> Wanessa Souza</span>
        </div>


      </div>
    </SwiperSlide>

  </Swiper>
</div>
);
}