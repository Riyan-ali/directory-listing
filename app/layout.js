import "@/styles/global.css"

export const metadata = {
  title: "Product Upload Assigment - Riyan Ali",
  description: "This is a simple product upload webiste just create for an assigment",
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
