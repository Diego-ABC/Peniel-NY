import { useState } from "react";

export default function useImageUpload(originalImgURL = null) {
  const [imgUrl, setImgUrl] = useState(originalImgURL);
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

  const clearImg = () => {
    setError(false);
    setImgUrl(null);
  };

  return { imgUrl, error, handleImageUpload, clearImg };
}
