"use client";





interface VideoPreviewProps {
  
  videoSrc: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoSrc }) => {



  return (
    <div className="w-full md:w-2/5 flex flex-col overflow-hidden rounded-md">
      <iframe src={videoSrc} />
    </div>
  );
};

export default VideoPreview;