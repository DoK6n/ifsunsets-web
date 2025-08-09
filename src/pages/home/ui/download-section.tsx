import { IconBadgeCc } from '@tabler/icons-react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Cpu, Download, ExternalLink, Gamepad2, HardDrive, MemoryStick, Monitor, Star } from 'lucide-react'
import type React from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import { queries } from '~/entities'
import type { SystemSpec } from '~/routes/api/stove/-types'

const downloadPlatforms = [
  {
    name: 'Steam',
    description: '가장 인기 있는 PC 게임 플랫폼',
    icon: <Monitor className="w-6 h-6" />,
    price: '₩ 29,000',
    discount: '20% 할인',
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    url: 'https://store.steampowered.com/app/ifsunsetsofficial',
    isPrimary: true,
  },
  {
    name: '스토브',
    description: '한국 공식 유통 플랫폼',
    icon: <Gamepad2 className="w-6 h-6" />,
    price: '₩ 29,000',
    discount: '',
    color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    url: 'https://store.onstove.com/ko/games/2122',
    isPrimary: false,
  },
]

const gameFeatures = [
  { id: 0, text: '완전한 한국어 지원' },
  { id: 1, text: '싱글플레이 & 멀티플레이' },
  { id: 2, text: '모든 DLC 포함' },
  { id: 3, text: 'Steam 도전과제' },
  { id: 4, text: '클라우드 세이브' },
  { id: 5, text: '컨트롤러 지원' },
]

export const DownloadSection: React.FC = () => {
  const { data: systemRequirement } = useSuspenseQuery(queries.stove.systemRequirement())

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 hero-text">다운로드</h2>
          <p className="text-muted-foreground text-lg">IfSunSets을 지금 다운로드하고 생존의 여정을 시작하세요</p>
        </div>

        <div className="space-y-8">
          {/* First Row: Platform Cards (left 2) + Game Features (right 1) */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Platform Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {downloadPlatforms.map(platform => (
                <Card
                  key={platform.name}
                  className={`card-gaming border-border/50 ${platform.isPrimary ? 'ring-2 ring-primary/50' : ''}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${platform.color}`}>{platform.icon}</div>
                        <div>
                          <CardTitle className="text-xl">{platform.name}</CardTitle>
                          <CardDescription>{platform.description}</CardDescription>
                        </div>
                      </div>
                      {platform.isPrimary && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">추천</Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{platform.price}</div>
                        {platform.discount && (
                          <Badge className="bg-destructive/20 text-destructive border-destructive/30 mt-1">
                            {platform.discount}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium">4.5</span>
                      </div>
                    </div>

                    <Button className="w-full btn-gaming" onClick={() => window.open(platform.url, '_blank')}>
                      <Download className="w-4 h-4 mr-2" />
                      {platform.name}에서 구매
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Game Features */}
            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  포함된 기능
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {gameFeatures.map(feature => (
                    <div key={feature.id} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row: System Requirements (left 2) + Additional Info (right 1) */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* System Requirements */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <SystemSpecCard spec={systemRequirement.system_spec.minimum} type="최소" />
              <SystemSpecCard spec={systemRequirement.system_spec.recommended} type="권장" />
            </div>

            {/* Supported Languages */}
            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle>지원 언어</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-4 gap-3 text-sm">
                  {/* Header Row */}
                  <div className="font-medium text-muted-foreground">언어</div>
                  <div className="font-medium text-muted-foreground text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-muted rounded">🌐</span>
                  </div>
                  <div className="font-medium text-muted-foreground text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-muted rounded">🎵</span>
                  </div>
                  <div className="font-medium text-muted-foreground text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-muted rounded">
                      <IconBadgeCc />
                    </span>
                  </div>

                  {/* Language Rows */}
                  <div className="text-xs">한국어</div>
                  <div className="text-center">✓</div>
                  <div className="text-center"> </div>
                  <div className="text-center">✓</div>

                  <div className="text-xs">영어</div>
                  <div className="text-center">✓</div>
                  <div className="text-center">✓</div>
                  <div className="text-center">✓</div>

                  <div className="text-xs">중국어(번체)</div>
                  <div className="text-center">✓</div>
                  <div className="text-center"> </div>
                  <div className="text-center">✓</div>

                  <div className="text-xs">중국어(간체)</div>
                  <div className="text-center">✓</div>
                  <div className="text-center"> </div>
                  <div className="text-center">✓</div>

                  <div className="text-xs">일본어</div>
                  <div className="text-center">✓</div>
                  <div className="text-center"> </div>
                  <div className="text-center">✓</div>

                  <div className="text-xs">독일어</div>
                  <div className="text-center">✓</div>
                  <div className="text-center"> </div>
                  <div className="text-center">✓</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-12">
          <Card className="card-gaming border-primary/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">지금 바로 시작하세요!</h3>
              <p className="text-muted-foreground mb-6">IfSunSets의 광활한 세계에서 당신만의 생존 이야기를 써보세요</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-gaming text-lg"
                  onClick={() => window.open('https://store.steampowered.com/app/ifsunsetsofficial', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Steam에서 구매
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 text-lg"
                  onClick={() => window.open('https://store.onstove.com/ko/games/2122', '_blank')}
                >
                  스토브에서 구매
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const SystemSpecCard: React.FC<{ spec: SystemSpec; type: '최소' | '권장' }> = ({ spec, type }) => (
  <Card key={type} className="card-gaming border-border/50">
    <CardHeader>
      <CardTitle className={`flex items-center gap-2 ${type === '권장' ? 'text-primary' : ''}`}>
        <Cpu className="w-5 h-5" />
        {type} 사양
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div>
        <div className="text-sm font-medium text-muted-foreground">운영체제</div>
        <div className="text-sm">{spec.os}</div>
      </div>
      <Separator className="bg-border/30" />

      <div>
        <div className="text-sm font-medium text-muted-foreground">프로세서</div>
        <div className="text-sm">{spec.processor}</div>
      </div>
      <Separator className="bg-border/30" />

      <div>
        <div className="text-sm font-medium text-muted-foreground flex items-center gap-1">
          <MemoryStick className="w-3 h-3" />
          메모리
        </div>
        <div className="text-sm">{spec.memory}</div>
      </div>
      <Separator className="bg-border/30" />

      <div>
        <div className="text-sm font-medium text-muted-foreground">그래픽</div>
        <div className="text-sm">{spec.graphic}</div>
      </div>
      <Separator className="bg-border/30" />

      <div>
        <div className="text-sm font-medium text-muted-foreground flex items-center gap-1">
          <HardDrive className="w-3 h-3" />
          저장공간
        </div>
        <div className="text-sm">{spec.storage}</div>
      </div>
      <Separator className="bg-border/30" />
    </CardContent>
  </Card>
)
