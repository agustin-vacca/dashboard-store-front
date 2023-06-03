import {RiSearch2Line} from "react-icons/ri";

const Header = () => {
  return (
    <header>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
      <div>
        {/* Title */}
        <h1 className="text-2xl text-gray-300"> Name Resto </h1>
        <p className="text-gray-500"> 31 mayo 2023 </p>
      </div>
      {/* SearchBar */}
      <form action="">
        <div className="w-full relative">
          <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search food, drinks..."
            className="w-full py-2 pl-10 pr-4 bg-[#1F1D2B] rounded-lg text-gray-300 outline-none"
          />
        </div>
      </form>
    </div>
    {/* Tabs */}
    <nav className="text-gray-300 flex items-center gap-4 justify-between md:justify-start md:gap-8 border-b mb-6">
      <a
        href="#"
        className="relative py-2 pr-4 text-[#ec7c6a] before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] "
      >
        {" "}
        Hot dishes{" "}
      </a>
      <a href="#" className=" py-2 pr-4 ">
        {" "}
        Cold dishes{" "}
      </a>
      <a href="#" className=" py-2 pr-4">
        {" "}
        Soup{" "}
      </a>
      <a href="#" className=" py-2 ">
        {" "}
        Grill{" "}
      </a>
    </nav>
  </header>
  )
}

export default Header
