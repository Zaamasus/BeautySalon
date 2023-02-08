import { Button } from "../components/Button";
import { Whats } from "../components/Whats";
import  Phone  from '../assets/icons/phone.svg'
import  Maping  from '../assets/icons/map-pin.svg'
import  Emails from '../assets/icons/mail.svg'


export function Contact () {
  return (
    <div className="flex items-center ">
      <div className=" ml-10 flex-1">
        <h1 className=" font-sans font-bold text-4xl text-[#0F241D] "> Entre em contato <br /> com a gente!</h1>
        
        <p className=" font-serif font-normal text-lg text-gray-400 mt-3 mb-6  ">
          Entre em contato com a Beautysalon, 
        <br />
          queremos tirar suas dúvidas, ouvir suas 
        <br />
          críticas e sugestões.
        </p>

        <Whats 
        
        title="Entrar em contato"
        />

        
      </div>


      <div className="flex-1 ml-[120px]">

      <div className="flex items-center text-center ">
        <img className="mr-3" src={ Phone} alt="" /> 
        <span className=" font-serif font-normal text-base text-gray-400"> 31 984173711 </span>
      </div>

      <div className="flex items-center text-center mt-8">
        <img className="mr-3" src={ Maping } alt="" /> 
        <span  className=" font-serif font-normal text-base text-gray-400"> R. Serenata, 346 </span>
      </div>

      <div className="flex items-center text-center mt-8">
        <img className="mr-3" src={ Emails } alt="" /> 
        <span  className=" font-serif font-normal text-base text-gray-400"> samuelginformatica@gmail.com </span>
      </div>


      </div>
    </div>
  )
}