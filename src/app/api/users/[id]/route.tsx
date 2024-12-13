import { NextResponse } from "next/server";

const users: Record<string, { id: number; name: string; email: string }> = {
  "1": { id: 1, name: "Alice", email: "alice@example.com" },
  "2": { id: 2, name: "Bob", email: "bob@example.com" },
  "3": { id: 3, name: "Charlie", email: "charlie@example.com" },
};

// Обработка GET-запроса
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!users[id]) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(users[id]);
}

// Обработка DELETE-запроса
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!users[id]) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  delete users[id];

  return NextResponse.json({ success: true });
}
