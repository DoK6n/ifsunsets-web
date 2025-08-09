import { Download, Globe, Star, Users } from 'lucide-react'
import type React from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

export const GameInfoSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Info Card */}
          <Card className="lg:col-span-2 card-gaming border-border/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">게임 정보</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">오픈월드</Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30">생존게임</Badge>
                    <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/30">어드벤처</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">4.5</span>
                  </div>
                  <div className="text-sm text-muted-foreground">평가</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-primary">게임 소개</h3>
                <p className="text-muted-foreground leading-relaxed">
                  IfSunSets은 생존과 어드벤처가 결합된 오픈월드 게임입니다. 해가 지면서 시작되는 위험한 세계에서 자원을
                  수집하고, 기지를 건설하며, 다양한 위협으로부터 생존해야 합니다. 광활한 오픈월드를 탐험하며 숨겨진
                  비밀들을 발견하고 당신만의 생존 이야기를 만들어보세요.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">장르</span>
                    <span>오픈월드 생존게임</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">개발사</span>
                    <span>POLYMORPH Inc.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">배급사</span>
                    <span>POLYMORPH Inc.</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">출시일</span>
                    <span>2024년 12월</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">플랫폼</span>
                    <span>PC (Steam)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">언어</span>
                    <span>한국어, 영어</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-3">
                  <Button className="btn-gaming">
                    <Download className="w-4 h-4 mr-2" />
                    스토브에서 다운로드
                  </Button>
                  <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                    <Globe className="w-4 h-4 mr-2" />
                    Steam 페이지
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats & Community */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  커뮤니티
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12,450</div>
                  <div className="text-sm text-muted-foreground">활성 플레이어</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">오늘 접속</span>
                    <span className="font-medium">1,234명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">총 플레이어</span>
                    <span className="font-medium">45,678명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">서버 상태</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">정상</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle>빠른 링크</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-left">
                  게임 가이드
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  업데이트 로그
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  버그 신고
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  건의사항
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  Discord 커뮤니티
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
