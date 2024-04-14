"use client";

import { CldUploadWidget } from "next-cloudinary";

declare global {
  var cloudinary: any;
}

interface MediaUploadProps {
  onChange: (value: string) => void;
}

const MediaUpload: React.FC<React.PropsWithChildren<MediaUploadProps>> = ({
  onChange,
  children,
}) => {
  const handleUpload = (results: any) => {
    console.log('secure_url', results.info.secure_url);
    onChange(results.info.secure_url);
  };

  return (
    <CldUploadWidget
    onSuccess={handleUpload}
      uploadPreset="tvherc1x"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div onClick={() => open && open()} className="inline-block">
            {children}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default MediaUpload;