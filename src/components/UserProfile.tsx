"use client"; // Это клиентский компонент

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-2'>
          Welcome, {session.user?.name}!
        </h2>
        <p>Email: {session.user?.email}</p>
        <img
          src={session.user?.image || "/avatar-placeholder.png"}
          alt='User Avatar'
          className='rounded-full w-16 h-16 mt-2'
        />
        <button
          onClick={() => signOut()}
          className='mt-4 px-4 py-2 bg-red-500 text-white rounded'
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className='p-4'>
      <h3 className='text-2xl font-bold mb-2'>Not Signed In</h3>
      <button
        onClick={() => signIn("google")}
        className='px-4 py-2 bg-blue-500 text-white rounded'
      >
        Sign In
      </button>
    </div>
  );
}
