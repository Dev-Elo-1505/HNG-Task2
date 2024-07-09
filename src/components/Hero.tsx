import BackgroundImage from "../assets/img/bg-hero.webp";

export const Hero = () => {
  return (
    <>
      <div className="bg-cover h-[260px] bg-center bg-no-repeat w-full text-center font-semibold text-[#fefefe] text-[40px] flex justify-center items-center brightness-50" style={{ backgroundImage: `url(${BackgroundImage})` }}>Level up your steeze with <br />Footwear by Footerz</div>
    </>
  );
};
