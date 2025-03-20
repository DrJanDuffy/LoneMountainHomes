import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Lone Mountain Homes | Your Trusted Real Estate Partner",
  description: "Discover your dream home in the Lone Mountain area. Access powerful market analysis tools, property valuations, and expert real estate guidance.",
  metadataBase: new URL('https://www.findlonemountainhomes.com'),
  keywords: "Lone Mountain homes, real estate, market analysis, property valuation, home buying, home selling",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.findlonemountainhomes.com',
    title: 'Lone Mountain Homes | Your Trusted Real Estate Partner',
    description: 'Discover your dream home in the Lone Mountain area. Access powerful market analysis tools, property valuations, and expert real estate guidance.',
    siteName: 'Lone Mountain Homes',
    images: [
      {
        url: 'https://www.findlonemountainhomes.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lone Mountain Homes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lone Mountain Homes | Your Trusted Real Estate Partner',
    description: 'Discover your dream home in the Lone Mountain area. Access powerful market analysis tools.',
    images: ['https://www.findlonemountainhomes.com/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* RealScout Web Components */}
        <Script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          strategy="beforeInteractive"
          onLoad={() => {
            console.log('RealScout Web Components loaded');
            // Initialize RealScout components after load
            const script = document.createElement('script');
            script.innerHTML = `
              window.addEventListener('load', function() {
                if (window.RealScoutWebComponents) {
                  window.RealScoutWebComponents.initialize();
                }
              });
            `;
            document.head.appendChild(script);
          }}
        />

        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-simple-search {
              --rs-ss-font-primary-color: #6a6d72;
              --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: 500px !important;
            }
          `
        }} />

        {/* Third-party scripts */}
        <Script 
          src="https://widgets.realscout.com/embed.js"
          strategy="afterInteractive"
          async
        />
        
        <Script 
          src="https://www.homebot.ai/widget/embed.js"
          strategy="afterInteractive"
          async
        />
        
        <Script 
          src="https://widgets.cloudcma.com/loader.js"
          strategy="afterInteractive"
          async
        />
        
        <Script 
          src="https://cdn.percy.ai/js/hvs-widget.min.js"
          strategy="afterInteractive"
          async
        />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Lone Mountain Homes",
              "url": "https://www.findlonemountainhomes.com",
              "description": "Your trusted real estate partner in the Lone Mountain area.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lone Mountain",
                "addressRegion": "MT",
                "addressCountry": "US"
              },
              "areaServed": "Lone Mountain",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
