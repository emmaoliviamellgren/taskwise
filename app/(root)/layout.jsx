import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/(root)/(providers)/theme-provider";
import TodoContextProvider from "./(providers)/TodoContext";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TODO-APP",
  description: "A simple and intuitive todo-application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <TodoContextProvider>
            {children}
            </TodoContextProvider>
          </ThemeProvider>
      </body>
  </html>
  );
}
