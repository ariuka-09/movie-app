"use client"
import { Fullscreen } from 'lucide-react'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function Trailer (props:{trailer: {0:{key:string}}}){
  const {trailer} = props
  
    const [isShow, useIsShow] = useState(false)
    const playTrailer = ()=>{
       useIsShow(!isShow)
      }
    // return (<div className="absolute bottom-[0] w-[100%] left-[-50%]">
    //       {isShow && <div>
    //      <ReactPlayer className='' width={'155%'} height={600} src={`https://www.youtube.com/watch?v=${trailer[0].key}`} />
    //     </div>}
    //     <div className='relative'>
    //     <button className='absolute right-80 bottom-[50px] ' onClick={() =>{playTrailer()}}>
    //     Watch Trailer
    //     </button>
    //    
    //    X
    //     </button>
    //     </div>
       
    //     </div>)
    return(




    <Dialog>
      <form className=''>
        <DialogTrigger asChild>
     
        <Button className='absolute bottom-8 left-12 cursor-pointer' variant="outline">Open Dialog</Button>
   
        </DialogTrigger>
        <DialogContent className="sm:max-w-[70%]">
        <ReactPlayer className='' width={'100%'} height={600} src={`https://www.youtube.com/watch?v=${trailer[0].key}`} />
        </DialogContent>
      </form>
    </Dialog>
  )

}