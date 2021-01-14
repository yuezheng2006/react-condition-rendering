import React, { useState } from "react";

const Condition5 =  () => {
  const [isLoggedIn] = useState(true);

  return (
    <div className="condition">
      <h2>Ternary Operators </h2>
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};


export default Condition5;
