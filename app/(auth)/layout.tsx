import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import React from 'react';
import '../globals.css'


export const metadata = {
    title: "LINGUO",
    description: " Join a vibrant community, Practice Questions, and learn on the go with our smart Chrome extension. Start your language journey with LINGUO today!"
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
     return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1 flex items-center`}>
                    {children}
                </body>
            </html>

        </ClerkProvider>
     )
}