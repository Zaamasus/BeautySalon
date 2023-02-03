import { Header } from "./pages/Header"
import { About } from "./pages/About"
import { Services } from "./pages/Services"

function App() {

  return (
<div>

    <div className="Header"> <Header /></div>

    <div className=" pb-[172px]  about mt-8" > <About /> </div>

    <div className=" border-t-[1px] mb-[160px] border-gray-400 border-solid"></div>

    <div className="services  pb-[172px] "> <Services /> </div>

    </div>

   


   )
}

export default App
