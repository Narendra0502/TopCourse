import React from 'react'
import { FcLike } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { FcLikePlaceholder } from 'react-icons/fc'
const Card = ({course}) => {
  let likedCourses = course.likedCourses;
  let setLikedCourses = course.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((id)=>id!==course.id));
      toast.warning("Like removed");
    }
    else{
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      
      }
      else{
             setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success("Liked");
    }
  }
  return (
    <div className="w-[300px] overflow-hidden rounded-lg bg-bgDark bg-opacity-80">
      <div className='relative'>
        <img src={course.image.url}/>
        <div className='w-[40px] h-[40px]  bottom-3 absolute  flex justify-center items-center right-2 bg-slate-300 opacity-80 rounded-full'>
            <button onClick={clickHandler}>{
            !likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.75rem"/>):(<FcLike fontSize="1.75rem"/>)
            }  
            </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white '>{course.description}</p>
        
      </div>
    </div>
  )
}

export default Card
