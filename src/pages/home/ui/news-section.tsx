import { Calendar, Eye, MessageSquare } from 'lucide-react'
import type React from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

interface NewsItem {
  id: string
  title: string
  description: string
  date: string
  category: '공지' | '업데이트' | '이벤트'
  views: number
  comments: number
  isHot?: boolean
}

const newsData: NewsItem[] = [
  {
    id: '1',
    title: '2025.07.19 긴급 패치 사항',
    description: '게임 안정성 개선 및 버그 수정',
    date: '2025.07.19',
    category: '공지',
    views: 1234,
    comments: 12,
    isHot: true,
  },
  {
    id: '2',
    title: '★2025.07.17★ 핫픽스 노트',
    description: '성능 최적화 및 밸런스 조정',
    date: '2025.07.17',
    category: '업데이트',
    views: 2156,
    comments: 33,
    isHot: true,
  },
  {
    id: '3',
    title: '2025.07.14 업데이트 문의',
    description: '새로운 지역 추가 및 아이템 밸런스 조정',
    date: '2025.07.14',
    category: '공지',
    views: 1890,
    comments: 50,
  },
  {
    id: '4',
    title: "2025.07.12 '여름' 업데이트 'X'",
    description: '여름 시즌 특별 콘텐츠 및 이벤트',
    date: '2025.07.12',
    category: '이벤트',
    views: 3421,
    comments: 95,
  },
  {
    id: '5',
    title: '개발진 편지',
    description: '앞으로의 개발 방향성과 유저 피드백 반영 계획',
    date: '2025.06.18',
    category: '공지',
    views: 5643,
    comments: 253,
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case '공지':
      return 'bg-destructive/20 text-destructive border-destructive/30'
    case '업데이트':
      return 'bg-accent/20 text-accent border-accent/30'
    case '이벤트':
      return 'bg-primary/20 text-primary border-primary/30'
    default:
      return 'bg-muted/20 text-muted-foreground border-muted/30'
  }
}

export const NewsSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 hero-text">게시판</h2>
          <p className="text-muted-foreground text-lg">최신 소식과 업데이트를 확인하세요</p>
        </div>

        <Card className="card-gaming border-border/50">
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">공지사항</CardTitle>
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10" asChild>
                <a href="/news">전체보기</a>
              </Button>
            </div>
            <CardDescription>중요한 공지사항과 업데이트 정보를 확인하세요</CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {newsData.map(news => (
                <a
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="block p-6 hover:bg-muted/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className={getCategoryColor(news.category)}>
                          {news.category}
                        </Badge>
                        {news.isHot && (
                          <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">HOT</Badge>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm">{news.description}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {news.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {news.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {news.comments}
                        </div>
                      </div>
                    </div>

                    <div className="text-right text-sm text-muted-foreground">
                      <div>GM IfSunSets</div>
                      <div className="mt-1">{news.date}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
