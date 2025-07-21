import { useState } from "react";

export default function useImageUpload() {
  const [imgUrl, setImgUrl] = useState(null);
  const [error, setError] = useState(false);

  const handleImageUpload = ({ target }) => {
    if (!(target.files && target.files[0])) {
      setError(true);
      setImgUrl(null);
      return;
    }
    const imgFile = target.files[0];
    const imgUrl = URL.createObjectURL(imgFile);
    setImgUrl(imgUrl);
    setError(false);
  };
  return { imgUrl, error, handleImageUpload };
}
