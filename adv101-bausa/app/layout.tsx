import type { ReactNode } from "react";
import "./globals.css";
import Header from "../components/header";


export const metadata = {
  title: "Marianne's Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {children}
        </main>

        <footer className="footer">
          <p>Made by Marianne</p>
          <p>© 2026</p>
        </footer>

      </body>
    </html>
  );
}