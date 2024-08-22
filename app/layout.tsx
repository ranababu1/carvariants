import './globals.css';
import Head from 'next/head';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata = {
  title: 'Car Variants - Explore and Compare Car Models',
  description: 'Explore a comprehensive list of car models and variants. Compare features, specifications, and prices to find the best car for you.',
  keywords: 'car variants, car models, car comparison, car features, car specifications, best cars',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
