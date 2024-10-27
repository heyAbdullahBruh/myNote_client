import "./globals.css";

export const metadata = {
  title: "Mr.Pie",
  description: "The site is Mr.Pie's personal website. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
              {children}
      </body>
    </html>
  );
}
