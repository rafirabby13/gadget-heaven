import { Link } from "react-router-dom";
import img from "../../assets/img404.jpg";
const ErrorPage = () => {
  return (
    <div className="grid border-2  h-full w-full justify-center items-center my-auto min-h-screen">
      <div className="text-center lg:w-3/4 mx-auto space-y-5 px-4 py-20 rounded-xl shadow-2xl">
      <img className="lg:h-1/2 lg:w-1/5 mx-auto rounded-full" src={img} alt="" />
      <h1 className="text-[#131313] font-semibold lg:text-4xl">
        Oops! The page you’re looking for doesn’t exist. It might have been
        moved or deleted, or perhaps the link was incorrect.
      </h1>
      <ul className="font-medium text-xs lg:text-2xl space-y-1 lg:space-y-3 ">
        <li>Go back to the previous page.</li>
        <li>Check the URL for any errors.</li>
        <li><Link to='/' className="underline text-xs lg:text-xl text-green-600">Visit our homepage</Link> and explore our latest gadgets and deals.</li>
      </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
