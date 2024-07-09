import NavBar from "../components/NavBar";
import NivaLeather from "../assets/img/niva-leather-shoe.svg";
import Star from "../assets/icons/star.svg";
import { Link } from "react-router-dom";
import { Showcase } from "../components/Showcase";

export const Product = () => {
  return (
    <>
      <NavBar />
      <section  className="py-6 px-5">
        <div>
          <h2 className="font-medium text-xl mb-6">Product</h2>
          <div className="flex flex-col gap-6 md:flex-row md:px-20 md:justify-between">
            <div className="flex justify-center items-center bg-customProductBgGrey rounded-[10px]">
              <img src={NivaLeather} alt="Niva Leather Shoe" />
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-xl leading-10">
                  Nivea Leather Shoe <br />
                  <span className="text-2xl text-customGreen font-bold">₦31,000</span>
                </div>
                <div>
                  <img src={Star} alt="Top rated" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="leading-10">
                  <h3 className="font-semibold">Color</h3>
                  <div className="flex gap-[0.625rem]">
                    <div className="rounded-full w-6 h-6 bg-[#000000]"></div>
                  </div>
                </div>
                <div className="leading-10">
                  <h3 className="font-semibold">Quantity</h3>
                  <div className="flex gap-[0.625rem]">
                    <div className="rounded-full w-6 h-6 bg-[#000000] flex justify-center items-center">-</div>
                    <div className="flex justify-center items-center">1</div>
                    <div className="rounded-full w-6 h-6 bg-[#000000] flex justify-center items-center text-white">+</div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <p className="mb-4">Available sizes</p>
                <div className="flex justify-between items-center">
                  <div className="py-[11px] px-2 rounded-lg bg-[#151515] text-[#FEFEFE]">
                    30 - 32
                  </div>
                  <div>33 - 35</div>
                  <div>36 - 38</div>
                  <div>39 - 41</div>
                  <div>43 - 45</div>
                </div>
              </div>
              <div className="flex justify-between">
                <Link to="/cart">
                  <button className="w-full py-5 px-6 bg-[#151515] rounded-lg text-[#fefefe] font-medium hover:opacity-90 active:scale-95 transition ease-in-out delay-150">
                    Add to Cart
                  </button>
                </Link>
                <Link to="/">
                  <button className=" border border-black w-full py-5 px-6 bg-[#fefefe] rounded-lg text-[#151515] font-medium hover:opacity-90 active:scale-95 transition ease-in-out delay-150">
                    Save For Later
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:px-20">
            <div className="mb-3 mt-6">Related Items</div>
                    <Showcase />
          </div>
        </div>
      </section>
    </>
  );
};
