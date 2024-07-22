import { cn } from "../../../utils";

const CategoryLabel = ({ category }) => {
  return (
    <div
      className={cn(
        "px-5 py-1",
        "border border-white hover:border-red-400",
        "group",
        "transition duration-500",
        "bg-transparent",
        "rounded-md"
      )}
    >
      <p className="text-white font-semibold group-hover:text-red-400 transition duration-500">
        {category}
      </p>
    </div>
  );
};

export default CategoryLabel;
