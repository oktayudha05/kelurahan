"use client";

import { signOut } from "next-auth/react";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
      title="Keluar sesi"
    >
      <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
    </button>
  );
}
