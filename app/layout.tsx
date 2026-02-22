import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  // metadataBase is used to resolve relative OpenGraph image URLs
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://samcast.org",
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
        <SiteHeader />
        <main className="max-w-4xl mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
