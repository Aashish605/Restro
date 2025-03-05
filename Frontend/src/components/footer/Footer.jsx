export default function Footer() {
  return (
    <>
      <div className="Footer-container flex justify-around border-1 px-1 py-6 bg-black text-white text-sm mt-6 mb-0 lg:relative rounded-lg">
        <div className="flex flex-col ">
          <span>2025 All right reserved</span>
          <span>Crafted by Arjun and Ashish</span>
        </div>
        <div className="flex flex-col ">
          <span>
            FIND US
            <button>insta</button>
            <button>fb</button>
          </span>
          <span>gtp@gmail.com</span>
        </div>
      </div>
    </>
  );
}
