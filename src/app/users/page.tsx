import Link from "next/link";

export default function Users() {
  const sumOfTwo = (a: number, b: number) => a + b;
  console.log(sumOfTwo(2, 3));

  return (
    <>
      <div>Users next JS</div>
      <div className='block'>
        <Link className='flex' href='/'>
          Home
        </Link>
      </div>
    </>
  );
}
