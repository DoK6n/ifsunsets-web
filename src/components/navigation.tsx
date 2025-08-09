import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type React from 'react'
import { Button } from '~/components/ui/button'

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { name: '홈', href: '/', isPage: true },
    { name: '게임 정보', href: '#info', isPage: false },
    { name: '공지사항', href: '/news', isPage: true },
    { name: '커뮤니티', href: '/community', isPage: true },
    { name: '공략 가이드', href: '/guide', isPage: true },
    { name: '유튜브', href: '#youtube', isPage: false },
    { name: '다운로드', href: '#download', isPage: false },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold hero-text">IfSunSets</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={isHomePage ? item.href : `/${item.href}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
              스토브
            </Button>
            <Button size="sm" className="btn-gaming">
              플레이하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50">
            <div className="py-4 space-y-2">
              {navItems.map(item =>
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={isHomePage ? item.href : `/${item.href}`}
                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ),
              )}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                  스토브
                </Button>
                <Button className="w-full btn-gaming">플레이하기</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
