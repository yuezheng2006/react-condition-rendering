import React, { useState } from "react";

const Condition7= () => {
  const [isLoggedIn] = useState(true);

  return (
    <div className="condition">
      <h2>Immediately Invoked Function </h2>
      {(() => {
        if (isLoggedIn) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      })()}
    </div>
  );
};

export default Condition7;
