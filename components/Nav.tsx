import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white rounded-2xl mx-auto mt-2.5 px-4 flex justify-center items-center h-[38px] w-[780px] max-w-full">
      <Link href="/" className="px-4 text-blue-700 hover:underline">
        Home
      </Link>
      <Link href="/about" className="px-4 text-blue-700 hover:underline">
        About Us
      </Link>
    </nav>
  );
}
