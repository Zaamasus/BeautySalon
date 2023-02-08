export function Header () {

  return(
<div>
    
<nav className="p-3 border-gray-200 rounded bg-gray-50 dark:bg-white dark:border-gray-700">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center">
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-black">beauty<span className="text-green-400">salon</span>. </span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className= " mx-8 font-sans flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-transparent dark:bg-white md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" className=" font-serif font-bold  block py-2 pl-3 pr-4 text-green-400 bg-blue-700 rounded md:bg-transparent
           md:text-blue-700 md:p-0 md:dark:text-green-400 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>

        <li>
          <a href="#" className="font-serif font-bold  block py-2 pl-3 pr-4 text-green-400 bg-blue-700 rounded md:bg-transparent
           md:text-blue-700 md:p-0 md:dark:text-green-400 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">About</a>
        </li>
        
        <li>
          <a href="#" className=" font-serif font-bold 
          block py-2 pl-3 pr-4 text-green-400 bg-blue-700 rounded md:bg-transparent
           md:text-blue-700 md:p-0 md:dark:text-green-400 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Services</a>
        </li>

        <li>
          <a href="#" className=" font-serif font-bold 
          block py-2 pl-3 pr-4 text-green-400 bg-blue-700 rounded md:bg-transparent
           md:text-blue-700 md:p-0 md:dark:text-green-400 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Contact</a>
        </li>


       
      </ul>
    </div>
  </div>
</nav>
</div>
  )}