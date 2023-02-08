import { Header } from "./sections/Header"
import { Home } from "./sections/Home"
import { About} from "./sections/About"
import { Services } from "./sections/Services"
import { Testimonials } from "./sections/Testimonials"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"

function App() {

return (
<div className="">

  {/* Header/menu/logo */}
  <div className="Header">
    <Header />
  </div>

  {/*About */}
  <div className=" pb-[172px]  about mt-8">
    <Home />
  </div>


  <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid"></div>

  {/* About */}
  <div className=" pb-[172px] ">
    <About />
  </div>


  <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid"></div>

  {/* Services */}
  <div className="services  pb-[172px] ">
    <Services />
  </div>


  {/* Testimonials */}

  <div className=" services  pb-[172px] ">
    <Testimonials />
  </div>
  <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid"></div>

  {/* Contact */}

  <div className=" services  pb-[172px] ">
    <Contact />
  </div>

  <div className="  border-gray-400 border-solid"></div>

  <div className=" services ">
    <Footer />
  </div>
  
</div>
)}

export default App