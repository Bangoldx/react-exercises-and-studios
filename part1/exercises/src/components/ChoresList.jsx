import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className = {classes.choresHeading}>Todays Chores</h3>
         <ol>
            <li className = {classes.choresText}>Cleaning Kitchen</li>
            <li className = {classes.choresText}>Feed the cat</li>
            <li className = {classes.choresText}>take out trash</li>
         </ol>
      </div>
   );
}