import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import RootLayoutClient from "./RootLayoutClient"; // Import Client Component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gray-950 text-white antialiased max-w-full overflow-x-hidden",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
