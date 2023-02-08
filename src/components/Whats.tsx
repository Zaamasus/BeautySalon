
import { ImWhatsapp } from 'react-icons/im';

interface ButtonProps {
  title?: string
}


export function Whats (props: ButtonProps, ) {

  return  ( 

<div className="  text-[16px] font-serif  text-[#ffffff] mt-9 w-[218px] h-[42px] flex  justify-center items-center  rounded bg-green-400">
    
    <div className='mr-[10px]'>
      <ImWhatsapp/>
    </div>
    
   <div className='text-[16px] font-serif  text-[#ffffff] bg-green-400'>{props.title}</div> 
  </div>
     
  )
}