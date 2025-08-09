import { useNavigate } from '@tanstack/react-router'
import { ArrowLeft, Send } from 'lucide-react'
import { useState } from 'react'
import { Footer } from '~/components/footer'
import { Navigation } from '~/components/navigation'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'
import { useToast } from '~/hooks/use-toast'

export const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content || !category) {
      toast({
        title: '필수 정보를 입력해주세요',
        description: '제목, 내용, 카테고리는 필수 입력 항목입니다.',
        variant: 'destructive',
      })
      return
    }

    // 게시글 등록 로직 (실제로는 API 호출)
    toast({
      title: '게시글이 등록되었습니다',
      description: '커뮤니티 게시판으로 이동합니다.',
    })

    navigate({ to: '/community' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate({ to: '/community' })}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                목록으로
              </Button>
              <h1 className="text-3xl font-bold hero-text">글쓰기</h1>
            </div>

            <Card className="card-gaming border-border/50">
              <CardHeader>
                <CardTitle>새 게시글 작성</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="title" className="text-sm font-medium mb-2 block">
                        제목
                      </label>
                      <Input
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="게시글 제목을 입력하세요"
                        className="bg-card border-border/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="text-sm font-medium mb-2 block">
                        카테고리
                      </label>
                      <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger id="category" className="bg-card border-border/50">
                          <SelectValue placeholder="카테고리 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="자유">자유</SelectItem>
                          <SelectItem value="질문">질문</SelectItem>
                          <SelectItem value="팁">팁</SelectItem>
                          <SelectItem value="공략">공략</SelectItem>
                          <SelectItem value="버그신고">버그신고</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="content" className="text-sm font-medium mb-2 block">
                      내용
                    </label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={e => setContent(e.target.value)}
                      placeholder="게시글 내용을 입력하세요"
                      className="min-h-[400px] bg-card border-border/50 resize-none"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1 md:flex-initial">
                      <Send className="w-4 h-4 mr-2" />
                      게시글 등록
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate({ to: '/community' })}
                      className="border-border/50"
                    >
                      취소
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
