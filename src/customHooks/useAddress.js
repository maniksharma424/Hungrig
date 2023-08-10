import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../Utilities/locationSlice";
export const useAddress = () => {
  const [address, setAddress] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getAddress = async () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const location = fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos?.coords?.latitude}&lon=${pos?.coords.longitude}&zoom=18&addressdetails=1`,
            signal
          )
            .then((res) => res.json())
            .then((res) => dispatch(setLocation(res)))
            .then((res) => setAddress(res))
            .catch((err) => {
              throw new Error("Something Went Wrong");
            });
        },
        (err) => {
          throw new Error("allow location to see rest near u");
        }
      );
    };
    getAddress();

    return controller.abort();
  }, []);

  return address;
};
