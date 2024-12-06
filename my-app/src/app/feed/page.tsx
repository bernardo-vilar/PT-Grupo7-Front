"use client";

import React from "react";
import FeedDeslogado from "./feedDeslogado";
import FeedLogado from "./feedLogado";

const isLoggedIn = false; // Estado de login declarado no mesmo arquivo

const Feed = () => {
  return isLoggedIn ? <FeedLogado /> : <FeedDeslogado />;
};

export default Feed;
