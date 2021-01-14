import React, { useState } from "react";

 const Condition1 = () => {
  const [isLoggedIn] = useState(true);

  // 抽取函数
  const renderAuthButton = () => {
    if (isLoggedIn) {
      return <button>Logout</button>;
    } else {
      return <button>Login</button>;
    }
  };

  return (
    <div className="condition">
      <h2>Function render</h2>
      {renderAuthButton()}
    </div>
  );
};

export default Condition1;