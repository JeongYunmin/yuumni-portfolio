"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout(props) {
  const { id } = useParams();

  return (
    <html>
      <body>
        {id ? (
          <>{props.children}</>
        ) : (
          <>
            <Header />
            {props.children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
