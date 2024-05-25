import { IoIosStar } from "react-icons/io";
import { Avatar, AvatarGroup } from "@mui/material";

const imgUrl = "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const img2Url = "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const TotalOrder = () => {
  return (
    <div className="px-4 py-6 bg-[#D9E9F3] flex items-center justify-between rounded-lg">
      <div className="bg-white p-4 rounded-md">
        <IoIosStar className="text-[#73AED2]" />
      </div>
      <div>
        <h5 className="text-[#3D3270] font-[400]">Total Orders</h5>
        <p className="text-[#76728A] font-[300]">sept 01 to oct 01, 2023</p>
      </div>
      <AvatarGroup total={3}>
      <Avatar><img src={img2Url} className='rounded-full h-[50px] w-[50px] object-cover'/></Avatar>
      <Avatar><img src={imgUrl} className='rounded-full h-[50px] w-[50px] object-cover'/></Avatar>
      <Avatar><img src={img2Url} className='rounded-full h-[50px] w-[50px] object-cover'/></Avatar>
      </AvatarGroup>
    </div>
  );
};

export default TotalOrder;