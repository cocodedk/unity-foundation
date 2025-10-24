import { getTranslations, setRequestLocale } from "next-intl/server";
import { Heart, Accessibility, HandHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

const programs = [
  { key: "children", icon: Heart, color: "text-primary" },
  { key: "disability", icon: Accessibility, color: "text-primary" },
  { key: "poverty", icon: HandHeart, color: "text-primary" }
];

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div>
      <section className="py-16 md:py-24 bg-background-light">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-12 text-center">
            {t("programs.title")}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.key} className="text-center bg-background-light hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className={`w-10 h-10 ${program.color}`} />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary">
                      {t(`programs.${program.key}`)}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-primary text-lg">
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
