"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SessionGuard() {
  const pathname = usePathname();

  useEffect(() => {
    // If the user is not in the admin section, clear the admin session
    if (!pathname.startsWith("/admin")) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("admin");
    }
  }, [pathname]);

  return null;
}
