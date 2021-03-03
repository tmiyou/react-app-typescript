import React from "react";

export function Container(props: React.PropsWithChildren<{}>) {
  return (
    <div
      onClick={() =>
        alert("Clicking a box should not allow me to be displayed")
      }
    >
      <>{props.children}</>
    </div>
  );
}
