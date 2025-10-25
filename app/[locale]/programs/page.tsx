import { getTranslations, setRequestLocale } from "next-intl/server";
import { UtensilsCrossed, Stethoscope, GraduationCap, Scissors, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";

const programs = [
  { key: "food", icon: UtensilsCrossed, color: "text-growth" },
  { key: "medical", icon: Stethoscope, color: "text-growth" },
  { key: "children", icon: GraduationCap, color: "text-growth" },
  { key: "vocational", icon: Scissors, color: "text-growth" },
  { key: "empowerment", icon: Heart, color: "text-growth" }
];

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div>
      <section className="py-16 md:py-24 bg-seedwhite">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-growth mb-8 text-center">
            {t("programs.title")}
          </h1>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-wind text-center mb-6">
              {t("programs.intro")}
            </p>
            <p className="text-lg text-wind text-center">
              {t("programs.mission")}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-growth mb-12 text-center">
            {t("programs.whatWeDo")}
          </h2>

          <div className="max-w-5xl mx-auto space-y-8 mb-16">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.key} className="bg-fluff border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-growth/10 flex items-center justify-center">
                          <Icon className={`w-8 h-8 ${program.color}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-growth mb-4">
                          {t(`programs.${program.key}`)}
                        </h3>
                        <p className="text-wind text-lg leading-relaxed">
                          {t(`programs.desc.${program.key}`)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-fluff border-none shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-xl text-growth text-center font-semibold italic leading-relaxed">
                {t("programs.closing")}
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  );
}
