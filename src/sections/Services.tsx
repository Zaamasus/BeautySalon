import { CarruselService } from "../components/CarruselServices";

export function Services () {
return(
<div className="block">

  <div className="text-center ">
    <h2 className="font-sans font-bold text-4xl text-['hsla(159, 41%, 10%, 1)">
      Serviços
    </h2>

    <p className="font-serif font-normal  text-[#767676] mt-3">

      Com mais de 10 anos no mercado, o <span className="text-green-400">Beautysalon</span> já
      <br />

      conquistou clientes de inúmeros países com seus tratamentos

      <br />
      exclusivos e totalmente naturais
    </p>
  </div>

  <div>
    <CarruselService/>
  </div>

</div>

)
}