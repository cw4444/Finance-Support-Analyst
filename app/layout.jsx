import './globals.css';

export const metadata = {
  title: 'Finance Support Analyst Demo',
  description: 'A proof-of-concept workspace for automating finance support tasks.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
