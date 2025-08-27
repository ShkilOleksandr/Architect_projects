export const metadata = { title: "My Site" };

import "./global.css"; // <-- put your global styles here

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

