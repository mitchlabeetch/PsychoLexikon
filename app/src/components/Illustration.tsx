import type { ReactNode } from 'react';

interface IllustrationProps {
  src: string;
  alt: string;
  caption: ReactNode;
  figureNumber: number;
  aspectRatio?: string;
}

export default function Illustration({
  src,
  alt,
  caption,
  figureNumber,
  aspectRatio,
}: IllustrationProps) {
  return (
    <figure className="my-10">
      <div
        className="rounded-lg overflow-hidden border"
        style={{
          background: '#FEFDFB',
          borderColor: '#D6D0C4',
          ...(aspectRatio ? { aspectRatio } : {}),
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 px-1">
        <p className="font-serif text-caption-sm text-inkSecondary italic leading-relaxed">
          <span
            className="font-sans font-semibold not-italic mr-2"
            style={{ color: '#92400E', fontSize: '0.8125rem' }}
          >
            Abb. {figureNumber}
          </span>
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}
