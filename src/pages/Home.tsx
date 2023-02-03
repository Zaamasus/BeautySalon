import { Button } from "../components/Button";

export function Home() {

  return(
    <div className=" lg:my-1 lg:mx-8 lg:mt-20 lg:flex "
    >
      

      <div className="  flex-1 justify-center items-center  my-auto mx-auto " >
        <h2 className=" font-sans font-bold text-4xl text-['hsla(159, 41%, 10%, 1)']      "> Saúde natural para <br /> os seus cabelos
        </h2>

        <p className="font-serif font-normal  text-[#767676] mt-3"> Um salão exclusivo em Belo Horizonte,<br /> especializado em tratamentos naturais</p>
        <Button title="Agendar um horário"/>
      </div>




      <div className=" flex-1 relative  ">

        <div className=" static">

          <div className=" static rounded  bg-green-400 w-[581px] h-[405px]"></div>

        <img className=" absolute left-0 -translate-x-[77px] top-[68px] rounded" src="https://plus.unsplash.com/premium_photo-1669675935494-9dae871d6836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=561&q=375" 
        alt="homan bauty" />

        </div>

      </div>

     

    </div>
  )
}