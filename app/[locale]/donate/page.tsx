"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Copy, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function DonatePage() {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);

  // This would normally come from the API/database
  const mobilePayNumber = "12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mobilePayNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          {t("donate.title")}
        </h1>

        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="border-2 border-brand">
            <CardHeader>
              <h2 className="text-2xl font-bold text-center text-brand">
                {t("donate.mobilePay")}
              </h2>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-beige rounded-xl p-6 mb-6">
                <div className="text-4xl font-bold text-brand mb-4">
                  {mobilePayNumber}
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={copyToClipboard}
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      {t("donate.copied")}
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      {t("donate.copy")}
                    </>
                  )}
                </Button>
              </div>

              {/* QR Code placeholder */}
              <div className="w-48 h-48 mx-auto bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">{t("ui.qr")}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {t("donate.impactBlurb")}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
