import { useEffect,useContext, useState } from "react";
import { locationContext } from "../MyApp";
export const useAddress = () => {
  const [address, setAddress] = useState({});
  const cordinates = useContext(locationContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getAddress = async () => {
      const location = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${cordinates?.latitude}&lon=${cordinates?.longitude}&zoom=18&addressdetails=1`,

        signal
      )
        .then((res) => res.json())
        .catch((err) => {throw new Error('Something Went Wrong')});
      setAddress(location);
    };
    getAddress();

    return controller.abort();
  }, [cordinates]);

  if(address?.display_name) return address;
  else null
};
