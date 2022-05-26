import React from "react";

function Hero({ herosName }) {
  if (herosName === "joker") {
    throw new Error("Not a like hero");
  }
  return (
    <>
      <div>{herosName}</div>
    </>
  );
}

export default Hero;
