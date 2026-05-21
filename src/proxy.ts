import { auth } from "@/auth";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/profile",
  "/dashboard/settings",
];

export const proxy = auth((req) => {
  if (!req.auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    const newUrl = new URL("/sign-in", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (req.auth && req.nextUrl.pathname === "/sign-in") {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
