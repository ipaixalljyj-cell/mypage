"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, CheckCircle } from "lucide-react"

export function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  useEffect(() => {
    const handleOpenWaitlist = () => {
      setIsOpen(true)
      setIsSubmitted(false)
    }

    window.addEventListener("openWaitlist", handleOpenWaitlist)
    return () => window.removeEventListener("openWaitlist", handleOpenWaitlist)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('폼 제출 시작:', formData)
    setIsSubmitting(true)

    try {
      console.log('API 호출 중...')
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('응답 받음:', response.status)
      
      const data = await response.json();
      console.log('응답 데이터:', data)

      if (data.success) {
        console.log('성공!')
        setIsSubmitted(true);
        
        // 성공한 경우에만 3초 후 모달 닫기
        setTimeout(() => {
          setIsOpen(false)
          setIsSubmitted(false)
          setFormData({ name: "", email: "" })
        }, 3000)
        
      } else {
        console.error('등록 실패:', data.message);
        alert('등록에 실패했습니다: ' + data.message);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      alert('네트워크 오류가 발생했습니다: ' + error.message);
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsSubmitted(false)
    setFormData({ name: "", email: "" })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <button onClick={handleClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <>
              <CardTitle className="text-xl text-center">웨이팅 리스트 등록</CardTitle>
              <p className="text-muted-foreground text-center text-sm">출시되면 가장 먼저 알려드릴게요!</p>
            </>
          ) : (
            <div className="text-center">
              <CheckCircle className="text-primary mx-auto mb-4" size={48} />
              <CardTitle className="text-xl text-primary">등록 완료!</CardTitle>
            </div>
          )}
        </CardHeader>

        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">이름 *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="이름을 입력해주세요"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="email">이메일 *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="이메일을 입력해주세요"
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? '등록 중...' : '등록하기'}
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                웨이팅 리스트 등록이 완료되었습니다!
                <br />
                출시되면 가장 먼저 알려드릴게요.
              </p>
              <Button onClick={handleClose} variant="outline" className="w-full bg-transparent">
                닫기
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}