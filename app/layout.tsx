// app/layout.tsx or app/root-layout.tsx
import type React from "react";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata = {
  title: "All Day Cafe and Resturant",
  description: "All Day Cafe and Resturant",
  developer: 'Temesgen Debebe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="root" enableSystem>
          <NavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
