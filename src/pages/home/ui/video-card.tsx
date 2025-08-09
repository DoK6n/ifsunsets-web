import { Calendar, Eye, Play } from 'lucide-react'
import type React from 'react'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent } from '~/components/ui/card'

interface VideoCardProps {
  videoId: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  duration: string
  viewCount?: string
  onClick: () => void
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnail,
  publishedAt,
  duration,
  viewCount,
  onClick,
}: VideoCardProps) => {
  return (
    <Card
      className="card-gaming border-border/50 cursor-pointer group hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-primary/90 rounded-full p-3 glow-effect">
              <Play className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2">
            <Badge className="bg-black/80 text-white border-0 text-xs">{duration}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>

          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {publishedAt}
            </div>
            <div className="flex items-center gap-1">
              {viewCount && (
                <>
                  <Eye className="w-3 h-3" />
                  {viewCount}
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
