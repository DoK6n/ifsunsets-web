import { IconBrandYoutubeFilled } from '@tabler/icons-react'
import { useState } from 'react'
import type React from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { type Video, useVideo } from '../lib'
import { VideoCard } from './video-card'
import { VideoModal } from './video-modal'

export const VideoSection: React.FC = () => {
  const { videos } = useVideo()

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 hero-text">공식 유튜브</h2>
          <p className="text-muted-foreground text-lg">IfSunSets의 최신 영상과 개발 소식을 만나보세요</p>
        </div>

        <Card className="card-gaming border-border/50">
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconBrandYoutubeFilled className="w-6 h-6 text-destructive" />
                <div>
                  <CardTitle className="text-2xl">IfSunSets Official</CardTitle>
                  <CardDescription>공식 게임플레이, 개발 소식, 가이드 영상</CardDescription>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-destructive/50 text-destructive hover:bg-destructive/10"
                onClick={() => window.open('https://youtube.com/@ifsunsetsofficial', '_blank')}
              >
                채널 구독
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(video => (
                <VideoCard
                  key={video.id}
                  videoId={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnail={video.thumbnail}
                  publishedAt={video.publishedAt}
                  duration={video.duration}
                  viewCount={video.viewCount}
                  onClick={() => handleVideoClick(video)}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://www.youtube.com/@polymorph_studios_IfSunSets', '_blank')}
              >
                더 많은 영상 보기
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Video Modal */}
        {selectedVideo && (
          <VideoModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            videoId={selectedVideo.id}
            title={selectedVideo.title}
          />
        )}
      </div>
    </section>
  )
}
