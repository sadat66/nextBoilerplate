import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Full-Stack Boilerplate",
  description: "A modern Next.js boilerplate with authentication, database, and beautiful UI components",
};

// This is a placeholder root layout
// The actual layout is handled in [locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
