"use client";

import React from "react";
import FeedDeslogado from "./feedDeslogado";
import FeedLogado from "./feedLogado";

const isLoggedIn = true; // Estado de login declarado no mesmo arquivo

const Feed = () => {
  return isLoggedIn ? <FeedLogado /> : <FeedDeslogado />;
};

export default Feed;
