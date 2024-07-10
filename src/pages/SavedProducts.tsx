import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export const SavedProducts = () => {
  return (
    <>
      <NavBar />
      <section className="px-5 py-6 md:py-20 md:px-[120px]">
        <div id="info">
          <div className="mb-4">
            <h3 className="text-base font-medium">Buyer’s Information</h3>
            <p className="text-customLink text-sm">Enter your details</p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Buyer's Name"
              className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10"
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10"
              required
            />
            <input
              type="text"
              placeholder="Shipping Address"
              className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10"
              required
            />
          </form>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-base font-medium">Available Shipping Method</h3>
            <p className="text-customLink text-sm">
              Choose your preferred delivery company
            </p>
          </div>
          <form>
            <div className="flex justify-between mb-10">
              <div className="flex gap-4"><input type="radio" /><p className="text-base font-medium text-black">GIG Logistics <br /><span className="text-sm font-normal text-customLink">2 days after order</span></p></div>
              <p className="text-customGreen font-semibold">₦3000</p>
            </div>
            <div className="flex justify-between mb-10">
              <div className="flex gap-4"><input type="radio" /><p className="text-base font-medium text-black">Swift Logistics <br /><span className="text-sm font-normal text-customLink">1 day after order</span></p></div>
              <p className="text-customGreen font-semibold">₦5000</p>
            </div>
          </form>
        </div>
        <div className="px-5 py-6">
          <div className="mb-4">
            <h3 className="text-base font-medium">Payment Details</h3>
            <p className="text-customLink text-sm">Enter your card details</p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Buyer's Name"
              className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10"
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10"
              required
            />
            <div className="flex gap-[10px]">
              <input
                type="number"
                placeholder="Shipping Address"
                className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10"
                required
              />
              <input
                type="number"
                placeholder="Shipping Address"
                className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10"
                required
              />
            </div>
          </form>
          <div id="summary">
            <div className="flex justify-between mb-4">
              <p>Sub-Total</p>
              <p className="text-customGreen">₦67,000</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Delivery Fee</p>
              <p className="text-customGreen">₦3000</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Total</p>
              <p className="text-customGreen">₦72,000</p>
            </div>
          </div>
        </div>
        <Link to="/checkout">
          <button className="w-full py-5 px-6 bg-[#151515] rounded-lg text-[#fefefe] font-medium hover:opacity-90 active:scale-95 transition ease-in-out delay-150">
            Make Payment
          </button>
        </Link>
      </section>
    </>
  );
};
