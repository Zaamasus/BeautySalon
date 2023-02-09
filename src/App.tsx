import { Header } from "./sections/Header"
import { Home } from "./sections/Home"
import { About} from "./sections/About"
import { Services } from "./sections/Services"
import { Testimonials } from "./sections/Testimonials"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"

function App() {

return (
  
<div className=" relative" id="home" >

  {/* Header/menu/logo */}
  <div className=" fixed top-0 left-0 right-0 z-50">
    <Header />
  </div>



  {/*About */}
  <div className=" max-sm:ml-3  mt-32 ml-14 pb-[172px]  about 8">
    <Home />
  </div>

  <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid " id="services"></div>


  {/* About */}
  <div className=" pb-[172px]  ">
    <About />
  </div>


  <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid " id="services"></div>

  {/* Services */}
  <div className="max-sm:mx-3  pb-[172px] mx-14 ">
    <Services />
  </div>

  <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid" id="depo"></div>
  {/* Testimonials */}

  <div className=" max-sm:mx-3 pb-[172px] mx-14" >
    <Testimonials />
  </div>
  <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid" id="contact"></div>

  {/* Contact */}

  <div className=" max-sm:mx-3 pb-[172px]  mx-14" >
    <Contact />
  </div>

  <div className="  border-gray-400 border-solid"></div>

  <div className="  ">
    <Footer />
  </div>
  
</div>
)}

export default App