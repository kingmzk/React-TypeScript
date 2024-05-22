import React from "react";
import Greet from "./Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.isLoggedIn ? <h1>Hi {props.name}</h1> : <h1>Welcome Guest</h1>}
    </div>
  );
};

export default CustomComponent;
