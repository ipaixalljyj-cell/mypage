"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, FileText, BarChart3 } from "lucide-react"

export function AnalysisReportSection() {
  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist")
    window.dispatchEvent(event)
  }

  return (
    <section id="analysis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">쉽게 풀어보는 AI 산업 인사이트</h2>
          <p className="text-lg text-muted-foreground text-balance">
            최신 AI 기업 동향, 특허 분석을 간단히 이해할 수 있는 리포트 제공
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-20 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <CardTitle className="text-lg">AI 기업 동향</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">글로벌 AI 기업들의 최신 동향과 투자 현황을 한눈에</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-20 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <FileText className="text-secondary" size={32} />
              </div>
              <CardTitle className="text-lg">특허 분석</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">AI 관련 특허 출원 동향과 기술 발전 방향 분석</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-20 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="text-accent" size={32} />
              </div>
              <CardTitle className="text-lg">시장 인사이트</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">AI 시장 규모와 성장 전망, 투자 기회 분석</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="/ai-industry-analysis-report-dashboard-with-charts-.jpg"
                alt="AI 산업 분석 리포트 대시보드"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">복잡한 AI 산업, 쉽게 이해하세요</h3>
              <p className="text-muted-foreground mb-6">
                전문적인 AI 산업 분석을 누구나 이해할 수 있도록 인포그래픽과 간단한 설명으로 제공합니다.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  주간 AI 산업 동향 리포트
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  월간 특허 분석 및 기술 트렌드
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  분기별 시장 전망 및 투자 인사이트
                </li>
              </ul>
              <Button onClick={openWaitlist} className="bg-primary hover:bg-primary/90">
                구독 대기 등록
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
