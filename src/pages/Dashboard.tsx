import Conversation from "../components/Conversation"
import SideBar from "../components/SideBar"

const Dashboard = () => {
  return (
    <div className="flex w-full ">
      <div className=''>
        <SideBar />
      </div>
      <div className="flex-1">
        <Conversation/>
      </div>
    </div>
  )
}

export default Dashboard