const VideoBackground = () => {
  return (
    <div>
      <video
        className="absolute top-0 right-0 left-0 m-auto z-[-1]"
       
        autoPlay
        muted
        loop
      >
        <source src={"/Britto_inro.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
