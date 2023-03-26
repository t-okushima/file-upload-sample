import './globals.css';

export const metadata = {
  title: 'image file upload sample',
  description: 'image file upload sample',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
