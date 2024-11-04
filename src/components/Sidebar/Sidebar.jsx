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
        <div className="lg:col-span-1 ">
            <div className="grid grid-cols-2 lg:grid-cols-1 lg:gap-5 gap-2
            ">
            {
                categories.map((category,  index)=><SidebarContent key={index} category={category}
                handleCategory={handleCategory}></SidebarContent>)
                
            }
            </div>
        </div>
    );
};

export default Sidebar;