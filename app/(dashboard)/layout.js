import React from "react";

function Nav() {
  return (
    <div class="flex flex-col h-screen bg-gray-100">
      <div class="flex flex-col flex-shrink-0 bg-white border-r shadow-md">
        <div class="p-4">
          <h1 class="text-lg font-bold">Sidebar</h1>
        </div>
        <nav class="flex-grow">
          <ul class="flex flex-col py-4">
            <li class="px-4 py-2 hover:bg-gray-200">
              <a href="#">Link 1</a>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <a href="#">Link 2</a>
            </li>
            <li class="px-4 py-2 hover:bg-gray-200">
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function DashBoardLayout({ children }) {
  return (
    <main className="flex min-h-screen  min-w-full">
      <Nav />
      <div className="min-w-full ml-10 mt-5">{children}</div>
    </main>
  );
}

export default DashBoardLayout;
