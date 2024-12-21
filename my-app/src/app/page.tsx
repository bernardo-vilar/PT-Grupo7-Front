"use client";

import React, { useEffect, useState } from "react";
import FeedLogado from "./feed/feedLogado";
import FeedDeslogado from "./feed/feedDeslogado";

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
