export const CategoryName = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-3 font-medium text-customLink mb-4 md:hidden">
        <a href="#" className="text-customGreen">
          All
        </a>
        <a href="#Men" className="hover:text-customGreen">Men</a>
        <a href="#Women" className="hover:text-customGreen">Women</a>
        <a href="#Kids" className="hover:text-customGreen">Kids</a>
        <a href="#" className="hover:text-customGreen">Sneaker</a>
      </div>
      <div className="hidden md:flex justify-between font-medium text-customLink mb-4">
      <h5 className="font-medium">Categories</h5>
        <div className="flex gap-5">
          <a href="#" className="text-customGreen">
            All
          </a>
          <a href="#Men" className="hover:text-customGreen">Men</a>
          <a href="#Women" className="hover:text-customGreen">Women</a>
          <a href="#Kids" className="hover:text-customGreen">Kids</a>
          <a href="#" className="hover:text-customGreen">Sneaker</a>
        </div>
      </div>
    </>
  );
};
