import style from "./Dashboard.module.css";



const Dashboard = () => {
    return(
        <>
                      <div id={style.displayHeadingBox}> 
                          <h1>Dashboard</h1>     
                      </div>

                       <div id={style.box1}>
                          <p id={style.countOfExam}></p>
                              <button>View Details</button>
                       </div>

                         <div id={style.box2}>
                             <p  id={style.countOfQuestion}></p>
                              <button>View Details</button> 
                         </div>

                         <div id={style.box3}>
                             <p id={style.countOfUser}></p>
                               <button>View Details</button>
                         </div>
                        
        </>
    );
}

export default Dashboard;