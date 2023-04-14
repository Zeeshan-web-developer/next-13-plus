import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Root Layout",
  description: "Root Layout",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
