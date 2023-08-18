import Navbar from "../Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ paddingTop: "65px", width: "100%", height: "100%" }}>
        {children}
        </div>
      </body>
    </html>
  );
}
