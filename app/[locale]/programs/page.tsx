import { getTranslations, setRequestLocale } from "next-intl/server";
import { Heart, Accessibility, HandHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

const programs = [
  { key: "children", icon: Heart, color: "text-rose-500" },
  { key: "disability", icon: Accessibility, color: "text-blue-500" },
  { key: "poverty", icon: HandHeart, color: "text-emerald-500" }
];

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          {t("programs.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card key={program.key} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
                      <Icon className={`w-10 h-10 ${program.color}`} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t(`programs.${program.key}`)}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    {t(`programs.desc.${program.key}`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
