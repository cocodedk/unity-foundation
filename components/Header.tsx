import { prisma } from "@/lib/prisma";
import { HeaderClient } from "./HeaderClient";

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export async function Header() {
  // Get current month in English (always Latin characters)
  const currentMonth = MONTH_NAMES[new Date().getMonth()];

  // TODO: Re-enable database fetch after Netlify Prisma issue is resolved
  // Temporarily using hardcoded value for deployment
  const mobilePayNumber = "12345678"; // TEMPORARY: Replace with DB fetch

  // Disabled due to Netlify deployment issues with Prisma binaries
  // // Guard against missing DATABASE_URL during build
  // if (process.env.DATABASE_URL) {
  //   try {
  //     const announcement = await prisma.announcement.findUnique({
  //       where: { id: 1 }
  //     }).catch(() => null);
  //
  //     if (announcement && announcement.enabled) {
  //       mobilePayNumber = announcement.mobilePay;
  //     }
  //   } catch (error) {
  //     console.error("Failed to load MobilePay number in header:", error);
  //   }
  // }

  return (
    <HeaderClient 
      mobilePayNumber={mobilePayNumber}
      currentMonth={currentMonth}
    />
  );
}
