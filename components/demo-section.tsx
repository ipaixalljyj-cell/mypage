import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, FileText, BarChart3, AlertCircle } from "lucide-react"

export function DemoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">AIxALL Insight 미리보기</h2>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 justify-center text-muted-foreground">
              <AlertCircle size={20} />
              <span className="text-sm">실제 데모는 출시 후 제공됩니다. 지금은 예시 UI만 확인하실 수 있어요.</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-dashed border-2 border-muted-foreground/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="text-muted-foreground" size={32} />
              </div>
              <CardTitle className="text-lg text-muted-foreground">체험 수업 영상</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-muted/50 rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-sm">영상 썸네일</span>
              </div>
              <p className="text-muted-foreground text-sm">아이들의 AI 체험 수업 현장</p>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-muted-foreground/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="text-muted-foreground" size={32} />
              </div>
              <CardTitle className="text-lg text-muted-foreground">분석 리포트</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-muted/50 rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-sm">리포트 미리보기</span>
              </div>
              <p className="text-muted-foreground text-sm">AI 산업 동향 분석 자료</p>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-muted-foreground/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-muted-foreground" size={32} />
              </div>
              <CardTitle className="text-lg text-muted-foreground">대시보드</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-muted/50 rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-sm">차트 및 그래프</span>
              </div>
              <p className="text-muted-foreground text-sm">개인 맞춤 인사이트 대시보드</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
