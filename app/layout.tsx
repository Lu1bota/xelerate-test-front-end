import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import "modern-normalize/modern-normalize.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Досягнення | XELERATE",
  description:
    "Відстежуйте свої досягнення, відкривайте нові рівні та мотивуйте себе розвиватися щодня.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
