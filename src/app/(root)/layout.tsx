export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://moriyukijp.com/en/myoko/" />
        <meta name="robots" content="noindex, follow" />
        <meta
          httpEquiv="refresh"
          content={`0;url=${process.env.NEXT_PUBLIC_BASE_PATH || ''}/en/myoko`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
