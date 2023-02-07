import React, { useState, useEffect, createContext, Children } from "react";
export const locationContext = createContext();

export const getLocation = (setState) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => setState(pos.coords),
    (err) => console.log(err)
  );
};
const LocationProvider = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    getLocation(setLocation);
  }, []);

  return (
    <locationContext.Provider value={location}>
      {Children}
    </locationContext.Provider>
  );
};

export default LocationProvider;
