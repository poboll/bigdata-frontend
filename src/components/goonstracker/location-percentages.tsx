type LocationPercentageProps = {
  locations: {
    name: string;
    percentage: number;
  }[];
};

export default function LocationPercentages({ locations }: LocationPercentageProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-8">
      {locations.map((location) => (
        <div key={location.name} className="location-percentage">
          {location.name}: {location.percentage}%
        </div>
      ))}
    </div>
  );
}
