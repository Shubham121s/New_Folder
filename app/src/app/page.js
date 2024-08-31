import Image from "next/image";
import Link from "next/link";
import Addusers from "./components/Addusers";
import DisplayUsers from "./components/DisplayUsers";

export default function Home() {
  return (
    <main >
      {/* HomepAGE
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to About page</Link> */}
      <Addusers/>
      <DisplayUsers/>





    </main>
  );
}
