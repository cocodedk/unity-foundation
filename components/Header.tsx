import { prisma } from "@/lib/prisma";
import { HeaderClient } from "./HeaderClient";

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export async function Header() {
  // Get current month in English (always Latin characters)
  const currentMonth = MONTH_NAMES[new Date().getMonth()];

  // Fetch MobilePay number from database
  let mobilePayNumber: string | undefined;

  // Guard against missing DATABASE_URL during build
  if (process.env.DATABASE_URL) {
    try {
      const announcement = await prisma.announcement.findUnique({
        where: { id: 1 }
      }).catch(() => null);

      if (announcement && announcement.enabled) {
        mobilePayNumber = announcement.mobilePay;
      }
    } catch (error) {
      console.error("Failed to load MobilePay number in header:", error);
    }
  }

  return (
    <HeaderClient 
      mobilePayNumber={mobilePayNumber}
      currentMonth={currentMonth}
    />
  );
}
