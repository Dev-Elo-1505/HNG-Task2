import NavBar from "../components/NavBar";

export const SavedProducts = () => {
  return (
    <>
      <NavBar />
      <section>
        <div id="info" className="px-5 py-6">
          <div className="mb-4">
            <h3 className="text-base font-medium">Buyer’s Information</h3>
            <p className="text-customLink text-sm">Enter your details</p>
          </div>
          <form>
            <input type="text" placeholder="Buyer's Name" className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10" required/>
            <input type="number" placeholder="Phone Number" className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10" required/>
            <input type="text" placeholder="Shipping Address" className="border border-customLink p-4 rounded-lg w-full block focus:outline-none mb-10" required/>
          </form>
        </div>
      </section>
    </>
  );
};
