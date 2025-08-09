import { Github, MessageCircle, Twitter, Youtube } from 'lucide-react'
import type React from 'react'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background/95 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold hero-text">IfSunSets</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              한국에서 개발된 오픈월드 생존게임
              <br />
              당신의 생존 이야기를 시작하세요
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Game */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">게임</h4>
            <nav className="space-y-2">
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                다운로드
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                시스템 요구사항
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                게임 가이드
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                업데이트
              </button>
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">커뮤니티</h4>
            <nav className="space-y-2">
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                공지사항
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                자유게시판
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Discord
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                스토브 커뮤니티
              </button>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">지원</h4>
            <nav className="space-y-2">
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                고객지원
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                버그 신고
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                건의사항
              </button>
              <button
                type="button"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                문의하기
              </button>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© 2024 POLYMORPH Inc. All rights reserved.</div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <button type="button" className="hover:text-primary transition-colors">
              개인정보처리방침
            </button>
            <button type="button" className="hover:text-primary transition-colors">
              이용약관
            </button>
            <button type="button" className="hover:text-primary transition-colors">
              게임 이용등급
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
