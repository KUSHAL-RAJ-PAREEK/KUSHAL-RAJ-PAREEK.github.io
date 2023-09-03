import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaGooglePlay,
  FaGithub,
  FaAndroid,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiSqlite,
  SiFirebase,
  SiCanva,
  SiAndroidstudio,
  SiNextdotjs,
  SiKotlin,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Android Development',
        icons: [
          <FaAndroid/>,
          <FaFigma />,
          <FaGithub />,
          <FaGooglePlay />,
          <FaJava />,
          <SiKotlin/>,
          <SiFirebase/>,
          <SiSqlite/>
        ],
      },
      {
        title: 'Data Structures and Algorithums',
        icons: [<FaJava />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAndroidstudio />, <SiCanva />],
      },
    ],
  },
  {
    title: 'Technologies',
    info: [
      {
        title: 'java - DSA',
        icons: [<FaJava />],
      },
      {
        title: 'Kotlin - Android',
        icons: [<FaAndroid />],
      },
      {
        title: 'Firebase - Data-Base',
        icons: [<SiFirebase />],
      },
      {
        title: 'SQL lite - Data-Base',
        icons: [<SiSqlite />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Youtuber',
        stage: '2016 - 2023',
      },
      {
        title: 'Blender - Animation & Modeling',
        stage: '2018 - 2021',
      },
      {
        title: 'Internshalla student partner - Internshalla',
        stage: '2023 - 2023',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'CSE[B.tech] - Poornima College of Engineering',
        stage: '2026',
      },
      {
        title: 'Sineor Secondary - T.A.V.P sr. sec. school',
        stage: '2022',
      },
      {
        title: 'Secondary - T.A.V.P sr. sec. school',
        stage: '2020',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer motion 
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const[index,setIndex] = useState(0);
  console.log(index);
  return ( 
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles/>
    {/* Avtar img */}
    <motion.div variants={fadeIn('right',0.2)} initial="hidden" 
    animate="show" exit="hidden" 
    className='hidden xl:flex absolute bottom-0 -left-[370px]'
    >
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row 
    gap-x-6'>
    {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
      <motion.h2 
      variants={fadeIn('right',0.2)} initial="hidden" 
    animate="show" exit="hidden"className='h2'>
      Android <span className='text-accent'>Devolopment </span>and UI/UX.</motion.h2>
      <motion.p 
      variants={fadeIn('right',0.4)} initial="hidden" 
    animate="show" exit="hidden"className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
      "Hello, I'm a technology enthusiast 
      exploring my passion for Android app development. 
      I have completed Data Structures and Algorithms using 
      Java, which serves as the foundation for my passion for 
      technology.
</motion.p>
{/* counters */}
      <motion.div 
      variants={fadeIn('right',0.6)} initial="hidden" 
    animate="show" exit="hidden"className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
      <div className='flex flex-1 xl:gap-x-6'>
      {/* experience */}
        <div className='relative flex-1 after:w-[1px] after:h-full
        after:bg-white/10 after:absolute after:top-0 after:right-0'>
     <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
     <CountUp start={0} end={1} duration={12} /> +
     </div>
      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>experience in Android</div>
      </div>
      {/* UI/UX */}
      <div className='relative flex-1 after:w-[1px] after:h-full
        after:bg-white/10 after:absolute after:top-0 after:right-0'>
     <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
     <CountUp start={0} end={3} duration={12} /> +
     </div>
      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>experience in UI/UX</div>
      </div>
      {/* projects */}
      <div className='relative flex-1  after:h-full
        after:bg-white/10 after:absolute after:top-0 after:right-0'>
     <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
     <CountUp start={0} end={7} duration={12} /> +
     </div>
      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Projects</div>
      </div>
      </div>
      </motion.div>
      </div>
      {/* info */}
      <motion.div 
      variants={fadeIn('left',0.4)} initial="hidden" 
    animate="show" exit="hidden"className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
      <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
        {aboutData.map((item,itemIndex)=>{
          return (
            <div key={itemIndex} 
            className={`${
              index === itemIndex &&
            'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
            } cursor-pointer capitalize xl:text-lg 
            relative after:w-8 after:h-[2px] 
            after:bg-white after:absolute after:-bottom-1
             after:left-0`}
             onClick={() => setIndex(itemIndex)}
             >
             {item.title}
             </div>
        );
        })}
      </div>
      <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
        {aboutData[index].info.map((item,itemIndex)=>{
          return (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
            max-w-max gap-x-2 items-center text-white/60'>
          {/* tittle */}
          <div className='font-light mb-2 mf:mb-0'>{item.title}</div>
          <div className='hidden md:flex'>-</div>
          <div>{item.stage}</div>
          <div className='flex gap-x-4'>
            {/* icons */}
          {item.icons?.map((icon,itemIndex)=> {
            return <div className='text-2xl text-white'>{icon}</div>;
          })}
          </div>
          </div>
          );
        })}
      </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
