import Link from "next/link";
import React from "react";

function page() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
        <li>
          <Link href="/auth/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default page;
