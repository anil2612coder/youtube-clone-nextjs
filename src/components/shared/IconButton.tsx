"use client"

interface IconButtonProps{
    className?: string;
    onClick?:React.MouseEventHandler<HTMLDivElement>;
}

const IconButton:React.FC<React.PropsWithChildren<IconButtonProps>> = ({children,className="",onClick}) => {
  return (
    <div onClick={onClick} className={`cursor-pointer rounded-full sm:p-2 p-1 hover:bg-neutral-800 ${className}`}>{children}</div>
  )
}

export default IconButton