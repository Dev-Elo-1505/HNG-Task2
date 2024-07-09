import Shoe0 from "../assets/img/Frame-six.svg";
import Shoe1 from "../assets/img/Frame-five.svg";
import Shoe2 from "../assets/img/Frame-four.svg";
import Shoe3 from "../assets/img/Frame-three.svg";
import Shoe4 from "../assets/img/Frame-two.svg";
import Shoe5 from "../assets/img/Frame-one.svg";
import HeartPlus from "../assets/icons/heart-plus.svg";
import { Link } from "react-router-dom";

export const Showcase = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-6 md:grid-cols-3">
        <div className="shadow-custom-medium rounded-lg">
          <Link to="/product"><img className="w-full rounded-t-lg cursor-pointer" src={Shoe0} alt="Shoe 0" /></Link>
          
          <div className="flex justify-between items-center px-3 py-3 rounded-b-lg">
            <div>
              <p className="font-medium text-sm md:text-base">
                Nike AirForce 1 <br />
                <span className="text-customGreen font-semibold text-base">₦300,000</span>
              </p>
            </div>
            <div>
              <img src={HeartPlus} alt="heart plus icon" />
            </div>
          </div>
        </div>
        <div className="shadow-custom-medium rounded-lg">
        <Link to="/product"><img className="w-full rounded-t-lg cursor-pointer" src={Shoe1} alt="Shoe 1" /></Link>
          <div className="flex justify-between items-center px-3 py-3 rounded-b-lg">
            <div>
            <p className="font-medium text-sm md:text-base">
                Nike AirForce 1 <br />
                <span className="text-customGreen font-semibold text-base">₦300,000</span>
              </p>
            </div>
            <div>
              <img src={HeartPlus} alt="heart plus icon" />
            </div>
          </div>
        </div>
        <div className="shadow-custom-medium rounded-lg">
        <Link to="/product"><img className="w-full rounded-t-lg cursor-pointer" src={Shoe2} alt="Shoe 2" /></Link>
          <div className="flex justify-between items-center px-3 py-3 rounded-b-lg">
            <div>
            <p className="font-medium text-sm md:text-base">
                Nike AirForce 1 <br />
                <span className="text-customGreen font-semibold text-base">₦300,000</span>
              </p>
            </div>
            <div>
              <img src={HeartPlus} alt="heart plus icon" />
            </div>
          </div>
        </div>
        <div className="shadow-custom-medium rounded-lg">
        <Link to="/product"><img className="w-full rounded-t-lg cursor-pointer" src={Shoe3} alt="Shoe 3" /></Link>
          <div className="flex justify-between items-center px-3 py-3 rounded-b-lg">
            <div>
            <p className="font-medium text-sm md:text-base">
                Nike AirForce 1 <br />
                <span className="text-customGreen font-semibold text-base">₦300,000</span>
              </p>
            </div>
            <div>
              <img src={HeartPlus} alt="heart plus icon" />
            </div>
          </div>
        </div>
        <div className="shadow-custom-medium rounded-lg">
        <Link to="/product"><img className="w-full rounded-t-lg cursor-pointer" src={Shoe4} alt="Shoe 4" /></Link>
          <div className="flex justify-between items-center px-3 py-3 rounded-b-lg">
            <div>
            <p className="font-medium text-sm md:text-base">
                Nike AirForce 1 <br />
                <span className="text-customGreen font-semibold text-base">₦300,000</span>
              </p>
            </div>
            <div>
              <img src={HeartPlus} alt="heart plus icon" />
            </div>
          </div>
        </div>
        <div className="shadow-custom-medium rounded-lg">
        <Link to="/product"><img className="w-full rounded-t-lg cursor-pointer" src={Shoe5} alt="Shoe 5" /></Link>
          <div className="flex justify-between items-center px-3 py-3 rounded-b-lg">
            <div>
            <p className="font-medium text-sm md:text-base">
                Nike AirForce 1 <br />
                <span className="text-customGreen font-semibold text-base">₦300,000</span>
              </p>
            </div>
            <div>
              <img src={HeartPlus} alt="heart plus icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
