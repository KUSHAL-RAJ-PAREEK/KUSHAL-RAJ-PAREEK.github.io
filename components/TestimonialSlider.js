// testimonial data
export const testimonialSlider = [
  {
    image: '/geeta 1.png',
    name: 'नारायण',
    position: 'नारायण',
    message:
      'श्रद्धावान्ल्लभते ज्ञानं तत्पर: संयतेन्द्रिय:। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥',
  },
  {
    image: '/geeta 2.png',
    name: 'नारायण',
    position: 'नारायण',
    message:
      'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मन:॥',
  },
  {
    image: '/geeta 3.png',
    name: 'नारायण',
    position: 'नारायण',
    message:
      'यस्मान्नोद्विजते लोको लोकान्नोद्विजते च य:। हर्षामर्षभयोद्वेगैर्मुक्तो य: स च मे प्रिय:॥',
  },
];

// data

//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation,Pagination } from "swiper";
// images
import Image from 'next/image';

//icons
import { FaQuoteLeft } from 'react-icons/fa'
import Testimonials from '../pages/testimonials';
const TestimonialSlider = () => {
  return (
  <Swiper 
  navigation={true}
  pagination={{
    clickable:true
  }}
  modules={[Navigation,Pagination]}
  className='h-[400px]' 
  >
  {testimonialSlider.map((person,index)=>{
    return (
      <SwiperSlide key={index}>
      <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
      px-16'>
        {/* avatar, name, position */}
        <div className='w-full max-w-[300px] flex flex-col 
        xl:justify-center items-center relative mx-auto xl:mx-0'>
          <div className='flex flex-col justify-center text-center'>
            {/* avatar */}
            <div className='mb-2 mx-auto'>
              <Image src={person.image} width={100} height={100} alt=''/>
            </div>
            {/* position */}
            <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
          </div>
        </div>
        {/* quate & message */}
        <div className='flex-1 flex flex-col 
        justify-center before:w-[1px] xl:before:bg-white/20 
        xl:before:absolute xl:before:left-0 
        xl:before:h-[200px] relative xl:pl-20'>
          {/* quate icon */}
          <div className='mb-4'>
          <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
          md:mx-0'/>
          </div>
          {/* message */}
          <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
        </div>
      </div>
    </SwiperSlide>
    );
  })};
  </Swiper>
  );
};

export default TestimonialSlider;

