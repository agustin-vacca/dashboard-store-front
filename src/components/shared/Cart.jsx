import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import plato1 from "../../images/ensalada-pollo-verduras-aceitunas.png";

const Cart = (props) => {
  // eslint-disable-next-line react/prop-types
  const { showOrder, setShowOrder } = props;
  return (
    <div
      className={`lg:col-span-2 fixed lg:right-0 lg:w-96 top-0 bg-[#1F1D2B] w-full h-full z-50 transition-all
        ${showOrder ? "right-0" : "-right-full"}`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 text-xl bg-[#262837] rounded-full"
        />
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
        {/* Carrito*/}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Items</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Conteiner Product */}
          <div className=" h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="flex items-center gap-2 col-span-4">
                  <img
                    src={plato1}
                    alt="dishes one"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Spaicy seasoned...</h5>
                    <p className="text-xs text-gray-500"> $2.29 </p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center gap-2">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-5 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button className=" border border-[#ec7c6a] p-2 rounded-lg ">
                    <RiDeleteBin6Line className="text-[#ec7c6a]" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="flex items-center gap-2 col-span-4">
                  <img
                    src={plato1}
                    alt="dishes one"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Spaicy seasoned...</h5>
                    <p className="text-xs text-gray-500"> $2.29 </p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center gap-2">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-5 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button className=" border border-[#ec7c6a] p-2 rounded-lg ">
                    <RiDeleteBin6Line className="text-[#ec7c6a]" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="flex items-center gap-2 col-span-4">
                  <img
                    src={plato1}
                    alt="dishes one"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h5 className="text-sm">Spaicy seasoned...</h5>
                    <p className="text-xs text-gray-500"> $2.29 </p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center gap-2">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-5 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button className=" border border-[#ec7c6a] p-2 rounded-lg ">
                    <RiDeleteBin6Line className="text-[#ec7c6a]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Submit payment */}
        <div className="absolute bottom-0 left-0 bg-[#262837] p-4 w-full">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400"> Discount </span>
            <span> $0 </span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400"> Subtotal </span>
            <span> $201.03 </span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg ">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
