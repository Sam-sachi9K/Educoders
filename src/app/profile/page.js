'use client'
 
// import { usePathname } from 'next/navigation'
 import { Student } from '@/app/lib/data'
//  import StuDet from '@/app/Components/StuDet'
import StuDet from '@/app/Components/StuDet'
export default function ExampleClientComponent() {
//   const pathname = usePathname()
//   // const nam=pathname.replace("%20"," ")
//   const stud=pathname.substring(9)



  return( <>
    <StuDet para={Student[0]}/>
  </>
)}
