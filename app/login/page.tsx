"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import HomeButton from "@/components/HomeButton";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/document",
      username,
      password,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="absolute top-8 left-0 right-0 text-2xl md:text-4xl font-bold text-white mb-8 text-center shadow-md">
        Sistem Automatisasi Dokumen Desa Madusari
      </h1>

      <div className="relative bg-white bg-opacity-80 shadow-lg rounded-lg px-4 my-4 py-4 max-w-lg w-full lg:mx-8">
        <HomeButton />
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800 pt-2">
          Halaman Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="password"
            />
          </div>
          <div className="mb-2 text-center">
            Belum punya akun?{" "}
            <Link href="/register" className="text-blue-500">
              buat akun
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
