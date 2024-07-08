import BackgroundImage from "../assets/img/bg-hero.png"

export const Hero = () => {
  return (
    <>
      <div className="bg-cover h-full" style={{ backgroundImage: `url(${BackgroundImage})` }}>Level up your steeze with Footwear by Footerz</div>
    </>
  );
};
