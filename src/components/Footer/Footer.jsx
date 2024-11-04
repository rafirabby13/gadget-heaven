const Footer = () => {
  return (
    <div className="">
      
      <div className="  bg-base-200 text-base-content p-5 lg:p-10 justify-between">
      <div className="text-center py-12
      ">
        <h1 className="text-[#09080F] font-bold text-3xl mb-3">Gadget Heaven</h1>
        <p className="text-[#09080fa4] font-medium text-lg ">Leading the way in cutting-edge technology and innovation.</p>
      </div>
        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row justify-between border-t-2 pt-12 gap-8">
        <div className="flex flex-col gap-2">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
