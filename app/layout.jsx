import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const metadata = {
  title: "BugNest - log, track, and manage bugs efficiently",
  description:
    "BugNest is a bug tracking platform that helps developers and teams log, track, and manage bugs efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
