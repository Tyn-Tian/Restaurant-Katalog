import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { isLiked, saveData, unlikeData } from "../../../utils/storage";

const LikeButton = ({ id }) => {
  const [like, setLike] = useState(isLiked(id));

  const likeHandler = () => {
    if (!like) {
      saveData(id);
    } else {
      unlikeData(id);
    }
    setLike((prev) => !prev);
  };

  return (
    <button onClick={likeHandler} className="sm:mr-2 md:mr-3 lg:mr-5">
      {like ? (
        <FaHeart color="red" size={32} />
      ) : (
        <FaRegHeart color="white" size={32} />
      )}
    </button>
  );
};

export default LikeButton;
