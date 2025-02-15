import { useState } from "react";
import Upload from "../assets/Images/icon-upload.svg";
import Info from "../assets/Images/icon-info.svg";

function UploadAvatar() {
  const [image, setImage] = useState<string | null>(null);
  const [draggedFiles, setDraggedFiles] = useState<File[]>([]);

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

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setDraggedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const clearFiles = () => setDraggedFiles([]);

  return (
    <>
      <div className="display:inline-block; position: relative">
        <p className="flex items-center justify-center mt-10">Upload Avatar</p>

        <div
          className="flex items-center justify-center mt-2"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="py-5 px-20 border-2 border-dashed border-gray-500 border-raduce rounded-lg cursor-pointer">
            <div className="flex items-center justify-center">
              <img src={Upload} alt="Upload" />
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                {image ? (
                  <img src={image} alt="Uploade" className="preview-image" />
                ) : (
                  <>
                    <p className="text-xl font-medium text-gray-700">
                      Drag and drop your files here
                    </p>
                  </>
                )}

                <div className="p-4">
                  <div className="text-center cursor-pointer transition-colors">
                    {draggedFiles.length > 0 && (
                      <button
                        type="button"
                        className="mt-4 px-4 py-2 text-white rounded"
                        onClick={clearFiles}
                      >
                        Clear Files
                      </button>
                    )}
                  </div>

                  {draggedFiles.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 mt-6">
                      {draggedFiles.map((file, index) => (
                        <div key={index} className="p-4 rounded shadow">
                          <p>{file.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUplod}
                  className="ml-10 cursor-pointer hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-2">
          <img src={Info} alt="Info" className="pr-2" />
          <p className="text-[13px] text-stone-300">Upload your photo (JPG or PNG, max size 500kB)</p>
        </div>

      </div>
    </>
  );
}

export default UploadAvatar;
