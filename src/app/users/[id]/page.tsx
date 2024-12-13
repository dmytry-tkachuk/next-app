const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Ожидаем разрешения Promise для params
  const { id } = await params;
  console.log("res", id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  console.log("res", res);
  const user = await res.json();

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
    </div>
  );
};

export default UserPage;
