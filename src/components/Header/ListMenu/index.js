import React, {useState} from 'react'

import Styles from "./index.module.css";

export default function ListMenu({open}){

  //const [close, setClose] = useState(false);
  
    return(


      // <ul className = {`${open ? '': 'd-none'} ${Styles.MenuWrapper}`}  >
      //   <li>Home</li>
      //   <li>Reading List</li>
      //   <li>Listings</li>
      //   <li>Podcast</li>
      //   <li>Videos</li>
      // </ul>


        <div className={`${open ? '': 'd-none'} ${Styles.MenuMobile}  d-block d-md-none`} >
          
          <div className={`${Styles.MenuWrapper}`}>
              <div className="title">
                <h2>DEV Community</h2>

                <button className="navbar-toggler close-button" type="button" 
                //close={close} onClick={() => setClose(!close)}
                >
                  <span>X</span>
                </button>

              </div>

              <ul>
                <li className="nav-item active"><a href=""><img src="images/sidebar/ico1.png" /> Home</a></li>
                <li className="nav-item"><a href=""><img src="images/sidebar/ico2.png" /> Reading List</a></li>
                <li className="nav-item"><a href=""><img src="images/sidebar/ico3.png" /> Listings</a></li>
                <li className="nav-item"><a href=""><img src="images/sidebar/ico4.png" /> Podcasts</a></li>
                <li className="nav-item"><a href=""><img src="images/sidebar/ico5.png" /> Videos</a></li>
                <li className="nav-item"><a href=""><img src="images/sidebar/ico6.png" /> Tags</a></li>
                <li className="nav-item"><a href="">More...</a></li>
              </ul>
            </div>

          </div>




      )
}