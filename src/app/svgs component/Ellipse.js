import * as React from "react";

function Ellipse(props) {
  return (
    <svg width={173} height={173} fill="none" {...props}>
      <circle cx={86.329} cy={86.785} r={86.086} fill="#D9D9D9" />
    </svg>
  );
}

const MemoEllipse = React.memo(Ellipse);
export default Ellipse;
