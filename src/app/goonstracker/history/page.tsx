import { Button } from "@/components/ui/button";
import HistoryTable from "@/components/goonstracker/history-table";
import Link from "next/link";
import { IconFilter } from "@tabler/icons-react";

// Mock data for the history table
const historyEntries = [
  {
    id: "1",
    timestamp: "26.03.2025 09:16:23",
    location: "Lighthouse",
    type: "PVP",
    reportedBy: "lechupl92",
    reportedByLink: "https://twitch.tv/lechupl92",
  },
  {
    id: "2",
    timestamp: "26.03.2025 09:11:13",
    location: "Lighthouse",
    type: "PVP",
    reportedBy: "> Discord Bot <",
    reportedByLink: "https://caiths.com/bot/discord",
  },
  {
    id: "3",
    timestamp: "26.03.2025 09:01:51",
    location: "Lighthouse",
    type: "PVP",
    reportedBy: "> Discord Bot <",
    reportedByLink: "https://caiths.com/bot/discord",
  },
  {
    id: "4",
    timestamp: "26.03.2025 08:16:16",
    location: "Lighthouse",
    type: "PVP",
    reportedBy: "ManteGudo",
    reportedByLink: "https://twitch.tv/ManteGudo",
  },
  {
    id: "5",
    timestamp: "26.03.2025 08:04:23",
    location: "Lighthouse",
    type: "PVP",
    reportedBy: "FlowziTV",
    reportedByLink: "https://twitch.tv/FlowziTV",
  },
  {
    id: "6",
    timestamp: "26.03.2025 06:54:46",
    location: "Customs",
    type: "PVE",
    reportedBy: "> Discord Bot <",
    reportedByLink: "https://caiths.com/bot/discord",
  },
  {
    id: "7",
    timestamp: "26.03.2025 06:53:52",
    location: "Lighthouse",
    type: "PVP",
    reportedBy: "Darth_LIGO",
    reportedByLink: "https://twitch.tv/Darth_LIGO",
  },
  {
    id: "8",
    timestamp: "26.03.2025 06:53:02",
    location: "Lighthouse",
    type: "PVP",
    reportedBy: "pichliacc",
    reportedByLink: "https://twitch.tv/pichliacc",
  },
  {
    id: "9",
    timestamp: "26.03.2025 03:16:33",
    location: "Woods",
    type: "PVP",
    reportedBy: "> Discord Bot <",
    reportedByLink: "https://caiths.com/bot/discord",
  },
  {
    id: "10",
    timestamp: "26.03.2025 00:20:56",
    location: "Customs",
    type: "PVP",
    reportedBy: "tonycasir",
    reportedByLink: "https://twitch.tv/tonycasir",
  },
  {
    id: "11",
    timestamp: "25.03.2025 23:35:29",
    location: "Customs",
    type: "PVP",
    reportedBy: "> Discord Bot <",
    reportedByLink: "https://caiths.com/bot/discord",
  },
  {
    id: "12",
    timestamp: "25.03.2025 22:10:30",
    location: "Customs",
    type: "PVP",
    reportedBy: "> Discord Bot <",
    reportedByLink: "https://caiths.com/bot/discord",
  },
  {
    id: "13",
    timestamp: "25.03.2025 20:25:10",
    location: "Customs",
    type: "PVE",
    reportedBy: "> Discord Bot <",
    reportedByLink: "https://caiths.com/bot/discord",
  },
  {
    id: "14",
    timestamp: "25.03.2025 19:53:57",
    location: "Customs",
    type: "PVP",
    reportedBy: "ボート男爵さん",
  },
  {
    id: "15",
    timestamp: "25.03.2025 18:05:07",
    location: "Shoreline",
    type: "PVP",
    reportedBy: "NotAFurryChad",
    reportedByLink: "https://twitch.tv/NotAFurryChad",
  },
];

export default function History() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">Goons Location History</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-black/40 border-border flex items-center gap-2"
          >
            <IconFilter size={18} />
            <span>Hide PVE reports</span>
          </Button>
          <Link href="/goonstracker">
            <Button className="bg-primary hover:bg-primary/80 transition-all">
              Back to Tracker
            </Button>
          </Link>
        </div>
      </div>

      {/* Cookie notice */}
      <div className="text-center mb-8 py-4 bg-black/70 border border-border/50 text-sm text-foreground/70">
        <p>
          By continuing to use this site, you agree to the use of cookies, which store some of your data for a better experience.
          <Button variant="link" className="text-primary p-0 h-auto ml-2">OK</Button>
        </p>
      </div>

      {/* History table */}
      <div className="bg-black/40 border border-border/50 p-6 rounded-md">
        <HistoryTable entries={historyEntries} />
      </div>
    </div>
  );
}
