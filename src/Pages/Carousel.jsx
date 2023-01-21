const Carousel = () => {
  return (
    <div className="carousel  bg-[#171a29] flex justify-evenly items-center w-full p-12 px-32">
      <img
        className="Carousel-Image  w-64 h-64 hover:scale-110"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"
        alt="carousel"
      />
      <img
        className="Carousel-Image hover:scale-110	  w-64 h-64"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/dpqcjrxwruipnt1wyqnh"
        alt="carousel"
      />
      <img
        className="Carousel-Image  w-64 h-64 hover:scale-110"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb"
        alt="carousel"
      />
      <img
        className="Carousel-Image  w-64 h-64 hover:scale-110"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lyn9at38gjithnogzfui"
        alt="carousel"
      />
    </div>
  );
};
export default Carousel;
