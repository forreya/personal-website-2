import React, { Suspense } from "react";
import { StarDustCrusaders } from "./StarDustCrusaders";

function Scene() {
  return (
    <Suspense>
      <>
        <group>
          <StarDustCrusaders count={1000} />
        </group>
      </>
    </Suspense>
  );
}

export default Scene;
