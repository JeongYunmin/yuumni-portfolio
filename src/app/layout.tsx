"use client";

import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout(props: any) {
  const { id } = useParams();
  const pathname = usePathname();

  const arr: number[] = [];
  const randomArr: number[] = [];
  const randomSize: number[] = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }

  arr.map(() => {
    randomArr.push(Math.random() * 20);
    randomSize.push(Math.random() * (160 - 90) + 90);
  });

  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>윰니의 포트폴리오</title>
      </head>
      <body>
        <style>
          {`
            @keyframes heartEffect {
              1% { opacity: 1 }
              60% { opacity: 0 }
              100% {opacity: 0; transform: translateY(-160vh) }
            }
          `}
        </style>

        {id ? (
          <>{props.children}</>
        ) : (
          <>
            <Header />
            {props.children}
            {pathname === "/" &&
              arr.map((i) => (
                <Image
                  key={i}
                  src={"/images/하트.png"}
                  width={randomSize[i]}
                  height={randomSize[i]}
                  className="heart"
                  alt="하트 이미지"
                  style={{
                    position: "absolute",
                    left: `${randomArr[i] * 5}vw`,
                    bottom: "0",
                    opacity: "0",
                    animationDelay: `${Math.random() * 1.5}s`,
                    animationName: "heartEffect",
                    animationDuration: "3.5s",
                    animationTimingFunction: "Ease-out",
                  }}
                />
              ))}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
