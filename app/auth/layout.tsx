export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto w-full max-w-[560px] flex-1 px-4 py-8 sm:px-6 md:py-12">
      {children}
    </main>
  );
}
