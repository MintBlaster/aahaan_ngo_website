// components/OptimizedImage.tsx
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    fill?: boolean;
    priority?: boolean;
    overlay?: boolean;
}

export default function OptimizedImage({
                                           src,
                                           alt,
                                           width,
                                           height,
                                           className = '',
                                           fill = false,
                                           priority = false,
                                           overlay = false,
                                       }: OptimizedImageProps) {
    const [isLoading, setLoading] = useState(true);

    const imageProps = fill
        ? { fill: true }
        : { width, height };

    const wrapperStyle = !fill && width && height
        ? { aspectRatio: width / height }
        : {};

    return (
        <div className={`relative overflow-hidden ${fill ? 'h-full' : ''}`} style={wrapperStyle}>
            <Image
                src={src}
                alt={alt}
                {...imageProps}
                className={`
                    duration-700 ease-in-out
                    ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
                    ${fill ? 'object-cover' : ''}
                    ${className}
                `}
                onLoad={() => setLoading(false)}
                priority={priority}
                quality={75}
            />
            {overlay && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            )}
        </div>
    );
}
