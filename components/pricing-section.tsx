"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown } from "lucide-react"

export function PricingSection() {
  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist")
    window.dispatchEvent(event)
  }

  const plans = [
    {
      name: "무료 체험",
      price: "₩0",
      period: "1개월",
      description: "일부 콘텐츠 미리보기",
      icon: Star,
      features: ["주간 AI 뉴스 요약", "기본 산업 동향 리포트", "체험 수업 1회 무료", "커뮤니티 액세스"],
      buttonText: "무료 체험 시작",
      popular: false,
    },
    {
      name: "월 구독제",
      price: "₩9,900",
      period: "월",
      description: "정기 콘텐츠 & 분석 자료",
      icon: Check,
      features: [
        "모든 AI 산업 리포트",
        "특허 분석 월간 리포트",
        "체험 수업 20% 할인",
        "전문가 Q&A 세션",
        "개인 맞춤 인사이트",
      ],
      buttonText: "월 구독 대기 등록",
      popular: true,
    },
    {
      name: "프리미엄 연간",
      price: "₩99,000",
      period: "년",
      description: "수업 할인 + 독점 리포트",
      icon: Crown,
      features: [
        "모든 월 구독 혜택",
        "체험 수업 50% 할인",
        "독점 심화 분석 리포트",
        "1:1 컨설팅 세션 (분기별)",
        "우선 예약 및 신규 서비스 베타 액세스",
      ],
      buttonText: "프리미엄 구독 대기",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">구독 콘텐츠 & 가격 안내</h2>
          <p className="text-lg text-muted-foreground text-balance">
            다양한 구독 플랜으로 AI 교육과 인사이트를 만나보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card
                key={index}
                className={`relative flex h-full flex-col ${
                  plan.popular ? "border-primary shadow-lg scale-105" : "border-border hover:border-accent/40"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      인기
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      plan.popular ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <IconComponent className={plan.popular ? "text-primary" : "text-accent"} size={24} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0 flex flex-1 flex-col">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openWaitlist}
                    className={`w-full mt-auto ${
                      plan.popular ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
