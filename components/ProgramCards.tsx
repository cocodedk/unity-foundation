import { getTranslations } from "next-intl/server";
import { Heart, Accessibility, HandHeart } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Container } from "./ui/Container";

const programs = [
  {
    key: "children",
    icon: Heart,
    color: "text-rose-500"
  },
  {
    key: "disability",
    icon: Accessibility,
    color: "text-blue-500"
  },
  {
    key: "poverty",
    icon: HandHeart,
    color: "text-emerald-500"
  }
];

export async function ProgramCards() {
  const t = await getTranslations();

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {t("programs.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.key}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${program.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`programs.${program.key}`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`programs.desc.${program.key}`)}
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
