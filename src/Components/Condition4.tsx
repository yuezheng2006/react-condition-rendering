import React from "react";
import AuthButton from "./base/AuthButtonSwitch";

const Condition4 =  () => {
  return (
    <div className="condition">
      <h2>Functional component use switch </h2>
      <AuthButton isLoggedIn={true} />
    </div>
  );
};

export default Condition4;
