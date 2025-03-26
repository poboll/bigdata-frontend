import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ReportLocation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Report Goons Location</CardTitle>
            <CardDescription>
              Help the community by reporting where you've seen the Goons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="location">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full bg-black/50 border border-border px-3 py-2 rounded-md"
                >
                  <option value="">Select map</option>
                  <option value="customs">Customs</option>
                  <option value="factory">Factory</option>
                  <option value="interchange">Interchange</option>
                  <option value="lighthouse">Lighthouse</option>
                  <option value="reserve">Reserve</option>
                  <option value="shoreline">Shoreline</option>
                  <option value="woods">Woods</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Match Type
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="match_type"
                      value="pvp"
                      className="bg-black/50 border border-border"
                    />
                    <span>Online</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="match_type"
                      value="pve"
                      className="bg-black/50 border border-border"
                    />
                    <span>Offline</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <Link href="/goonstracker">
                  <Button variant="outline" className="bg-black/40 border-border">
                    Cancel
                  </Button>
                </Link>
                <Button className="bg-primary hover:bg-primary/80 transition-all">
                  Submit Report
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
