import React from "react";
import AuthButton from "./base/AuthButtonIf";

 const Condition2 = () => {
  return (
    <div className="condition">
      <h2>Functional component use if-else</h2>
      <AuthButton isLogged={true} />
    </div>
  );
};


export default Condition2;