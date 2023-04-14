import React from "react";

function page() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className=" border-red-600 p-6 rounded border-2 w-96">
        <h1 className="text-2xl font-bold">Login</h1>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block">Password</label>
          <input
            type="password"
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <button className="bg-blue-500 text-white p-2 rounded mt-4">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
