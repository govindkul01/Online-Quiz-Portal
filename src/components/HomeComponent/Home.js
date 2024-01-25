import style from './Home.module.css';
import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";
import pic1 from "../../images/1.png";
import pic2 from "../../images/2.png";
import pic3 from "../../images/3.jpg";

 
const Home = () => {

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
         };

         const quizzes = [
            { id: 1, title: "Quiz 1", link: "/quiz/1" },
            { id: 2, title: "Quiz 2",  link: "/quiz/2" },
            { id: 3, title: "Quiz 3",  link: "/quiz/3" },
            // Add more quiz data as needed
          ];
    return(
        <>
           <div id={style.header}>
               <div id={style.headerHeadingBox}>
                    <h3>Online Exam Portal</h3> 
                </div>
            </div>

          <div id={style.div1}>
              <img src={pic1} alt="" />
              <span>Quiz Portal</span>
          </div>


          <div id={style.div2}>
        
              <div className ={style.div3}>
                 <NavLink exact  to="/StudentLogin">
                    <img src={pic2} alt="" />
                    <span>Student</span>
                 </NavLink>
              </div>

              <div  className ={style.div3}>
                <NavLink  to="/AdminLogin">
                   <img src={pic3} alt="" />
                   <span>Admin</span>
                 </NavLink> 
              </div>
            
          </div>

         

        </>
        
    );
}

 

export default Home;