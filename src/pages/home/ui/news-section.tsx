import { cva } from 'class-variance-authority'
import { Calendar, Eye, MessageSquare } from 'lucide-react'
import type React from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { useNews } from '~/pages/news/lib'

const categoryVariants = cva('bg-muted/20 text-muted-foreground border-muted/30', {
  variants: {
    category: {
      공지: 'bg-destructive/20 text-destructive border-destructive/30',
      업데이트: 'bg-accent/20 text-accent border-accent/30',
      이벤트: 'bg-primary/20 text-primary border-primary/30',
    },
  },
})

export const NewsSection: React.FC = () => {
  const { news } = useNews()

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
              {news.map(news => (
                <a
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="block p-6 hover:bg-muted/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant="outline"
                          className={categoryVariants({ category: news.headLine as '공지' | '업데이트' | '이벤트' })}
                        >
                          {news.headLine}
                        </Badge>
                        {news.isHot && (
                          <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">HOT</Badge>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm">{news.subtitle}</p>

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
                      <div>{news.author}</div>
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
