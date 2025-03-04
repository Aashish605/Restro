export default function Special_eachitem({ name, price, image }) {
    return (
      <div className="Eachitem-container border-2 inline-block p-1 m-2.5">
        <div className="Eachitem-photo">
          <img
            className="lg:max-w-[15rem] max-w-[10rem]"
            src={image}
            alt="loading"
          />
        </div>
        <div className="Eachitem-name flex justify-center items-center text-2xl font-semibold">
          {name}
        </div>
        <div className="Eachitem-cart flex justify-evenly items-center">
          <span className="Eachitem-price">Rs {price}</span>
          <button className="bg-black text-white px-1.5 py-0.5 rounded hover:cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    );
  }
  