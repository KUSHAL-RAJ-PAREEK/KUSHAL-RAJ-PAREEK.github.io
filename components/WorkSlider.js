// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/1.png',
        },
        {
          title: 'title',
          path: '/2.png',
        },
        {
          title: 'title',
          path: '/3.png',
        },
        {
          title: 'title',
          path: '/4.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/5.png',
        },
        {
          title: 'title',
          path: '/6.png',
        },
        {
          title: 'title',
          path: '/7.png',
        },
        {
          title: 'title',
          path: '/8.png',
        },
      ],
    },
  ],
};
//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from "swiper";
// images
import Image from 'next/image';

//icons
import { BsArrowRight } from 'react-icons/bs'
const WorkSlider = () => {
  return (
  <Swiper 
  spaceBetween={10}
  pagination={{
    clickable:true
  }}
  modules={[Pagination]}
  className='h-[280px] sm:h-[480px]' 
  >
  {workSlider.slides.map((slide,index)=>{
    return (
      <SwiperSlide key={index}>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
        {slide.images.map((image, index)=> {
          return (
          <div className='relative rounded-lg overflow-hidden 
          flex items-center justify-center group' key={index}>
            <div className='flex items-center justify-center 
            relative overflow-hidden group'>
              {/* image */}
              <Image src={image.path} width={500} height={300} alt=''/>
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-l 
              from-transparent via-[#e838cc] to-[#4a22bd] 
              opacity-0 group-hover:opacity-80 transition-all 
              duration-700'></div>
              {/* tittle */}
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
              transition-all duration-300'>
              <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                {/* title part 1 */}
                <div className='delay-100'>ON</div>
                {/* title part 2 */}
                <div className='translate-y-[500%] 
                group-hover:translate-y-0 transition-all 
                duration-300 delay-150'>
                GITHUB OR YOUTUBE</div>
                {/* icons*/}
                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all
                duration-all delay-200'><BsArrowRight/></div>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </SwiperSlide>
    );
  })};
  </Swiper>
  );
};

export default WorkSlider;
