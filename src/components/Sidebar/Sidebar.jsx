/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SidebarContent from "../SidebarContent/SidebarContent.jsx";

const Sidebar = ({handleCategory}) => {

    const [categories, setCategories] = useState([])
     
    useEffect(()=>{
        fetch('./categories.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setCategories(data)
        })
    },[])
    return (
        <div className="col-span-1 ">
            <div className="grid gap-5">
            {
                categories.map((category,  index)=><SidebarContent key={index} category={category}
                handleCategory={handleCategory}></SidebarContent>)
                
            }
            </div>
        </div>
    );
};

export default Sidebar;