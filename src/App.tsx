import { Header } from "./pages/Header"
import { Home } from "./pages/Home"
import { About} from "./pages/About"
import { Services } from "./pages/Services"
import { Testimonials } from "./pages/Testimonials"

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

<div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid"></div>

{/* Testimonials */}

<div className=" services  pb-[172px] ">
  <Testimonials />
</div>
</div>




)
}

export default App