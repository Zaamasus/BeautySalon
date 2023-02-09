

interface ButtonProps {
  title: string,
}

export function Button (props: ButtonProps) {

  return  ( 
    
  <div className="  text-[16px] font-serif  text-[#ffffff] mt-9 w-[218px] h-[42px] flex  justify-center items-center  rounded bg-green-400
   hover:bg-green-600  hover:h-[45px] hover:w-[234px]  delay-200
  ">
    { props.title }
  </div>
     
  )
}