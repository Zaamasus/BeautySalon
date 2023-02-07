import { Button } from "../components/Button";
import { Whats } from "../components/Whats";

export function Contact () {
  return (
    <div>
      <div className="items-center justify-center text-center ">
        <h1> Entre em contato com a gente!</h1>
        
        <p>
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


      <div></div>
    </div>
  )
}