import { Display } from "../components/Display";
import { Hero } from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <section className="max-w-full">
        <NavBar />
        <Hero />
        <Display />
      </section>
    </>
  );
};

export default Home;
