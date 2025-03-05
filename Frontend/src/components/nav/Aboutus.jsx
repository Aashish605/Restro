import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
export default function Aboutus() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); //Navigate back the home page
  };

  return (
    <>
      <Nav />
      <div className="md:p-6 p-4">
        <h1 className="flex justify-center items-center font-bold text-3xl">
          About Us
        </h1>
        <p className="px-5 py-10 md:px-3 md:py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptatum commodi minima ut, pariatur molestiae laboriosam ducimus,
          necessitatibus voluptates debitis itaque magnam dolorem optio eius
          velit delectus aliquam est amet. Possimus, incidunt.
        </p>

        <button
          className="px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded hover:cursor-pointer ml-5 md:ml-2"
          onClick={() => handleBack()}
        >
          Back
        </button>
      </div>
    </>
  );
}
