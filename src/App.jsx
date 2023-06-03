import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine
} from "react-icons/ri";

//Components
import Cart from "./components/shared/Cart";
import Sidebar from "./components/shared/Sidebar";
import Header from "./components/shared/Header";

import { useState } from "react";

import plato1 from "./images/ensalada-pollo-verduras-aceitunas.png";
import Card from "./components/shared/Card";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder,setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false)
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Cart showOrder={showOrder} setShowOrder={setShowOrder} />
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
        <button onClick={toggleOrder} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
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
            <Card img={plato1} description="Speacy seasoned seafood nodles" price="2.29" inventory="20" />
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
      </main>
    </div>
  );
}

export default App;
