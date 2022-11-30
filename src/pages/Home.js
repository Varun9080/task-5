import React, { useEffect } from "react";
import Card from "./Card";
import Planet from "./Planet";
import Payment from "./Payment";
import Prepaid from "./Prepaid";
const Home = () => {

  return (
    <>
      <Planet/>
      <Card/>
      <Payment/>
      <Prepaid/>
    </>
  );
};

export default Home;