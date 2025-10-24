"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminAnnouncementsPage() {
  const [mobilePay, setMobilePay] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [bannerTextEn, setBannerTextEn] = useState("");
  const [bannerTextDa, setBannerTextDa] = useState("");
  const [bannerTextFa, setBannerTextFa] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const fetchAnnouncement = async () => {
    try {
      const response = await fetch("/api/announcement");
      const data = await response.json();

      if (data) {
        setMobilePay(data.mobilePay || "");
        setEnabled(data.enabled || false);

        const enText = data.i18n?.find((i: any) => i.locale === "en");
        const daText = data.i18n?.find((i: any) => i.locale === "da");
        const faText = data.i18n?.find((i: any) => i.locale === "fa");

        setBannerTextEn(enText?.bannerText || "");
        setBannerTextDa(daText?.bannerText || "");
        setBannerTextFa(faText?.bannerText || "");
      }
    } catch (error) {
      console.error("Failed to fetch announcement:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await fetch("/api/announcement", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobilePay,
          enabled,
          i18n: [
            { locale: "en", bannerText: bannerTextEn },
            { locale: "da", bannerText: bannerTextDa },
            { locale: "fa", bannerText: bannerTextFa }
          ]
        })
      });

      alert("Announcement saved successfully!");
    } catch (error) {
      console.error("Failed to save announcement:", error);
      alert("Failed to save announcement");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Donation Banner & MobilePay
      </h1>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Announcement Settings</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="enabled"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
                className="w-5 h-5 text-brand focus:ring-brand border-gray-300 rounded"
              />
              <label htmlFor="enabled" className="font-medium text-gray-700">
                Enable Banner
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MobilePay Box Number
              </label>
              <input
                type="text"
                value={mobilePay}
                onChange={(e) => setMobilePay(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="12345678"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Text (English)
              </label>
              <input
                type="text"
                value={bannerTextEn}
                onChange={(e) => setBannerTextEn(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Donate via MobilePay:"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Text (Danish)
              </label>
              <input
                type="text"
                value={bannerTextDa}
                onChange={(e) => setBannerTextDa(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Donér via MobilePay:"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Text (Persian)
              </label>
              <input
                type="text"
                value={bannerTextFa}
                onChange={(e) => setBannerTextFa(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="حمایت از طریق MobilePay:"
                dir="rtl"
              />
            </div>

            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
