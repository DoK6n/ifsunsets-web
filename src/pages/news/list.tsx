import { Link } from '@tanstack/react-router'
import { Calendar, Eye, MessageSquare, Search } from 'lucide-react'
import { Footer } from '~/components/footer'
import { Navigation } from '~/components/navigation'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { useNews } from './lib'

export const NewsBoard: React.FC = () => {
  const { news } = useNews()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 hero-text">공지사항</h1>
              <p className="text-muted-foreground text-lg">최신 소식과 업데이트를 확인하세요</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input placeholder="제목, 내용을 검색하세요..." className="pl-10 bg-card border-border/50" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full lg:w-48 bg-card border-border/50">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="공지">공지</SelectItem>
                  <SelectItem value="업데이트">업데이트</SelectItem>
                  <SelectItem value="이벤트">이벤트</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="card-gaming border-border/50">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">공지사항</CardTitle>
                    <CardDescription>총 {news.length}개의 게시물</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {news.map(item => (
                    <Link
                      key={item.id}
                      to={'/news/$id'}
                      params={{ id: item.id }}
                      className="block p-6 hover:bg-muted/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge
                              variant="outline"
                              className="bg-destructive/20 text-destructive border-destructive/30"
                            >
                              {item.headLine}
                            </Badge>
                            {item.isHot && (
                              <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">
                                HOT
                              </Badge>
                            )}
                          </div>

                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {item.views.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {item.comments}
                            </div>
                          </div>
                        </div>

                        <div className="text-right text-sm text-muted-foreground">
                          <div>{item.author}</div>
                          <div className="mt-1">{item.date}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
