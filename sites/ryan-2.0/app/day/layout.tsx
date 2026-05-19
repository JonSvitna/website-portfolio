export default function DayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Geist:wght@200;300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
