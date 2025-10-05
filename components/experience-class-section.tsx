"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Brain, Gamepad2, Star } from "lucide-react"

export function ExperienceClassSection() {
  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist")
    window.dispatchEvent(event)
  }

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">아이들이 즐겁게 배우는 AI 체험 수업</h2>
          <p className="text-lg text-muted-foreground text-balance">유아~초등 저학년 맞춤형 놀이형 AI 교육 프로그램</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-accent/20 hover:border-accent/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">소그룹 수업</h3>
              <p className="text-muted-foreground">4-6명의 소그룹으로 진행되는 맞춤형 AI 체험 수업</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">연령별 맞춤</h3>
              <p className="text-muted-foreground">유아부터 초등 저학년까지 발달 단계에 맞는 커리큘럼</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">놀이형 학습</h3>
              <p className="text-muted-foreground">게임과 놀이를 통해 자연스럽게 AI 개념을 익히는 수업</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-primary" size={20} />
                <span className="text-primary font-medium">체험 수업 특징</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">아이들의 눈높이에 맞춘 AI 교육</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  로봇과 태블릿을 활용한 실습 중심 수업
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  창의적 사고력과 문제해결 능력 향상
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  미래 디지털 리터러시 기초 다지기
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/children-learning-ai-with-robots-and-tablets-in-cl.jpg"
                alt="아이들이 로봇과 태블릿으로 AI를 배우는 모습"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button onClick={openWaitlist} size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
            신청 알림받기
          </Button>
        </div>
      </div>
    </section>
  )
}
