import React, { Suspense, lazy } from "react";
const Lazyloading = lazy(() => import("./lazyloading"));

function App() {
  return (
    <>
      <Suspense fallback={<h4>Page Loading ....</h4>}>
        <Lazyloading />
      </Suspense>
    </>
  );
}

export default App;
