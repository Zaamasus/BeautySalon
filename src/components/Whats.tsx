

interface ButtonProps {
  title: string,
}

import  WhatsappImage from '../assets/icons/Whatsapp.svg';

export function Whats (props: ButtonProps) {

  return  ( 

<div className=" text-[16px] font-serif  text-[#ffffff] mt-9 w-[218px] h-[42px] flex  justify-center items-center  rounded bg-green-400">

<img className='items-center mr-5' src={WhatsappImage} alt="" />
{ props.title }

  </div>
     
  )
}