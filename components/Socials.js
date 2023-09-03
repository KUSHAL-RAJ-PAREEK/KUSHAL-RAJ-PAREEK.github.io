// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiTwitterLine,
  RiGithubLine,
  RiBlenderLine,
  RiLinkedinLine,
  RiNodeTree} from 'react-icons/ri'
import { SiLeetcode } from "react-icons/si";

const Socials = () => {
  return (
  <div  className='flex items-center gap-x-5 text-lg'>
  <Link href={'https://www.linkedin.com/in/kushal-raj-pareek/'} className='hover:text-accent transition-all duration-300'>
  <RiLinkedinLine/>
  </Link>
  <Link href={'https://github.com/KUSHAL-RAJ-PAREEK'} className='hover:text-accent transition-all duration-300'>
  <RiGithubLine/>
  </Link>
  <Link href={'https://www.youtube.com/channel/UCYrO_5TEgJbvZVCEu106mvg'} className='hover:text-accent transition-all duration-300'>
  <RiYoutubeLine/>
  </Link>
  <Link href={'https://twitter.com/KushalrajPareek'} className='hover:text-accent transition-all duration-300'>
  <RiTwitterLine/>
  </Link>
  <Link href={'https://www.youtube.com/channel/UCWNclqp8jZs_Wou-3qpjpAA'} className='hover:text-accent transition-all duration-300'>
  <RiBlenderLine/>
  </Link>
  <Link href={'https://leetcode.com/KUSHAL-RAJ-PAREEK/'} className='hover:text-accent transition-all duration-300'>
  <SiLeetcode/>
  </Link>
  </div>
  );
};

export default Socials;
