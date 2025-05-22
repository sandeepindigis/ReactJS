import React, { useState, useEffect } from "react";

const useInternetCheck = () => {
  const [isInternetConnect, setIsInternetConnected] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsInternetConnected(false);
    });

    window.addEventListener("online", () => {
      setIsInternetConnected(true);
    });
  }, []);
  return isInternetConnect;
};

export default useInternetCheck;
