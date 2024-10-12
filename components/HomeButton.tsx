import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function HomeButton() {
  return (
    <div className="flex">
      <Link
        href="/"
        title="Home"
        className=" p-2 bg-gray-400 text-white rounded-full shadow hover:bg-gray-500"
      >
        <HomeIcon className="w-6 h-6" />
      </Link>
    </div>
  );
}
