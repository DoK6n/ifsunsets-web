import { Link } from '@tanstack/react-router'
import { ArrowLeft, Bookmark, Calendar, Eye, Heart, MessageSquare, MoreHorizontal, Share2 } from 'lucide-react'
import { Footer } from '~/components/footer'
import { Navigation } from '~/components/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import { Textarea } from '~/components/ui/textarea'
import { getComments, getPostData } from '../api'

const getCategoryColor = (category: string) => {
  switch (category) {
    case '공지':
      return 'bg-destructive/20 text-destructive border-destructive/30'
    case '업데이트':
      return 'bg-accent/20 text-accent border-accent/30'
    case '이벤트':
      return 'bg-primary/20 text-primary border-primary/30'
    case '자유':
      return 'bg-primary/20 text-primary border-primary/30'
    case '질문':
      return 'bg-accent/20 text-accent border-accent/30'
    case '팁':
      return 'bg-secondary/20 text-secondary-foreground border-secondary/30'
    case '공략':
      return 'bg-destructive/20 text-destructive border-destructive/30'
    case '버그신고':
      return 'bg-orange-500/20 text-orange-600 border-orange-500/30'
    default:
      return 'bg-muted/20 text-muted-foreground border-muted/30'
  }
}

export const PostDetail: React.FC<{ postId: string }> = ({ postId }) => {
  const post = postId ? getPostData(postId) : null
  const sampleComments = getComments()

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">게시물을 찾을 수 없습니다</h1>
              <Button asChild>
                <Link to="/news">게시판으로 돌아가기</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const isNews = ['공지', '업데이트', '이벤트'].includes(post.category)
  const backLink = isNews ? '/news' : '/community'

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" asChild className="mb-4">
                <Link to={backLink} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  목록으로
                </Link>
              </Button>
            </div>

            <Card className="card-gaming border-border/50 mb-6">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      {post.isHot && (
                        <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">HOT</Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-4">{post.title}</CardTitle>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="" />
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{post.author}</span>
                            {post.authorLevel && (
                              <Badge variant="secondary" className="text-xs">
                                Lv.{post.authorLevel}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {post.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="prose prose-lg max-w-none p-6">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">{post.content}</div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center gap-4 mb-8">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                좋아요 {post.likes}
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5 mr-2" />
                공유하기
              </Button>
            </div>

            <Card className="card-gaming border-border/50">
              <CardHeader className="border-b border-border/50">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  댓글 {sampleComments.length}개
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-6">
                  <Textarea placeholder="댓글을 입력하세요..." className="mb-3 bg-card border-border/50" rows={3} />
                  <div className="flex justify-end">
                    <Button>댓글 작성</Button>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-6">
                  {sampleComments.map(comment => (
                    <div key={comment.id} className="flex gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="" />
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">{comment.author}</span>
                          <Badge variant="secondary" className="text-xs">
                            Lv.{comment.authorLevel}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{comment.date}</span>
                        </div>

                        <p className="text-foreground mb-3">{comment.content}</p>

                        <div className="flex items-center gap-4 text-sm">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-muted-foreground hover:text-primary"
                          >
                            <Heart className="w-4 h-4 mr-1" />
                            {comment.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-muted-foreground hover:text-primary"
                          >
                            답글
                          </Button>
                        </div>
                      </div>
                    </div>
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
