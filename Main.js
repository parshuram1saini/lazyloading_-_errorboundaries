import React from "react";
import Errorboundary from "./Errorboundary";
import Hero from "./Hero";

function App() {
  return (
    <div>
      <Errorboundary>
        <Hero herosName="batman" />
      </Errorboundary>
      <Errorboundary>
        <Hero herosName="superman" />
      </Errorboundary>
      <Errorboundary>
        <Hero herosName="spiderman" />
      </Errorboundary>
      <Errorboundary>
        <Hero herosName="joker" />
      </Errorboundary>
    </div>
  );
}

export default App;
