import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();

  const handleCarting = () => {
    navigate("/carting");
  };

  return (
    <div className="Cart-btn flex justify-end fixed md:bottom-30 md:right-20 bottom-80 right-10">
      <button
        className="bg-black rounded-4xl hover:cursor-pointer hover:bg-gray-700"
        onClick={() => handleCarting()}
      >
        <img className="w-15 h-15" src="/images/cart1.svg" />
      </button>
    </div>
  );
}
