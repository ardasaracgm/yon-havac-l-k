import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yön Havacılık | Savunma Sistemleri",
  description:
    "Yön Havacılık için modern, hızlı ve kurumsal Next.js web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
