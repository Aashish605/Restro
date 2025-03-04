import Cart_lists from "./Cart_lists";

export default function Cart() {
  const cart_items = () => {
    <Cart_lists />;
  };

  return (
    <div className="Cart-btn flex justify-end sticky bottom-6">
      <button
        className="bg-black rounded-4xl hover:cursor-pointer"
        onClick={() => cart_items()}
      >
        <img className="w-15 h-15" src="/images/cart1.svg" />
      </button>
    </div>
  );
}
