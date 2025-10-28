import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://n123movie.me/genres',
  },
};

export default function GenresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
