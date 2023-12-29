import { NextResponse } from "next/server";

const isLogin = false;
const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  //   if (pathname.startsWith("/products") && !isLogin) {
  //     // const loginUrl = new URL("/auth", request.url);
  //     const loginUrl = request.nextUrl.origin + "/auth";
  //     console.log(loginUrl);
  //     return NextResponse.redirect(loginUrl);
  //     // return Response.redirect(loginUrl);
  //   }
  console.log(pathname);
};

export const config = {
  matcher: ["/products/:path*"],
};

export default middleware;

// ../../../../../
