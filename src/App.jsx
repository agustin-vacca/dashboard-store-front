import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
} from "react-icons/ri";

import plato1 from "./images/ensalada-pollo-verduras-aceitunas.png";

import Sidebar from "./components/shared/Sidebar";
import { useState } from "react";

function App() {
  const [showMenu, setshowMenu] = useState(false);
  // const [showOrder,setshowOrder] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  // const toggleOrder = () => {
  //   setshowOrder(!showOrder)
  // }

  return (
    <div className="bg-[#262837] w-full min-h-screen ">
      <Sidebar showMenu={showMenu} />
      {/* Menu Mobile */}
      <nav
        className="lg:hidden bg-[#1F1D2B] fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between
       rounded-t-xl"
      >
        <button className="p-2">
          {" "}
          <RiUser3Line />{" "}
        </button>
        <button className="p-2">
          {" "}
          <RiAddLine />{" "}
        </button>
        <button className="p-2">
          {" "}
          <RiPieChartLine />{" "}
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/* Header */}
          <header className="">
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
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300"> Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 py-2 px-4 bg-[#1F1D2B] rounded-lg ">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src={plato1}
                alt="dishes one"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl"> Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500"> 20 Bowls available</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2 text-center">
              <img
                src={plato1}
                alt="dishes one"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl"> Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500"> 20 Bowls available</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2 text-center">
              <img
                src={plato1}
                alt="dishes one"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl"> Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500"> 20 Bowls available</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2 text-center">
              <img
                src={plato1}
                alt="dishes one"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl"> Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500"> 20 Bowls available</p>
            </div>
            {/* Card 5 */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2 text-center">
              <img
                src={plato1}
                alt="dishes one"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl"> Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500"> 20 Bowls available</p>
            </div>
            {/* Card 6 */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 gap-2 text-center">
              <img
                src={plato1}
                alt="dishes one"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl"> Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-500"> 20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full ">
          {/* Orders */}
          <div className="relative pt-18 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 text-xl bg-[#262837] rounded-full" />
            <h2 className="text-2xl my-4">Orders #151413</h2>
            {/* Pills Order */}
            <div className="flex items-center gap-4 flex-wr mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                Dine In
              </button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500 ">
                To Go
              </button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500 ">
                Delivery
              </button>
            </div>
            {/* Conteiner Product Carrito*/}
            <div>
              <div className="grid grid-cols-6">
                <h5 className="col-span-4">Items</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Product */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
