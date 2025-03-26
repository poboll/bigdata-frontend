import { IconCloudRain } from "@tabler/icons-react";

type TimerProps = {
  startTime: string;
  endTime: string;
};

export default function Timer({ startTime, endTime }: TimerProps) {
  return (
    <div className="my-8 flex justify-center">
      <div className="bg-black/70 border border-border/50 px-8 py-3 flex items-center gap-8 rounded-md">
        <div className="text-xl md:text-2xl">{startTime}</div>
        <div className="text-blue-400">
          <IconCloudRain size={32} />
        </div>
        <div className="text-xl md:text-2xl">{endTime}</div>
      </div>
    </div>
  );
}
