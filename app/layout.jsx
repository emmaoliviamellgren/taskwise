import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/app/(private)/(providers)/theme-provider';
import TodoContextProvider from './(private)/(providers)/TodoContext';
import Head from 'next/head';

import './globals.css';

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
            <ClerkProvider>
                <body className='flex flex-col h-screen overflow-auto antialiased'>
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
            </ClerkProvider>
        </html>
    );
}
