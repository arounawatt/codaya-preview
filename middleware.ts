import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api|_next|_vercel|favicon.png|.*\\..*).*)",
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Define the main domain (without www or https://)
  let rootDomain = "codaya.fr"; // Replace with your domain
  const isLocalhost = hostname.includes("localhost");

  if (isLocalhost) {
    rootDomain = "localhost:3000";
  }

  const subdomain = hostname.replace(`.${rootDomain}`, "").split(".")[0]; // Extract subdomain
  
  // Handle main domain routing (no subdomain)
  if (
    !subdomain ||
    subdomain === "www" || 
    subdomain === 'trustly' ||
    hostname === rootDomain
  ) {
    // Si un path existe (ex: /wall-of-love), laisser Next.js le résoudre normalement
    if (url.pathname !== "/") {
      return NextResponse.next();
    }
    return NextResponse.rewrite(new URL("/home", req.url));
  }

  // If the path is just "/", rewrite to /apps/[subdomain]
  // Otherwise (e.g. /wall-of-love), keep the path and pass subdomain as search param
  if (url.pathname === "/" && subdomain) {
    return NextResponse.rewrite(new URL(`/apps/${subdomain}`, req.url));
  }

  // Rewrite to the path itself with subdomain as query param
  const rewriteUrl = new URL(url.pathname, req.url);
  rewriteUrl.searchParams.set("subdomain", subdomain);
  return NextResponse.rewrite(rewriteUrl);
}  