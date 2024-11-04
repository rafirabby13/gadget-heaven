import banner from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div>
      <div className="bg-[#9538E2] pt-5
       lg:pt-12   rounded-b-3xl relative pb-6 lg:pb-72 lg:max-w-[90%] mx-auto">
        <div className="text-center text-white space-y-2 lg:space-y-7 lg:w-2/3 mx-auto">
          <h1 className="text-xl lg:text-6xl font-bold ">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-sm lg:text-lg font-normal ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="text-[#9538E2] text-sm lg:text-xl font-bold bg-white py-2 lg:py-4 px-8 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
      <div className="border-2 lg:p-6 bg-[#ffffff47] rounded-2xl lg:w-3/4 mx-auto lg:relative lg:-top-60">
        <div className="">
          <img
            className="rounded-xl lg:h-[500px] w-full "
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
