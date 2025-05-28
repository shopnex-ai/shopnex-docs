import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import '@/styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Head from 'next/head';
import React from 'react';

const inter = Inter({
    variable: '--font-sans',
    subsets: ['latin'],
});

const jb = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

export const viewport: Viewport = {
    themeColor: '#4d7cda',
    initialScale: 1.0,
    maximumScale: 1.0,
    minimumScale: 1.0,
    userScalable: false,
    width: 'device-width',
};

export const metadata: Metadata = {
    title: {
        default: 'ImproveFolio',
        template: '%s',
    },
    keywords: ['portfolio', 'A / B testing', 'A / B split testing', 'split testing'],
    description: 'ImproveFolio is a tool for A / B testing and split testing.',
    robots: {
        index: true,
        follow: true,
    },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
    const messages = await getMessages();
    return (
        <html lang='en' dir='ltr' suppressHydrationWarning>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body className={`${inter.variable} ${jb.variable}`}>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
