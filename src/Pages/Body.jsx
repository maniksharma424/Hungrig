import { RestaurantCard } from "./Resturantcard";

const Body = ({ Restaurants }) => {
  console.log(Restaurants);
  return (
    <div
      id="Available-Resturants-window"
      className="Available-Resturants  w-full flex  justify-center items-center "
    >
      <ul className="Restaurant-container px-16 flex flex-wrap justify-start border-none w-[90%] mt-[45px] ">
        {Restaurants?.map((restaurant, index) => {
          return (
            <RestaurantCard key={index} restaurant={restaurant?.info} />
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
