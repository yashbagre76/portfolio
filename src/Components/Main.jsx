import { FaLinkedin } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";





 const  MainSection = () => {
    return(
     <div className="w-full h-auto  px-38 py-36 bg-black">
        <div className="flex items-center justify-center gap-10">
            {/* Img section */}
            <div >
                <img src="\src\assets\WhatsApp Image 2025-05-08 at 5.13.49 PM.jpeg" alt="" 
                 className="w-80 h-80 rounded-full object-cover"
                /></div>
            {/* Text div */}
            <div>
                <p className="font-bold text-sm text-gray-300">Hello i am </p>
                <h1 className="font-medium text-3xl text-gray-300">Yash Bagre </h1>
               <h2 className="font-light text-4xl text-gray-300">A MERN Stack Developer </h2>
               <h2 className="font-light text-4xl text-gray-300"> passionate about crafting responsive, dynamic, and impactful web applications. </h2>
               <div>
                <button className="bg-gray-100 p-4  rounded-full m-6 x-6 border-1">Download CV</button>
                <button className="bg-gray-100 p-4 rounded-full m-3 px-6 border-1">Contact Info</button>
               <div className="flex items-center justify-center gap-10  ">
               <FaGithub className="w-10 h-10 bg-gray-100"/>
               <div >
               <FaLinkedin className="w-10 h-10 bg-gray-100" />
               </div>
              
               </div>

                </div>

            </div>
            {/* buttons  */}   
          
          
               
        </div>

     </div>    
    )

 }
 export default MainSection