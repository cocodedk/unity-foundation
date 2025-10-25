import { getTranslations } from "next-intl/server";
import { Heart, Stethoscope, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Container } from "./ui/Container";

const teasers = [
  { key: "food", icon: Heart, color: "text-growth" },
  { key: "health", icon: Stethoscope, color: "text-growth" },
  { key: "education", icon: GraduationCap, color: "text-growth" }
];

export async function HomeTeasers() {
  const t = await getTranslations();

  return (
    <section className="py-16 md:py-24 bg-fluff">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-growth mb-12">
          {t("homeTeasers.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teasers.map((teaser) => {
            const Icon = teaser.icon;
            return (
              <Card key={teaser.key} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-seedwhite">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-growth/10 flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${teaser.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-growth mb-3">
                    {t(`homeTeasers.${teaser.key}.title`)}
                  </h3>
                  <p className="text-wind leading-relaxed">
                    {t(`homeTeasers.${teaser.key}.blurb`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
