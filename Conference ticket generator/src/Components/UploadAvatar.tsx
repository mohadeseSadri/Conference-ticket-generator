import Upload from "../assets/Images/icon-upload.svg";

function UploadAvatar() {
  return (
    <>
      <div className="display:inline-block; position: relative">
        <p className="flex items-center justify-center mt-10">Upload Avatar</p>
        <div className="flex items-center justify-center mt-2">
          <div className="py-5 px-20 border-2 border-dashed border-gray-500 border-raduce rounded-lg">
            <div className="flex items-center justify-center">
              <img src={Upload} alt="Upload" />
            </div>
            <input type="file" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadAvatar;
