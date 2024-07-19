const CategoryLabel = ({ category }) => {
  return (
    <div className="px-5 py-1 bg-red-400 rounded-md">
      <p className="text-white font-semibold">{category}</p>
    </div>
  );
};

export default CategoryLabel;
