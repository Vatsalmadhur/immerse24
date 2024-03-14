import { eventNotice } from '@/app/Common/data';
import React from 'react'

 const Notice = ({params}:{params:{eventName:string}}) => {
  return (
<>
<img src={`${eventNotice[params.eventName]}`} alt="" />
</>
  )
}
export default Notice;
