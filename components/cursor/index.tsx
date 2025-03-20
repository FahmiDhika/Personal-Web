import React from "react";
import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="1, 85, 81"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={1.5}
        showSystemCursor={false}
        outerStyle={{
          border: "2px solid",
          backgroundColor: "transparent",
        }}
        innerStyle={{
          border: "2px solid",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}

export default Cursor;
