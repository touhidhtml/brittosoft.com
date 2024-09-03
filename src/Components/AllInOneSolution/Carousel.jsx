import { Loader } from "lucide-react";

const Carousel = () => {
  return (
    <div className="aboutsection flex flex-col items-center bg-black py-20">
      <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center border rounded-lg">
        <img
          className="w-[30px] rounded-full"
          src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
          alt=""
        />
        <div className="bg-gradient-to-b lg:text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
        All In One Solutions
        </div>{" "}
        <Loader />
      </div>
      <div className="bg-transparent z-1 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
            Driving Digital Evolution and <br />
            <span className="text-[#594FEE]">Strategic Excellence</span>
          </h2>
          <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
            We create digital solutions that push boundaries, elevate user
            experiences, <br /> and drive business growth.
          </p>
        </div>
        <div className="hero min-h-screen mt-12">
          <div className="hero-content text-center">
          <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
