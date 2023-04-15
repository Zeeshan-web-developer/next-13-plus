import Image from "next/image";
import { Inter } from "next/font/google";
import Users from "./components/Users";
const inter = Inter({ subsets: ["latin"] });
import ClientComponent from "./client/page";
import ServerComponent from "./server/page";

async function getAllUsers() {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });
    let data = await res.json();
    return data;
  } catch (error) {
    console.log({ error });
  }
}

export default async function Home() {
  const allUsers = await getAllUsers();
  console.log({ allUsers });

  return (
    <div>
      <h2>Home</h2>
      <Users {...{ allUsers }} />
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
