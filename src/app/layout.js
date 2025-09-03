import '../styles/globals.css'
export const metadata = {
  title: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My Portfolio</footer>
      </body>
    </html>
  );
}
