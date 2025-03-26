import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type LastReportProps = {
  location: string;
  type: string;
  timestamp: string;
  reportedBy: string;
  timeAgo: string;
};

export default function LastReport({
  location,
  type,
  timestamp,
  reportedBy,
  timeAgo,
}: LastReportProps) {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border border-border w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl uppercase text-secondary">Last Report</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="text-3xl font-bold">
          {location} <span className="text-amber-500 text-xl">({type})</span>
        </div>
        <div className="text-2xl">{timestamp}</div>
        <div className="text-foreground/70 text-sm">
          Reported by {reportedBy}
          <div>{timeAgo}</div>
        </div>
      </CardContent>
      <CardFooter className="justify-center pt-2 pb-4">
        <Link href="/goonstracker/report">
          <Button
            className="bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-card/100 transition-colors"
          >
            REPORT LOCATION
          </Button>
        </Link>
      </CardFooter>
      <div className="text-center pb-4">
        <Link href="/goonstracker/history" className="text-foreground/70 text-sm hover:text-primary">
          PREVIOUS REPORTS
        </Link>
      </div>
    </Card>
  );
}
