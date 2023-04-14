import React from "react";

function page() {
  return (
    <div>
      <h1>Register</h1>
      <div className="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
      </div>
      <button>Register</button>
    </div>
  );
}

export default page;
