"use client";

import React, { useEffect, useState } from "react";
import FeedLogado from "./feedLogado";
import FeedDeslogado from "./feedDeslogado";

const Feed = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
