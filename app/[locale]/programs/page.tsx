import { getTranslations, setRequestLocale } from "next-intl/server";
import { Heart, Accessibility, HandHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

const programs = [
  { key: "children", icon: Heart, color: "text-growth" },
  { key: "disability", icon: Accessibility, color: "text-growth" },
  { key: "poverty", icon: HandHeart, color: "text-growth" }
];

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div>
      <section className="py-16 md:py-24 bg-seedwhite">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-growth mb-12 text-center">
            {t("programs.title")}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.key} className="text-center bg-seedwhite hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-growth/10 flex items-center justify-center">
                        <Icon className={`w-10 h-10 ${program.color}`} />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-growth">
                      {t(`programs.${program.key}`)}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-wind text-lg">
                      {t(`programs.desc.${program.key}`)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
