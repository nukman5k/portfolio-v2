import { Inter } from "next/font/google";
import "./globals.css";

// Compponents
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggler from "@/components/ThemeToggler";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> 
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}