import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Layouts/Header";
import Banner from "./Components/Layouts/Banner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fakebook | Nhật ký gia đình",
  description: "Cùng gia đình lưu giữ những khoảnh khắc đáng nhớ.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.css"
          integrity="sha512-x9WwyMYBnlXMNQ6kQ/Lyzu1NqIhLQKL5Oq6xByfXuRj7s9CskyCbLv/1IjqzJmXwFXWr0ov6jBV7Qbc0hh9nHg=="
          crossOrigin="anonymous" referrerPolicy="no-referrer"></link>
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="mx-auto grid w-full max-w-[1320px] flex-1 grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:py-8 lg:grid-cols-[250px_minmax(0,700px)] lg:gap-8 xl:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Banner />
            </div>
          </aside>
          <main className="min-w-0">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
