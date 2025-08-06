
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
}

const ImageSkeleton = ({ className, aspectRatio = 'video' }: ImageSkeletonProps) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]'
  };

  return (
    <div className={cn('relative overflow-hidden rounded-lg', aspectClasses[aspectRatio], className)}>
      <Skeleton className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
    </div>
  );
};

export default ImageSkeleton;
