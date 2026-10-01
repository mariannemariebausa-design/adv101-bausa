"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: "⌂" },
    { name: "Portfolio", path: "/portfolio", icon: "♡" },
    { name: "About", path: "/about", icon: "✿" },
    { name: "Gallery", path: "/gallery", icon: "♡" },
  ];

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link href="/" className="logo">
          <div className="logo-heart">♥</div>

          <div className="logo-text">
            <h1>My Little Space</h1>
            <span>Marianne's Portfolio</span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="navigation">
          {navItems.map((item) => {
            const active = pathname === item.path;

            return (
              <Link
                href={item.path}
                key={item.path}
                className={`nav-button ${active ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}