import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware для проверки авторизации
export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token'); // Проверяем куку авторизации

  if (!token) {
    // Если нет токена, перенаправляем на страницу логина
    // return NextResponse.redirect(new URL("/login", request.url));
  }

  // Если токен есть, продолжаем обработку
  return NextResponse.next();
}

// Указываем маршруты, где применять Middleware
// export const config = {
//   matcher: ["/users/:path*"], // Применяем Middleware только к маршрутам `/users/*`
// };
