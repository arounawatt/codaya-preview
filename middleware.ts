import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api|_next|_vercel|favicon.png|.*\\..*).*)",
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers.get("host") || "";

  // Define the main domain (without www or https://)
  let rootDomain = "codaya.fr"; // Replace with your domain
  const isLocalhost = hostname.includes("localhost");

  if (isLocalhost) {
    rootDomain = "localhost:3000";
  }

  const subdomain = hostname.replace(`.${rootDomain}`, "").split(".")[0]; // Extract subdomain
  
  // Handle main domain routing
  if (
    !subdomain ||
    subdomain === "www" ||
    hostname === rootDomain
  ) {
    return NextResponse.rewrite(new URL("/home", req.url));
  }

  // Rewrite subdomains to /apps/[subdomain]
  return NextResponse.rewrite(new URL(`/apps/${subdomain}`, req.url));
}
