import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, Lightbulb } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: Users,
      title: "학부모 A님의 경우",
      scenario: "아이와 함께 주말에 AI 체험 수업을 신청",
      description: "7세 아이를 위한 놀이형 AI 교육으로 창의력과 논리적 사고력을 기르고 싶어하는 학부모",
      color: "accent",
    },
    {
      icon: Briefcase,
      title: "직장인 B님의 경우",
      scenario: "회사 프로젝트 준비 중, 특허 분석 리포트 활용",
      description: "AI 관련 사업 기획을 담당하며 최신 기술 동향과 특허 정보가 필요한 직장인",
      color: "primary",
    },
    {
      icon: Lightbulb,
      title: "예비 창업자 C님의 경우",
      scenario: "AI 창업을 준비하며 매주 발행되는 콘텐츠로 인사이트 확보",
      description: "AI 스타트업 창업을 준비하며 시장 동향과 투자 정보를 지속적으로 모니터링하는 예비 창업자",
      color: "secondary",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">사용 시나리오 예시</h2>
          <p className="text-lg text-muted-foreground text-balance">다양한 사용자들이 AIxALL Insight를 활용하는 방법</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            const colorClass =
              useCase.color === "accent"
                ? "text-accent bg-accent/10"
                : useCase.color === "primary"
                  ? "text-primary bg-primary/10"
                  : "text-secondary bg-secondary/10"

            return (
              <Card key={index} className="border-border hover:border-accent/40 transition-colors h-full">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClass}`}>
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>

                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-foreground">"{useCase.scenario}"</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
