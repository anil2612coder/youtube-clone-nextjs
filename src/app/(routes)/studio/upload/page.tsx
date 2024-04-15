"use client"

import UploadVideoModal from "@/components/shared/Model/UploadVideoModal";
import { UploadVideoModalContext } from "@/context/UploadVideoModalContext";
import { useContext, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function UploadPage() {
    const uploadVideoModal = useContext(UploadVideoModalContext);

    useEffect(() => uploadVideoModal?.onOpen(), []);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
      } = useForm<FieldValues>({
        defaultValues: {
          title: "",
          description: "",
          thumbnailSrc: "",
          videoSrc: "",
        },
      });
  return (
   <>
   <UploadVideoModal  onUpload={(value) => changeValue("videoSrc", value)}/>
   </>
  )
}

