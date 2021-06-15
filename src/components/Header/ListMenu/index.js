import React from 'react'

import Styles from "./index.module.css";

export default function ListMenu({open}){
    return(
        <ul className = {`${open ? '': 'd-none'} ${Styles.MenuWrapper}`}  >
        <li>Home</li>
        <li>Reading List</li>
        <li>Listings</li>
        <li>Podcast</li>
        <li>Videos</li>
      </ul>
      )
}