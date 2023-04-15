"use client";
import React from "react";

function page({ children }) {
  return (
    <div>
      This is a client componet accepting children a server component
      {children}
    </div>
  );
}

export default page;
