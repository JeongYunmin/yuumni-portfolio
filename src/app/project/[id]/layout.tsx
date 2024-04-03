import Back from "@/components/Back";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="container">
        <Back />
      </section>
      {children}
    </>
  );
}
