import PlaceholderCard from "./PlaceholderCard";

const BentoGrid = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-72">
        <PlaceholderCard className="h-48 md:h-full" />
        <PlaceholderCard className="h-48 md:h-full md:col-span-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-72">
        <PlaceholderCard className="h-48 md:h-full" />
        <PlaceholderCard className="h-48 md:h-full" />
      </div>
    </div>
  );
};

export default BentoGrid;
