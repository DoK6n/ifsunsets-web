import { ExternalLink, Heart, MessageCircle, TrendingUp, Users } from 'lucide-react'
import type React from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

interface CommunityPlatform {
  id: string
  name: string
  description: string
  memberCount: string
  icon: React.ReactNode
  color: string
  url: string
  isActive: boolean
}

const communityData: CommunityPlatform[] = [
  {
    id: 'discord',
    name: 'Discord 서버',
    description: '실시간 채팅과 게임 파티 모집, 개발진과의 소통',
    memberCount: '15,234',
    icon: <MessageCircle className="w-6 h-6" />,
    color: 'bg-[#5865F2]/20 text-[#5865F2] border-[#5865F2]/30',
    url: 'https://discord.gg/ifsunsetsofficial',
    isActive: true,
  },
  {
    id: 'stove',
    name: '스토브 커뮤니티',
    description: '공식 게시판, 패치 노트, Q&A 및 버그 리포트',
    memberCount: '8,567',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    url: 'https://store.onstove.com/ko/games/2122/community',
    isActive: true,
  },
  {
    id: 'reddit',
    name: 'Reddit 커뮤니티',
    description: '팁과 공략, 스크린샷 공유, 게임 토론',
    memberCount: '12,890',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-[#FF4500]/20 text-[#FF4500] border-[#FF4500]/30',
    url: 'https://reddit.com/r/ifsunsetsofficial',
    isActive: true,
  },
  {
    id: 'steam',
    name: 'Steam 커뮤니티',
    description: '스팀 가이드, 워크샵, 리뷰 및 토론',
    memberCount: '6,745',
    icon: <Heart className="w-6 h-6" />,
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    url: 'https://steamcommunity.com/app/ifsunsetsofficial',
    isActive: true,
  },
]

const communityRules = [
  { id: 0, text: '서로를 존중하고 예의를 지켜주세요' },
  { id: 1, text: '스포일러는 적절한 태그와 함께 공유해주세요' },
  { id: 2, text: '게임 관련 질문과 토론을 환영합니다' },
  { id: 3, text: '버그 신고는 공식 채널을 이용해주세요' },
  { id: 4, text: '광고나 스팸은 금지됩니다' },
]

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 hero-text">커뮤니티</h2>
          <p className="text-muted-foreground text-lg">IfSunSets 플레이어들과 함께하는 커뮤니티에 참여하세요</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Platforms */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {communityData.map(platform => (
                <Card
                  key={platform.id}
                  className="card-gaming border-border/50 group hover:scale-105 transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${platform.color}`}>{platform.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{platform.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                              {platform.memberCount} 멤버
                            </Badge>
                            {platform.isActive && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">활성</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 leading-relaxed">{platform.description}</CardDescription>

                    <Button className="w-full btn-gaming" onClick={() => window.open(platform.url, '_blank')}>
                      참여하기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Community Stats */}
            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  커뮤니티 현황
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">43,436</div>
                    <div className="text-sm text-muted-foreground">총 멤버</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">2,847</div>
                    <div className="text-sm text-muted-foreground">오늘 활성</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">156</div>
                    <div className="text-sm text-muted-foreground">새 게시물</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">89%</div>
                    <div className="text-sm text-muted-foreground">만족도</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Community Guidelines */}
          <div className="space-y-6">
            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  커뮤니티 가이드라인
                </CardTitle>
                <CardDescription>모두가 즐거운 커뮤니티를 위한 규칙</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {communityRules.map(rule => (
                  <div key={rule.id} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium mt-0.5">
                      {rule.id + 1}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rule.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle>빠른 링크</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-left">
                  FAQ 자주 묻는 질문
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  버그 신고하기
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  기능 제안하기
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  개발자와 대화
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  이벤트 및 공지
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
