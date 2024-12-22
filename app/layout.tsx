import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souvik Das",
  description:
    "Souvik Das is a professional Frontend Developer with over 3 years of specialized experience in React.js and modern web development. Skilled in building responsive, user-friendly web applications using JavaScript, TypeScript, and the latest frontend technologies. Currently expanding expertise into full-stack development with Node.js. Experienced in optimizing website performance, implementing UI/UX best practices, and delivering scalable solutions for diverse business needs.",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
