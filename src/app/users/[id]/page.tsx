const UserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3002/api/users/${id}`, {
    cache: "no-store",
  });
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
      <p>
        Email: <span className='text-blue-500'>{user.email}</span>
      </p>
    </div>
  );
};

export default UserPage;
