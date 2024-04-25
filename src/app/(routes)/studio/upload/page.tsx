"use client"

import Button from "@/components/shared/Button";
import UploadVideoModal from "@/components/shared/Model/UploadVideoModal";
import VideoPreview from "@/components/studio/upload/VideoPreview";
import VideoUploadForm from "@/components/studio/upload/VideoUploadForm";
import { UploadVideoModalContext } from "@/context/UploadVideoModalContext";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import axios from "axios";
import {useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function UploadPage() {
  useProtectedRoute()
    const uploadVideoModal = useContext(UploadVideoModalContext);
    const router = useRouter()

    useEffect(() => uploadVideoModal?.onOpen(), []);
    const [isLoading,setIsLoading] = useState(false)
   
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
      const thumbnailSrc: string = watch("thumbnailSrc");
      const videoSrc: string = watch("videoSrc");
      const changeValue=(id:string, value:string)=>{
        setValue(id,value,{
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
   }
   const onSubmit:SubmitHandler<FieldValues> = async (data)=>{
   setIsLoading(true)
    await axios.post("/api/videos",data).then(()=>{
      toast.success("video published successfully")
      router.push("/studio")
    }).catch(()=>toast.error("Could not publish video")).finally(()=>setIsLoading(false))
   
   }
  return (
   <>  
   {uploadVideoModal?.isOpen && (
        <UploadVideoModal
          onUpload={(value) => changeValue("videoSrc", value)}
        />
      )}
   <div className="flex flex-col px-8 pt-4 overflow-visible">
        <div className="flex justify-between">
          <h1 className="text-2xl">Video details</h1>
          <span className="flex gap-4">
            <Button type="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="box" onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
          </span>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-2">
          <VideoUploadForm
            register={register}
            errors={errors}
            changeValue={changeValue}
            thumbnailSrc={thumbnailSrc}
            isLoading={isLoading}
          />
          <VideoPreview videoSrc={videoSrc}  /> 

          
          
        </div>
      </div>
   </>
  )
}

