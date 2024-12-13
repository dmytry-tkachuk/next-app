"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      Home Page next JS
      <ul>
        <li className='hover:underline'>
          <Link href='/users'>Link To Users Using `Link` comppnent</Link>
        </li>
        <li className='hover:underline'>
          <span
            className='cursor-pointer text-green-500'
            onClick={() => router.push("/users")}
          >
            Link To Users Using `useRouter` hook
          </span>
        </li>
        <li className='hover:underline'>
          <button type='button' onClick={() => redirect("/users")}>
            redirect
          </button>
        </li>

        <li className='hover:underline'>
          <Link href='/users/1'>Go to User 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
