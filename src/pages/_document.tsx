import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/Navbar";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <body className="bg-gray-100 h-screen">
        <div className="flex h-full">
          <NavBar />
          <div className="flex-grow p-4 ">
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  );
}
