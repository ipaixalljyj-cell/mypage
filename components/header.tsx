"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist")
    window.dispatchEvent(event)
  }

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-accent">AIxALL Insight</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#experience" className="text-foreground hover:text-accent transition-colors">
              체험 수업
            </a>
            <a href="#analysis" className="text-foreground hover:text-accent transition-colors">
              분석 리포트
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
              구독 플랜
            </a>
            <Button onClick={openWaitlist} className="bg-primary hover:bg-primary/90">
              웨이팅 리스트 등록
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#experience" className="text-foreground hover:text-accent transition-colors">
                체험 수업
              </a>
              <a href="#analysis" className="text-foreground hover:text-accent transition-colors">
                분석 리포트
              </a>
              <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
                구독 플랜
              </a>
              <Button onClick={openWaitlist} className="bg-primary hover:bg-primary/90 w-full">
                웨이팅 리스트 등록
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
