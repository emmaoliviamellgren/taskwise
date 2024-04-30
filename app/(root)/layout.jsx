import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/(root)/(providers)/theme-provider';
import TodoContextProvider from './(providers)/TodoContext';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'TODO-APP',
    description: 'A simple and intuitive todo-application',
};

export default function RootLayout({ children }) {
    return (
        <html
            lang='en'
            suppressHydrationWarning>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
            <body className={inter.className}>
                <TodoContextProvider>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='system'
                        enableSystem
                        disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </TodoContextProvider>
            </body>
        </html>
    );
}
