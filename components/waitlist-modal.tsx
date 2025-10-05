"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const handleOpenWaitlist = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };

    window.addEventListener("openWaitlist", handleOpenWaitlist);
    return () => window.removeEventListener("openWaitlist", handleOpenWaitlist);
  }, []);

  const validate = (data: FormData) => {
    if (!data.name.trim()) return "이름을 입력해주세요.";
    if (!data.email.trim()) return "이메일을 입력해주세요.";
    if (!data.phone.trim()) return "전화번호를 입력해주세요.";
    // 아주 간단한 이메일 패턴 체크 (필요시 강화 가능)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!emailOk) return "올바른 이메일 형식을 입력해주세요.";
    // 전화번호 패턴 체크 (한국 전화번호 형식)
    const phoneOk = /^[0-9-+\s()]{10,}$/.test(data.phone.replace(/\s/g, ''));
    if (!phoneOk) return "올바른 전화번호 형식을 입력해주세요.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 중복 제출 방지
    if (isSubmitting) return;

    const msg = validate(formData);
    if (msg) {
      alert(msg);
      return;
    }

    console.log("폼 제출 시작:", formData);
    setIsSubmitting(true);

    try {
      console.log("API 호출 중...");

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("응답 받음:", response.status);

      // 응답이 JSON이 아닐 수도 있으므로 방어적으로 처리
      let data: any = null;
      try {
        data = await response.json();
      } catch {
        // JSON 파싱 실패 시 메시지 보완
        if (!response.ok) {
          throw new Error(`서버 오류(${response.status})`);
        }
      }

      console.log("응답 데이터:", data);

      if (response.ok && data?.success) {
        console.log("성공!");
        setIsSubmitted(true);

        // 성공한 경우에만 3초 후 모달 닫기
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "" });
        }, 3000);
      } else {
        const serverMsg =
          (data && (data.message || data.error)) ||
          `서버 응답 오류 (${response.status})`;
        console.error("등록 실패:", serverMsg);
        alert("등록에 실패했습니다: " + serverMsg);
      }
    } catch (error) {
      console.error("네트워크 오류:", error);
      if (error instanceof Error) {
        alert("네트워크 오류가 발생했습니다: " + error.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return; // 전송 중에는 닫기 방지(선택)
    setIsOpen(false);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            aria-label="닫기"
            disabled={isSubmitting}
          >
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <>
              <CardTitle className="text-xl text-center">
                웨이팅 리스트 등록
              </CardTitle>
              <p className="text-muted-foreground text-center text-sm">
                출시되면 가장 먼저 알려드릴게요!
              </p>
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
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
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
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="이메일을 입력해주세요"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="phone">전화번호 *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="전화번호를 입력해주세요"
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "등록 중..." : "등록하기"}
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                웨이팅 리스트 등록이 완료되었습니다!
                <br />
                출시되면 가장 먼저 알려드릴게요.
              </p>
              <Button
                onClick={handleClose}
                variant="outline"
                className="w-full bg-transparent"
              >
                닫기
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
