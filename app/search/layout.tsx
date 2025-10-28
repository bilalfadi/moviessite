import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://n123movie.me/search',
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
