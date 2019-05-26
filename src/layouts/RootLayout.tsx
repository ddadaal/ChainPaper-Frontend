import React from "react";

const RootLayout: React.FunctionComponent = (props) =>{
  return (
    <div>
      {props.children}
    </div>
  )
};

export default RootLayout;
