"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist")
    window.dispatchEvent(event)
  }

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-accent">AIxALL Insight</span>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md">교육과 산업을 연결하는 AI 인사이트 플랫폼</p>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-4">AI의 미래를 함께 만들어가요</h3>
            <p className="text-muted-foreground mb-6">출시 소식을 가장 먼저 받아보세요</p>
            <Button onClick={openWaitlist} size="lg" className="bg-primary hover:bg-primary/90 px-8">
              웨이팅 리스트 등록하기
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 AIxALL Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
