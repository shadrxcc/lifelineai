import SideBar from "../components/SideBar"

const Dashboard = () => {
  return (
    <div className="flex w-full ">
      <div className=''>
        <SideBar />
      </div>
      <div className="flex-1 bg-sec  pt-[2rem] md:pl-[5rem] px-4 md:px-[2rem] pb-[3rem]">
        
      </div>
    </div>
  )
}

export default Dashboard