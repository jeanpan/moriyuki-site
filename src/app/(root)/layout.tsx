export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="refresh"
          content={`0;url=${process.env.NEXT_PUBLIC_BASE_PATH || ''}/en`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
