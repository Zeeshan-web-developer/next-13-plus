"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link
            className="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-700"
            href="/"
          >
            My Site
          </Link>
          <button
            className="border border-gray-800 px-3 py-2 rounded text-gray-800 opacity-50 hover:opacity-75 md:hidden"
            type="button"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6">
              <path
                fillRule="evenodd"
                d="M3 9h14a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2zm0-4h14a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2zm0 8h14a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              className="my-1 text-gray-700 font-medium md:mx-4 md:my-0 hover:text-blue-500"
              href="/user/settings"
            >
              User Settings
            </Link>
            <Link
              className="my-1 text-gray-700 font-medium md:mx-4 md:my-0 hover:text-blue-500"
              href="/user/profile"
            >
              User Profile
            </Link>
            <Link
              className="my-1 text-gray-700 font-medium md:mx-4 md:my-0 hover:text-blue-500"
              href="/user/orders"
            >
              User Orders
            </Link>
          </div>
          <div className="flex items-center">
            <button
              className="text-gray-700 font-medium hover:text-blue-500 mx-3"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </button>
            <button
              className="text-gray-700 font-medium hover:text-blue-500 mx-3"
              onClick={() => router.push("/auth/register")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
