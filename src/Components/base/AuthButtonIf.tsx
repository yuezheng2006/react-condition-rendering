import React from "react";

const AuthButton = (props: any) => {
  let { isLoggedIn } = props;
  if (isLoggedIn) {
    return <button>Logout</button>;
  } else {
    return <button>Login</button>;
  }
};

export default AuthButton;
