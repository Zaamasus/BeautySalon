export function Header () {

  return(
<div  >
    
<nav id="home" className=" max-sm:pl-3 max-sm:py-1 border-gray-200 rounded bg-gray-50">

  <div className="container flex flex-wrap items-center justify-between ">
    
    <a href="#home" className="flex items-center">
        <span className="self-center text-3xl font-semibold  whitespace-nowrap
         dark:text-black">beauty
         <span className="text-green-400">salon</span>. </span>
    </a>


    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className= " mx-8 font-sans flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-transparent dark:bg-white md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#home" className=" 
          font-serif font-normal  text-lg block   text-green-400 rounded " aria-current="page">
            Home
            </a>
        </li>

        <li>
          <a href="#about" className=" 
          font-serif font-normal  text-lg block   text-green-400 rounded " aria-current="page">
            Sobre 
            </a>
        </li>

        <li>
          <a href="#services" className=" 
          font-serif font-normal  text-lg block   text-green-400 rounded " aria-current="page">
            Serviços
            </a>
        </li>

        <li>
          <a href="#depo" className=" 
          font-serif font-normal  text-lg block   text-green-400 rounded " aria-current="page">
            Depoimentos
            </a>
        </li>

        <li>
          <a href="#contact" className=" 
          font-serif font-normal  text-lg block   text-green-400 rounded " aria-current="page">
              Contatos
            </a>
        </li>
   


       
      </ul>
    </div>
  </div>
</nav>
</div>
  )}