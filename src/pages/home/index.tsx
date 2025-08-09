import { Suspense } from 'react'
import { ErrorBoundary } from '~/components/error-boundary'
import { Footer } from '~/components/footer'
import { Navigation } from '~/components/navigation'
import {
  CommunitySection,
  DownloadSection,
  GameInfoSection,
  HeroSection,
  NewsSection,
  VideoSection,
} from '~/pages/home/ui'

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="info">
          <GameInfoSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
        <section id="youtube">
          <Suspense fallback={<div>Loading...</div>}>
            <VideoSection />
          </Suspense>
        </section>
        <section id="community">
          <CommunitySection />
        </section>
        <section id="download">
          <ErrorBoundary fallback={<div>Error</div>}>
            <Suspense fallback={<div>Loading...</div>}>
              <DownloadSection />
            </Suspense>
          </ErrorBoundary>
        </section>
      </main>
      <Footer />
    </div>
  )
}
