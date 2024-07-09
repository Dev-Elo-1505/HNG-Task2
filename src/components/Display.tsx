import { CategoryName } from "./CategoryName";
import { Showcase } from "./Showcase";

export const Display = () => {
  return (
    <>
      <section className="py-6 px-5">
        <CategoryName />
        <div className="mb-3">For You</div>
        <Showcase />
        <div className="mb-3">Top Rated</div>
        <Showcase />
        <div className="mb-3">Women</div>
        <Showcase />
        <div className="mb-3">Men</div>
        <Showcase />
        <div className="mb-3">Kids</div>
        <Showcase />
      </section>
    </>
  );
};
