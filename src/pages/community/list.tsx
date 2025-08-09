import { Link, useNavigate } from '@tanstack/react-router'
import { Calendar, Eye, Heart, MessageSquare, Pin, PlusCircle, Search } from 'lucide-react'
import { useState } from 'react'
import { Footer } from '~/components/footer'
import { Navigation } from '~/components/navigation'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'

interface CommunityPost {
  id: string
  title: string
  description: string
  date: string
  category: '자유' | '질문' | '팁' | '공략' | '버그신고'
  views: number
  comments: number
  likes: number
  isPinned?: boolean
  isHot?: boolean
  author: string
  authorLevel: number
}

const communityData: CommunityPost[] = [
  {
    id: 'c1',
    title: '신규 유저입니다! 초보자 가이드 좀 알려주세요',
    description: '방금 게임을 시작했는데 뭐부터 해야할지 모르겠어요ㅠㅠ',
    date: '2025.07.19',
    category: '질문',
    views: 156,
    comments: 8,
    likes: 12,
    author: '게임초보자',
    authorLevel: 1,
  },
  {
    id: 'c2',
    title: '[공략] 레벨업 효율적으로 하는 방법 (업데이트됨)',
    description: '최신 패치 반영된 레벨업 공략입니다',
    date: '2025.07.19',
    category: '공략',
    views: 2341,
    comments: 45,
    likes: 89,
    isHot: true,
    author: '공략마스터',
    authorLevel: 45,
  },
  {
    id: 'c3',
    title: '오늘 업데이트 후 로그인이 안되는 분 계신가요?',
    description: '패치 후부터 계속 연결 오류가 뜨네요',
    date: '2025.07.19',
    category: '버그신고',
    views: 891,
    comments: 23,
    likes: 15,
    author: '유저123',
    authorLevel: 28,
  },
  {
    id: 'c4',
    title: '[팁] 은밀하게 자원 모으는 꿀팁 공유',
    description: '알아두면 유용한 자원 채집 꿀팁들',
    date: '2025.07.18',
    category: '팁',
    views: 1567,
    comments: 34,
    likes: 67,
    isPinned: true,
    author: '프로게이머',
    authorLevel: 52,
  },
  {
    id: 'c5',
    title: '같이 플레이할 친구들 구해요!',
    description: '파티 플레이 하실 분들 디스코드 오픈카톡 주세요',
    date: '2025.07.18',
    category: '자유',
    views: 445,
    comments: 19,
    likes: 8,
    author: '친구찾기',
    authorLevel: 33,
  },
  {
    id: 'c6',
    title: '이번 이벤트 어떻게 생각하시나요?',
    description: '개인적으로는 보상이 아쉬운 것 같은데...',
    date: '2025.07.17',
    category: '자유',
    views: 789,
    comments: 42,
    likes: 23,
    author: '게임평론가',
    authorLevel: 41,
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
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

export const CommunityBoard: React.FC = () => {
  const [sortBy, setSortBy] = useState('latest')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const sortPosts = (posts: CommunityPost[]) => {
    const filtered = posts.filter(
      post =>
        (categoryFilter === 'all' || post.category === categoryFilter) &&
        (searchTerm === '' ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )

    return filtered.sort((a, b) => {
      if (sortBy === 'popular') {
        const aPopularity = a.likes + Math.floor(a.views / 10)
        const bPopularity = b.likes + Math.floor(b.views / 10)
        return bPopularity - aPopularity
      }

      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
  }

  const sortedPosts = sortPosts(communityData)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 hero-text">커뮤니티</h1>
              <p className="text-muted-foreground text-lg">유저들과 소통하고 정보를 공유하세요</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="제목, 내용을 검색하세요..."
                  className="pl-10 bg-card border-border/50"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full lg:w-48 bg-card border-border/50">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="자유">자유</SelectItem>
                  <SelectItem value="질문">질문</SelectItem>
                  <SelectItem value="팁">팁</SelectItem>
                  <SelectItem value="공략">공략</SelectItem>
                  <SelectItem value="버그신고">버그신고</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-32 bg-card border-border/50">
                  <SelectValue placeholder="정렬" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">최신순</SelectItem>
                  <SelectItem value="oldest">오래된순</SelectItem>
                  <SelectItem value="popular">인기순</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={() => navigate({ to: '/community/create' })}
                className="w-full lg:w-auto bg-primary hover:bg-primary/90"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                글쓰기
              </Button>
            </div>

            <Card className="card-gaming border-border/50">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">커뮤니티 게시판</CardTitle>
                    <CardDescription>총 {sortedPosts.length}개의 게시물</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {sortedPosts.map(post => (
                    <Link
                      key={post.id}
                      to={'/community/$id'}
                      params={{ id: post.id }}
                      className="block p-6 hover:bg-muted/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            {post.isPinned && <Pin className="w-4 h-4 text-primary" />}
                            <Badge variant="outline" className={getCategoryColor(post.category)}>
                              {post.category}
                            </Badge>
                            {post.isHot && (
                              <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">
                                HOT
                              </Badge>
                            )}
                          </div>

                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground mb-3 text-sm">{post.description}</p>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                        </div>

                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span>{post.author}</span>
                            <Badge variant="secondary" className="text-xs">
                              Lv.{post.authorLevel}
                            </Badge>
                          </div>
                          <div className="mt-1">{post.date}</div>
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
