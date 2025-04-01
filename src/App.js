import React, { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => {
 const [courses,setCourses]=useState([]);
 const [loading,setLoading]=useState(true);
  
    async function fetchData (){
      setLoading(true);
      try{
          let res=await fetch(apiUrl);
          let data=await res.json();
          setCourses(data.data);

      }
      catch(err){
        toast.error("Something went wrong");
       
    }
    setLoading(false);
  }
  
    useEffect(()=>{
  fetchData();
  },[]);
  return(<div>
    <Navbar/>
    <div className='bg-blue-950'>
    <Filter
   filterData={filterData} />
   <div className='w-11/12 max-w-[1200px] flex flex-wrap
    justify-center items-center min-h-[50vh] space-x-4 gap-y-4 mx-auto my-4'>
        {
          loading?(<Spinner />):(<Cards courses={courses}/>)
        }
   </div>
    </div>
   
   

  </div>);
};

export default App;
