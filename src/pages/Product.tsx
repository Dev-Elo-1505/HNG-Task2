import NavBar from "../components/NavBar";
import NivaLeather from "../assets/img/niva-leather-shoe.svg";
import Star from "../assets/icons/star.svg";

export const Product = () => {
  return (
    <>
      <NavBar />
      <section className="py-6 px-5">
        <div>
          <h2 className="font-medium text-xl mb-6">Product</h2>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex justify-center items-center bg-customProductBgGrey rounded-[10px]">
              <img src={NivaLeather} alt="Niva Leather Shoe" />
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  Nivea Leather Shoe <br />
                  <span>₦31,000</span>
                </div>
                <div>
                  <img src={Star} alt="Top rated" />
                </div>
              </div>
              <div>
                <h3>Product description</h3>
                <p>
                  Niva isn't just a shoe brand, it's a legacy. Since 1982, these
                  kicks have been a staple on the court,the streets, and ever...
                </p>
                <p className="text-right">See More</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Color</h3>
                  <div className="flex gap-[0.625rem]">
                    <div
                      className="rounded-full w-6 h-6 bg-[#000000]"
                    ></div>
                    <div className="border border-black rounded-full w-6 h-6 bg-[#FEFEFE]"></div>
                    <div className="rounded-full w-6 h-6 bg-[#160751]"></div>
                  </div>
                </div>
                <div>
                <h3>Quantity</h3>
                  <div className="flex gap-[0.625rem]">
                    <div
                      className="rounded-full w-6 h-6 bg-[#000000]"
                    >-</div>
                    <div className="border border-black rounded-full w-6 h-6 bg-[#FEFEFE]"></div>
                    <div className="rounded-full w-6 h-6 bg-[#160751]">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
