import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Sidebar = () => {
  const [sideBarItems, setSideBarItems] = useState<string[]>([]);
  useEffect(() => {
    const fetchSidebarItems = async () => {
      try{
        const res = await axios.get('/db.json');
        setSideBarItems(res.data.sideBarItems);
      } catch (error){
        console.error('Error fetching sidebar items:', error);
      }
    }

    fetchSidebarItems();
  }, [])

  return (
    <div className='w-1/4 lg:w-1/6 h-screen bg-slate-200 rounded-sm'>
      <div>
        <p className='text-2xl pl-2'>Java</p>
      </div>
      <div className='list-none w-full'>
        {sideBarItems.map((item) => {
          return(
            <Link to={item} key={item} className='w-full transition ease-in-out hover:text-green-800 hover:underline hover:bg-slate-100 '>
                <p className='pl-4'>
                  {item}
                </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const HomeLayout = () => {
    
  
    
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default HomeLayout
