import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/(root)/(providers)/theme-provider';
import TodoContextProvider from './(providers)/TodoContext';
import Head from 'next/head';

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
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=1'
                />
            </Head>
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
