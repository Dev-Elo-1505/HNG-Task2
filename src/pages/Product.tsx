import NavBar from "../components/NavBar";
import NivaLeather from "../assets/img/niva-leather-shoe.svg";

export const Product = () => {
  return (
    <>
      <NavBar />
      <section className="py-6 px-5">
        <div>
          <h2 className="font-medium text-xl mb-6">Product</h2>
          <div className="flex flex-col gap-6">
            <div className="bg-customProductBgGrey rounded-[10px]">
              <img src={NivaLeather} alt="Niva Leather Shoe" />
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime voluptate hic aspernatur maiores libero soluta fuga. Dolorum, obcaecati cumque?</div>
          </div>
        </div>
      </section>
    </>
  );
};
