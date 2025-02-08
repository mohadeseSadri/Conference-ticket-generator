import { useRef, useState } from "react";
import Upload from "../assets/Images/icon-upload.svg";

function UploadAvatar() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUplod = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="display:inline-block; position: relative">
        <p className="flex items-center justify-center mt-10">Upload Avatar</p>

        <div className="flex items-center justify-center mt-2 cursor-pointer">
          <div className="py-5 px-20 border-2 border-dashed border-gray-500 border-raduce rounded-lg">
            <div className="flex items-center justify-center">
              <img src={Upload} alt="Upload" />
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                {image ? (
                  <img src={image} alt="Uploade" className="preview-image" />
                ) : (
                  <p>click to upload an image</p>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUplod}
                  className="ml-10 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadAvatar;
