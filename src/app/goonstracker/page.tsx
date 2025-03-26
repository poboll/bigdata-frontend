import LastReport from "@/components/goonstracker/last-report";
import LocationPercentages from "@/components/goonstracker/location-percentages";
import Timer from "@/components/goonstracker/timer";
import HistoryTable from "@/components/goonstracker/history-table";

// Mock data for the tracker
const locationPercentages = [
  { name: "Customs", percentage: 39 },
  { name: "Woods", percentage: 39 },
  { name: "Lighthouse", percentage: 39 },
  { name: "Shoreline", percentage: 39 },
];

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
];

export default function GoonsTracker() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-10">Tarkov Goons Tracker</h1>

      <Timer startTime="03:00:07" endTime="15:00:07" />

      <LastReport
        location="Lighthouse"
        type="PVP"
        timestamp="26.03.2025 09:16:23"
        reportedBy="lechupl92"
        timeAgo="26 minutes ago"
      />

      <LocationPercentages locations={locationPercentages} />

      <HistoryTable entries={historyEntries} />
    </div>
  );
}
