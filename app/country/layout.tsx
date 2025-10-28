import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://n123movie.me/country',
  },
};

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
