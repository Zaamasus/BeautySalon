import { Logo } from "../components/logo";
import { GrInstagram,GrFacebookOption, GrYoutube } from 'react-icons/gr'
export function Footer () {
return(
<div className=" bg-green-400 px-8 py-16  flex justify-between items-center">

  <div className="  ">
    <div className=" ">
    <Logo  />

    </div>
     
     <p className=" mt-6  text-white"> @2021 BeautySalon</p>
     <p className="mt-3 text-white "> Todos os direitos reservados.</p>
  </div>

  <div className="flex mr-14">  
<div className="ml-2"> 
<GrInstagram size={24} height=" 50 " color="white"/>
</div>

<div className="ml-2">
<GrFacebookOption size={24} color="white"/>
</div>

<div className="ml-2">

<GrYoutube size={24} color="white"/>

</div>

  </div>
</div>
)
}