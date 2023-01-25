import { carousel_Images } from "../Utilities/constants";
const Carousel = () => {
  return (
    <div className="carousel   bg-[#171a29] flex justify-evenly items-center w-full p-12 px-32">
      {carousel_Images.map((image,index)=> {return <img
      key={index}
        className="Carousel-Image  w-64 h-64 hover:scale-110"
        src={image.src}
        alt="carousel image"
      />})}
    </div>
  );
};
export default Carousel;
