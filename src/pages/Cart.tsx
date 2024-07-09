import NavBar from "../components/NavBar";
import NivaShoe from "../assets/img/niva-leather-shoe.svg";
import VictoriShoe from "../assets/img/victori-one-slide.svg";
import RedLuminousShoe from "../assets/img/red-luminous-shoe.svg";

export const Cart = () => {
  return (
    <>
      <NavBar />
      <section className="px-5 py-6 flex flex-col md:px-[7.5rem] md:py-20 min-h-screen">
        <div className="flex-grow">
          <div className="flex justify-between items-center text-xl mb-[10px] md:mb-4">
            <p className="font-medium md:text-xl">My Cart</p>
            <p className="text-customGreen">Edit</p>
          </div>
          <div>
            <div className="p-2 flex items-center justify-between mb-4 md:shadow-custom-medium md:rounded-lg md:p-4 md:mb-6">
              <div className="flex gap-4">
                <div className="bg-customProductBgGrey rounded-lg flex justify-center items-center w-[8.125rem]">
                  <img src={NivaShoe} alt="Niva Leather Shoe" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-customLink mb-4">
                    Niva Leather (Black) <br />
                    Color: Black <br />
                    Qty: 1
                  </p>
                  <p className="font-bold text-base text-customGreen">₦31,000</p>
                </div>
              </div>
              <div className="p-1 border border-black rounded-full w-6 h-6 bg-[#FEFEFE] flex items-center justify-center font-extrabold">
                -
              </div>
            </div>
            <div className="p-2 flex gap-4 items-center justify-between mb-4 md:shadow-custom-medium md:rounded-lg md:p-4 md:mb-6">
              <div className="flex gap-4">
                <div className="bg-[#E1E3E2] rounded-lg flex justify-center items-center w-[8.125rem]">
                  <img src={VictoriShoe} alt="Victori One Shoe" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-customLink mb-4">
                  Nike Victori One Slide <br />
                    Color: Black <br />
                    Qty: 1
                  </p>
                  <p className="font-bold text-base text-customGreen">₦13,000</p>
                </div>
              </div>
              <div className="p-1 border border-black rounded-full w-6 h-6 bg-[#FEFEFE] flex items-center justify-center font-extrabold">
                -
              </div>
            </div>
            <div className="p-2 flex gap-4 items-center justify-between mb-4 md:shadow-custom-medium md:rounded-lg md:p-4 md:mb-6">
              <div className="flex gap-4">
                <div className="rounded-lg flex justify-center items-center w-[8.125rem]">
                  <img src={RedLuminousShoe} alt="Red Luminous Shoe" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-customLink mb-4">
                    Kids Led Luminous Shoe <br />
                    Color: Red <br />
                    Qty: 1
                  </p>
                  <p className="font-bold text-base text-customGreen">₦23,000</p>
                </div>
              </div>
              <div className="p-1 border border-black rounded-full w-6 h-6 bg-[#FEFEFE] flex items-center justify-center font-extrabold">
                -
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
      <div className="flex justify-between items-center text-xl mb-10">
          <p className="font-medium text-base">Sub-Total</p>
          <p className="text-customGreen font-bold text-xl">₦67,000</p>
        </div>
        <button className="w-full py-5 px-6 bg-[#151515] rounded-lg text-[#fefefe] font-medium hover:opacity-90 active:scale-95 transition ease-in-out delay-150">Checkout</button>
      </div>
      </section>
      
    </>
  );
};
