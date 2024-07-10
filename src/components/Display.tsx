import { CategoryName } from "./CategoryName";
import { Showcase } from "./Showcase";

export const Display = () => {
  return (
    <>
      <section className="py-6 px-5 md:py-10 md:px-[120px]">
        <CategoryName />
        <div className="mb-3 font-semibold" id="All">For You</div>
        <Showcase />
        <div className="mb-3 font-semibold">Top Rated</div>
        <Showcase />
        <div className="mb-3 font-semibold" id="Women">Women</div>
        <Showcase />
        <div className="mb-3 font-semibold" id="Men">Men</div>
        <Showcase />
        <div className="mb-3 font-semibold" id="Kids">Kids</div>
        <Showcase />
      </section>
    </>
  );
};
