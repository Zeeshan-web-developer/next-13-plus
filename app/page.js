import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const fetchDummyData = async () => {
  throw new Error("Dummy Error");
  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function Home() {
  await fetchDummyData();
  return <div>APP entry Point</div>;
}
