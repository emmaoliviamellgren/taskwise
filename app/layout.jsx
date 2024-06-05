import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
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
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}>
            <html
                lang='en'
                suppressHydrationWarning>
                <Head>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1, maximum-scale=1'
                    />
                </Head>
                <body className='flex flex-col h-screen overflow-auto'>
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
        </ClerkProvider>
    );
}
