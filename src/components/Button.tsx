interface ButtonProps {
  title: string
}

export function Button ({title}:ButtonProps) {

  return  ( 
    
  <div className=" text-[16px] font-serif  text-[#ffffff] mt-9 w-[218px] h-[42px] flex  justify-center items-center  rounded bg-green-400">
    { title }
  </div>
     
  )
}