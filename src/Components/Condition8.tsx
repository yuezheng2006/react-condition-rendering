import React, { useState } from "react";
import { Choose, Otherwise, When } from "tsx-control-statements/components";

const Condition8 = () => {
  const [isLoggedIn] = useState(true);

  return (
    <div className="condition">
      <h2>Enhanced JSX </h2>
      <h2>{isLoggedIn}</h2>
      <Choose>
        <When condition={isLoggedIn}>
          <button>Logout</button>
        </When>
        <Otherwise>
          <button>Login</button>
        </Otherwise>
      </Choose>
    </div>
  );
};

export default Condition8
