import React from 'react';
import classes from './ChoresList.module.css';

let title = "Chores -.-"

export default function ChoresList() {
   const Chores = ["Sweep the floors", "Mop", "Do Dishes", "Dust"]
   return (
      <div>
         <h3 className = {classes.choresHeading}>{title}</h3>
         <li className = {classes.choresText}>{Chores[0]}</li>
         <li className = {classes.choresText}>{Chores[1]}</li>
         <li className = {classes.choresText}>{Chores[2]}</li>
         <li className = {classes.choresText}>{Chores[3]}</li>
         
         
      </div>
   );
}