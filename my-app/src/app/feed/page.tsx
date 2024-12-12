"use client";

import React, { useEffect, useState } from "react";
import FeedLogado from "./feedLogado";
import FeedDeslogado from "./feedDeslogado";

const Feed = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On mount, check if the user is logged in using localStorage
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? <FeedLogado /> : <FeedDeslogado />}
    </div>
  );
};

export default Feed;
