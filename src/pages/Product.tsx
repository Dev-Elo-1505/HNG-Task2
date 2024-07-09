import NavBar from "../components/NavBar";
import NivaLeather from "../assets/img/niva-leather-shoe.svg";
import Star from "../assets/icons/star.svg";
import { Link } from "react-router-dom";
import { Showcase } from "../components/Showcase";

export const Product = () => {
  return (
    <>
      <NavBar />
      <section className="py-6 px-5">
        <div>
          <h2 className="font-medium text-xl mb-6 md:px-20">Product</h2>
          <div className="flex flex-col gap-6 md:flex-row md:px-20 md:justify-between">
            <div className="flex justify-center items-center bg-customProductBgGrey rounded-[10px]">
              <img src={NivaLeather} alt="Niva Leather Shoe" />
            </div>
            <div className="md:flex-grow">
              <div className="flex justify-between">
                <div className="text-xl leading-10">
                  Nivea Leather Shoe <br />
                  <span className="text-2xl text-customGreen font-bold">
                    ₦31,000
                  </span>
                </div>
                <div>
                  <img src={Star} alt="Top rated" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="leading-10">
                  <h3 className="font-semibold">Color</h3>
                  <div className="flex gap-[0.625rem]">
                    <div className="rounded-full w-6 h-6 bg-[#000000]"></div>
                  </div>
                </div>
                <div className="leading-10">
                  <h3 className="font-semibold">Quantity</h3>
                  <div className="flex gap-[0.625rem]">
                    <div className="rounded-full w-6 h-6 bg-[#000000] flex justify-center items-center">
                      -
                    </div>
                    <div className="flex justify-center items-center">1</div>
                    <div className="rounded-full w-6 h-6 bg-[#000000] flex justify-center items-center text-white">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <p className="mb-4">Available sizes</p>
                <div className="flex justify-between items-center">
                  <div className="py-[11px] px-2 rounded-lg bg-[#151515] text-[#FEFEFE]">
                    30 - 32
                  </div>
                  <div>33 - 35</div>
                  <div>36 - 38</div>
                  <div>39 - 41</div>
                  <div>43 - 45</div>
                </div>
              </div>
              <div className="flex justify-between">
                <Link to="/cart">
                  <button className="w-full py-5 px-6 bg-[#151515] rounded-lg text-[#fefefe] font-medium hover:opacity-90 active:scale-95 transition ease-in-out delay-150 md:w-[200px] flex justify-around">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V8C4 7.45 4.19583 6.97917 4.5875 6.5875C4.97917 6.19583 5.45 6 6 6H8C8 4.9 8.39167 3.95833 9.175 3.175C9.95833 2.39167 10.9 2 12 2C13.1 2 14.0417 2.39167 14.825 3.175C15.6083 3.95833 16 4.9 16 6H18C18.55 6 19.0208 6.19583 19.4125 6.5875C19.8042 6.97917 20 7.45 20 8V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V8H16V10C16 10.2833 15.9042 10.5208 15.7125 10.7125C15.5208 10.9042 15.2833 11 15 11C14.7167 11 14.4792 10.9042 14.2875 10.7125C14.0958 10.5208 14 10.2833 14 10V8H10V10C10 10.2833 9.90417 10.5208 9.7125 10.7125C9.52083 10.9042 9.28333 11 9 11C8.71667 11 8.47917 10.9042 8.2875 10.7125C8.09583 10.5208 8 10.2833 8 10V8H6V20ZM10 6H14C14 5.45 13.8042 4.97917 13.4125 4.5875C13.0208 4.19583 12.55 4 12 4C11.45 4 10.9792 4.19583 10.5875 4.5875C10.1958 4.97917 10 5.45 10 6Z"
                        fill="#fefefe"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </Link>
                <Link to="/">
                  <button className=" border border-black w-full py-5 px-6 bg-[#fefefe] rounded-lg text-[#151515] font-medium hover:opacity-90 active:scale-95 transition ease-in-out delay-150 md:w-[200px] flex justify-around">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 20.9999L10.55 19.6999C8.86667 18.1832 7.475 16.8749 6.375 15.7749C5.275 14.6749 4.4 13.6874 3.75 12.8124C3.1 11.9374 2.64583 11.1332 2.3875 10.3999C2.12917 9.66657 2 8.91657 2 8.1499C2 6.58324 2.525 5.2749 3.575 4.2249C4.625 3.1749 5.93333 2.6499 7.5 2.6499C8.36667 2.6499 9.19167 2.83324 9.975 3.1999C10.7583 3.56657 11.4333 4.08324 12 4.7499C12.5667 4.08324 13.2417 3.56657 14.025 3.1999C14.8083 2.83324 15.6333 2.6499 16.5 2.6499C18.0667 2.6499 19.375 3.1749 20.425 4.2249C21.475 5.2749 22 6.58324 22 8.1499C22 8.91657 21.8708 9.66657 21.6125 10.3999C21.3542 11.1332 20.9 11.9374 20.25 12.8124C19.6 13.6874 18.725 14.6749 17.625 15.7749C16.525 16.8749 15.1333 18.1832 13.45 19.6999L12 20.9999ZM12 18.2999C13.6 16.8666 14.9167 15.6374 15.95 14.6124C16.9833 13.5874 17.8 12.6957 18.4 11.9374C19 11.1791 19.4167 10.5041 19.65 9.9124C19.8833 9.32074 20 8.73324 20 8.1499C20 7.1499 19.6667 6.31657 19 5.6499C18.3333 4.98324 17.5 4.6499 16.5 4.6499C15.7167 4.6499 14.9917 4.87074 14.325 5.3124C13.6583 5.75407 13.2 6.31657 12.95 6.9999H11.05C10.8 6.31657 10.3417 5.75407 9.675 5.3124C9.00833 4.87074 8.28333 4.6499 7.5 4.6499C6.5 4.6499 5.66667 4.98324 5 5.6499C4.33333 6.31657 4 7.1499 4 8.1499C4 8.73324 4.11667 9.32074 4.35 9.9124C4.58333 10.5041 5 11.1791 5.6 11.9374C6.2 12.6957 7.01667 13.5874 8.05 14.6124C9.08333 15.6374 10.4 16.8666 12 18.2999Z"
                        fill="#151515"
                      />
                    </svg>
                    Save For Later
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:px-20">
            <div className="mb-3 mt-6">Related Items</div>
            <Showcase />
          </div>
        </div>
      </section>
    </>
  );
};
