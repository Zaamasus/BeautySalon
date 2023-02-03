import BeatyFull from '../assets/BeatyFull.png'

export function Services () {
return(
<div className="mx-8 flex">

  <div className=" flex-1 relative">

    <div className="static">
      <div className=" static bg-green-400 -translate-x-[192px] -translate-y-[2.75rem] w-[617px] h-[412px]"></div>

      <img className="-translate-x-8 absolute top-0 left-0 " src={BeatyFull} alt="" />
    </div>

  </div>

  <div className="flex1  ml-16 mr-[121px]">
<h2 className=" font-sans font-bold text-4xl text-['hsla(159, 41%, 10%, 1)']" >
Sobre nós
</h2>
<p className="font-serif font-normal  text-[#767676] mt-3">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis 
bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 
 
</p>


<p className="font-serif font-normal  text-[#767676] mt-3">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci obcaecati, perspiciatis in asperiores tempore! 
  Hic cum inventore accusantium. Recusandae ipsam ex magni alias aliquid! Similique vel voluptatum reiciendis neque!
 
</p>


<p className="font-serif font-normal  text-[#767676] mt-3">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci obcaecati, perspiciatis in asperiores tempore! 
 
</p>


  </div>

</div>
)
}