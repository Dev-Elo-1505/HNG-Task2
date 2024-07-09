import BackgroundImage from "../assets/img/bg-hero.webp"

export const Hero = () => {
  return (
    <>
      <section className="bg-cover bg-center bg-no-repeat text-center w-full" style={{ backgroundImage: `url(${BackgroundImage})` }}>Level up your steeze with Footwear by Footerz</section>
    </>
  );
};
