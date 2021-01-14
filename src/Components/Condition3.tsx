import React, { useState } from "react";

const Condition3 =  () => {
  const [isLoggedIn] = useState(true);
  let AuthButton;
  if (isLoggedIn) {
    AuthButton = <button>Logout</button>;
  } else {
    AuthButton = <button>Login</button>;
  }

  return (
    <div className="condition">
      <h2> Element Variables </h2>
      {AuthButton}
    </div>
  );
};


export default Condition3
