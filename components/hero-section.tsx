"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist")
    window.dispatchEvent(event)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-accent/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/30">
            <Sparkles size={16} />
            AI 교육의 새로운 시작
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
            <span className="text-accent">AI와 특허, </span>
            <span className="text-black">그리고</span>
            <br />
            <span className="text-primary">교육을 연결하는 플랫폼</span>
          </h1>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            인공지능 산업 동향과 특허 분석, 시장 인사이트까지 한 번에
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWaitlist}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              웨이팅 리스트 등록하기
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              서비스 소개 보기
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
    </section>
  )
}
