export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const revalidate = 10;

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "force-cache", // Указываем кэширование для SSG
  });
  const user = await res.json();
  console.log("user", user);

  if (!res.ok) {
    return <div className='p-4 text-red-500'>User not found</div>;
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>User Page</h1>
      <p>
        User ID: <span className='text-blue-500'>{user.id}</span>
      </p>
      <p>
        Name: <span className='text-blue-500'>{user.name}</span>
      </p>
      <p>
        Email: <span className='text-blue-500'>{user.email}</span>
      </p>
    </div>
  );
};

export default UserPage;
