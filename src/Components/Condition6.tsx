import React, { useState } from "react";

 const Condition6 = () => {
  const [isLoggedIn] = useState(true);

  return (
    <div className="condition">
      <h2>Logical && </h2>
      {isLoggedIn && <button>Logout</button>}
    </div>
  );
};


export default Condition6;