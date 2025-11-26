import Header from "@/components/header";
import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>
      <Header />
      <body>{children}</body>
      </main>
    </html>
  );
}
