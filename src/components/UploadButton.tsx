"use client"
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Dropzone from 'react-dropzone'
import { Cloud, File } from 'lucide-react'
import { Progress } from './ui/progress'

const UploadDropzone = () =>{

    const [isUploading, setisUploading] = useState(false)
    const [uploadProgress, setuploadProgress] = useState(0);

    const startSimulatedProgress = () =>{
        setuploadProgress(0);
        const interval = setInterval(()=>{
            setuploadProgress((prevProgress) => {
               if(prevProgress >= 95){
                return prevProgress;
               } 
               return prevProgress+5;
            })

        },500);
        return interval;
    }
    return <Dropzone multiple={false} onDrop={ async (acceptedFiles)=>{
        console.log(acceptedFiles);
        setisUploading(true);
        const progressInerval = startSimulatedProgress();
        // handle file uploads.
        


        clearInterval(progressInerval);
        setuploadProgress(100);
    }}>
        {({getRootProps,getInputProps,acceptedFiles})=>(
            <div {...getRootProps()} className='border h-64 m-4 border-dashed border-gray-300 rounded-lg'>
                <div className='flex flex-col items-center justify-center h-full w-full rounded-lg bg-gray-50 hover:bg-gray-100'>
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>

                            <Cloud className='h-6 w-6 text-zinc-500 mb-2'></Cloud>
                            <p className='text-zinc-700 mb-2 text-sm'>
                                <span className='font-semibold'>
                                    Click to upload 
                                </span>
                                or {" "} Drag and Drop PDF
                            </p>
                            <p className='text-xs text-zinc-500'>
                                PDF (Up to 4M)
                            </p>
                    </div> 
                    <div className='block'>
                    {acceptedFiles && acceptedFiles[0] ?(
                        <div className='max-w-xs bg-white flex items-center rounded-md overflow-hidden outline-[1px] outline-zinc-200 divide-x divide-zinc-200'>
                            <div className='px-3 py-2 h-full grid place-items-center pt-5 pb-6'>
                                <File className='h-4 w-4 text-blue-500'/>
                            </div>
                            <div className='px-3 py-2 h-full text-sm truncate'>
                                 {acceptedFiles[0].name}
                            </div>
                        </div>
                    ):null}
                    {isUploading?(
                        <div className='w-full mt-4 max-w-xs  mx-auto'>
                            <Progress value={uploadProgress} className='h-1  w-full bg-zinc-200' />
                        </div>
                    ):null}
                    </div>
                   
                </div>
            </div>  
        )}
    </Dropzone>
}

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <Dialog open={isOpen} onOpenChange={(status)=>{
            if(!status){
                setIsOpen(status);
            }
        }}>
            <DialogTrigger onClick={()=>setIsOpen(true)} asChild>
                <Button > Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
               <UploadDropzone/>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default UploadButton