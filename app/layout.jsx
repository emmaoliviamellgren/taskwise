import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/app/(private)/(providers)/theme-provider';
import { GeistSans } from 'geist/font/sans';
import TodoContextProvider from './(private)/(providers)/TodoContext';
import Head from 'next/head';

import './globals.css';

export const metadata = {
    title: 'TaskWise',
    description: 'A simple and intuitive todo-application',
};

export default function RootLayout({ children }) {
    return (
        <html
            lang='en'
            className={GeistSans.className}
            suppressHydrationWarning>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=1'
                />
                <meta property='og:title' content='TaskWise' />
                <meta property='og:image' content='//media.example.com/1234567.jpg' />
                <meta property='og:description' content='A simple and intuitive todo-application' />
                <meta property='og:url' content='//www.example.com/' />
            </Head>
            <ClerkProvider>
                <body
                    className='flex flex-col h-screen overflow-auto antialiased'
                    suppressHydrationWarning>
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
