import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xeduler",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <header>
          <nav>
            <h1>Xeduler</h1>
            <ul>
              <li>
                <Link legacyBehavior href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/terms-policy">
                  <a>Terms and Policy</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Company Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

