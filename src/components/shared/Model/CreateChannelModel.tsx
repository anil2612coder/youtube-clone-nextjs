"use client"


import React, { useContext, useState } from 'react'
import Avatar, { AvatarSize } from '../Avatar'
import Button from '../Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Input from '../Input'
import MediaUpload from '../MediaUpload'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { CreateChannelModalContext } from '@/context/CreateChannelModelContext'



const CreateChannelModel = () => {
  const router = useRouter()
  const [isLoading,setIsLoading] = useState(false)
  const createChannelModal = useContext(CreateChannelModalContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      handle: "",
      imageSrc: "",
    },
  });
  const imageSrc = watch("imageSrc");
 
  const handleImageUpload = (value: string) => {
    console.log(value)
    setValue("imageSrc", value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/channels", data)
      .then(() => {
        toast.success("Channel created successfully");
        createChannelModal?.onClose();
        router.refresh();
      })
      .catch(() => {
        toast.error("Couldnot create a channel");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return createChannelModal?.isOpen? (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center z-50 bg-zinc-800 w-3/5 max-w-2xl rounded-xl">

      <h1 className="text-xl p-3 border-b border-neutral-700">How you&apos;ll appear</h1>
      <div className="flex flex-col items-center py-3 gap-4">
        <Avatar size={AvatarSize.large} imageSrc={imageSrc}/>
        <MediaUpload onChange={handleImageUpload}>
        <Button type='primary'>Upload Picture</Button>
        </MediaUpload>
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          
          required
          className="w-3/4"
        />
        <Input
          id="handle"
          label="Handle Name"
          disabled={isLoading}
          register={register}
          errors={errors}
         
          required
          className="w-3/4"
        /> 
         </div>
        <div className=" flex p-3 border-t border-neutral-700  justify-end gap-3">
          <Button type='secondary'> Cancel</Button> 
          <Button type='primary' onClick={handleSubmit(onSubmit)}> Create Channel</Button>
          
        
       
      </div>
    </div>
  ): null;
}

export default CreateChannelModel