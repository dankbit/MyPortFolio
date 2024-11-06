<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import RouterLinks from "./router/Routes";
import { PushSpinner } from "react-spinners-kit";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="utsav">
    {/* <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="255, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        z={1000}
      /> */}
      {loading ? (
        <div className="pageLoader fixed justify-center items-center inset-0 flex">
          <PushSpinner
            className="bg-accent"
            size={60}
            color="#284be5"
          />
        </div>
      ) : (
        <RouterLinks />
      )}
    </div>
  );
}

export default App;
=======
=======
>>>>>>> 892f3f4 (done)
import React, { useEffect, useState } from "react";
import RouterLinks from "./router/Routes";
import { PushSpinner } from "react-spinners-kit";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="utsav">
    {/* <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="255, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        z={1000}
      /> */}
      {loading ? (
        <div className="pageLoader fixed justify-center items-center inset-0 flex">
          <PushSpinner
            className="bg-accent"
            size={60}
            color="#284be5"
          />
        </div>
      ) : (
        <RouterLinks />
      )}
    </div>
  );
}

export default App;
<<<<<<< HEAD
>>>>>>> f057f81 (Updated Site)
=======
=======
import React, { useEffect, useState } from "react";
import RouterLinks from "./router/Routes";
import { PushSpinner } from "react-spinners-kit";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="utsav">
    {/* <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="255, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        z={1000}
      /> */}
      {loading ? (
        <div className="pageLoader fixed justify-center items-center inset-0 flex">
          <PushSpinner
            className="bg-accent"
            size={60}
            color="#284be5"
          />
        </div>
      ) : (
        <RouterLinks />
      )}
    </div>
  );
}

export default App;
>>>>>>> fc4c443 (done)
>>>>>>> 892f3f4 (done)
