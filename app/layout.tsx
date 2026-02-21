import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  // metadataBase is used to resolve relative OpenGraph image URLs
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://samcast.example.com",
  ),
  title: {
    default: "The SamCast",
    template: "%s | The SamCast",
  },
  description:
    "The SamCast – a podcast by Sam, Darragh, Emma, Glenn and friends.",
  openGraph: {
    siteName: "The SamCast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="card mt-2.5 p-2.5">{children}</main>
      </body>
    </html>
  );
}
