import NavBar from "../components/NavBar";
import VerifyIcon from "../assets/icons/verify-icon.svg";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <>
      <NavBar />
      <section className="py-[7.5rem] px-6 flex flex-col gap-6 justify-between md:px-[7.5rem] md:py-20">
        <div className="rounded-2xl border py-10 text-center flex flex-col justify-center items-center gap-6 shadow-custom-medium">
          <img src={VerifyIcon} alt="Verify Icon" />
          <p className="font-medium text-base">Payment Successful</p>
          <p className="font-normal text-sm">You paid ₦67,000 to Footerz Shoe Store</p>
        </div>
        <div className="flex items-end h-96"><Link to="/" className="w-full"><button className="w-full py-5 px-6 bg-[#151515] rounded-lg text-[#fefefe] font-medium hover:opacity-90 active:scale-95 transition ease-in-out delay-150">Back To Shop</button></Link></div>
      </section>
    </>
  );
};
