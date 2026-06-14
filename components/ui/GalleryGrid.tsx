import PlaceholderCard from "./PlaceholderCard";

const GalleryGrid = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64 md:h-72">
        <PlaceholderCard />
        <PlaceholderCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-64 md:h-72">
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </div>
    </div>
  );
};

export default GalleryGrid;
