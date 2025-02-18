import { Outlet } from "react-router-dom";

import phone from "../../assets/phone.jpg";
import laptop from "../../assets/laptop.png";
import watch from "../../assets/watch.png";
import { Helmet } from "react-helmet";
const NewArrival = () => {
  return (
    <div className="min-h-screen lg:max-w-[90%] mx-auto">
        <Helmet>
        <title>New Arrival | Gadget Heaven</title>
      </Helmet>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-40 lg:h-[500px]">
          <img src={phone} className="w-full" />
          <div className="absolute left-1 right-1 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-40 lg:h-[500px]">
          <img src={laptop} className="w-full" />
          <div className="absolute  left-1 right-1 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-40 lg:h-[500px]">
          <img src={watch} className="w-full" />
          <div className="absolute  left-1 right-1 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

    

      <Outlet />
    </div>
  );
};

export default NewArrival;
