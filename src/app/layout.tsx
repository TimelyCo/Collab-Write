import type { Metadata } from "next";
import "./globals.css";

import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";


import { NuqsAdapter} from "nuqs/adapters/next/app"

import {Inter} from "next/font/google"
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter =Inter({
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
          
        </NuqsAdapter>
        
      </body>
    </html>
  );
}
