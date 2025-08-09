import { Play } from 'lucide-react'
import type React from 'react'
import heroBanner from '~/assets/hero-banner.jpg'
import { Button } from '~/components/ui/button'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      {/* Video Placeholder - Replace with actual trailer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="relative aspect-video bg-black/50 rounded-xl border border-border/50 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="ghost"
                size="lg"
                className="bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary glow-effect"
              >
                <Play className="w-8 h-8 mr-2" />
                게임 트레일러 보기
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 mt-32">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text animate-fade-in">IfSunSets</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
          한국에서 개발된 오픈월드 생존게임
          <br />
          떨어지는 해와 함께 시작되는 당신의 생존 이야기
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in">
          <Button className="btn-gaming text-lg">지금 플레이하기</Button>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-6 py-3">
            더 알아보기
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  )
}
