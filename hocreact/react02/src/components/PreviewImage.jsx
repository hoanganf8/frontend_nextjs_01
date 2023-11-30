import { useEffect, useState } from "react";

const PreviewImage = () => {
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image);
    };
  }, [image]);
  return (
    <div>
      <input type="file" onChange={handleChange} />
      {image && <img src={image} width="200" />}
    </div>
  );
};

export default PreviewImage;
