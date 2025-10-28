import { Metadata } from 'next';

interface TVGenreLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: TVGenreLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    alternates: {
      canonical: `https://n123movie.me/tv-genre/${slug}`,
    },
  };
}

export default function TVGenreLayout({ children }: TVGenreLayoutProps) {
  return children;
}
