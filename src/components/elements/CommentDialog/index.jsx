import { cn } from "../../../utils";

const CommnetDialog = () => {
  return (
    <div className="my-5 border-t border-slate-700 pt-3 md:pt-5">
      <textarea
        className="w-full rounded-md px-3 py-2 focus:outline-none active:outline-none h-24 placeholder:text-white bg-transparent border border-white text-white"
        placeholder="Write your comment here..."
      ></textarea>
      <button
        className={cn(
          "w-fit",
          "text-white hover:text-red-400",
          "border border-white hover:border-red-400",
          "px-5 py-2",
          "rounded-md",
          "mt-2",
          "transition duration-500"
        )}
      >
        Comment
      </button>
    </div>
  );
};

export default CommnetDialog;
