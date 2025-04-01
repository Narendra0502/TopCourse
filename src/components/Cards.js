import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { toast } from 'react-toastify'
const Cards = ({courses}) => {
  const [likedCourses, setLikedCourses] = useState([]);
  const handleLike = (course) => {
    setLikedCourses([...likedCourses, course]);
    toast.success('Course liked!');
  };

  if (!courses || Object.keys(courses).length === 0) {
    return <p>No courses available</p>;
  }
    let allcourses=[];
    
  Object.values(courses).forEach((coursesData) => {
    if (Array.isArray(coursesData)) {
      allcourses = allcourses.concat(coursesData);
    }
  });

  return (
    <div className="cards flex flex-wrap justify-center gap-4">
      {allcourses.map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
      ))}
    </div>
  )
}

export default Cards
