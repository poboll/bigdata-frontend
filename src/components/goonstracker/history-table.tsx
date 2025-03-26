import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

type HistoryEntry = {
  id: string;
  timestamp: string;
  location: string;
  type: string;
  reportedBy: string;
  reportedByLink?: string;
};

type HistoryTableProps = {
  entries: HistoryEntry[];
};

export default function HistoryTable({ entries }: HistoryTableProps) {
  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-4xl text-center uppercase mb-8">Goons Location History</h2>

      <div className="overflow-x-auto">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border-b border-border/30 text-center w-1/4">Timestamp</TableHead>
              <TableHead className="border-b border-border/30 text-center w-1/3">Location</TableHead>
              <TableHead className="border-b border-border/30 text-center w-1/3">Reported By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id} className="bg-black/40 border-b border-border/20 hover:bg-black/60">
                <TableCell className="py-4 text-center">{entry.timestamp}</TableCell>
                <TableCell className="py-4 text-center">
                  {entry.location} <span className="text-amber-500">({entry.type})</span>
                </TableCell>
                <TableCell className="py-4 text-center">
                  {entry.reportedByLink ? (
                    <Link href={entry.reportedByLink} className="text-primary hover:text-primary/80 transition-colors">
                      {entry.reportedBy}
                    </Link>
                  ) : (
                    entry.reportedBy
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
