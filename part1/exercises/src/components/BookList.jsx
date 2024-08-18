import classes from "./BookList.module.css"
export default function BookList() {
   let pageTitle = "Library Finds";
   let book1 = "https://m.media-amazon.com/images/I/61mIq2iJUXL._SL1360_.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/1/1e/MichaelCrighton_StateOfFear.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81k8YGJINwL._SL1500_.jpg";

   return (
      <div className= {classes.bookingGroup}>
         <h3>{pageTitle}</h3>
         <img src={book1} className = {classes.books} alt="cracking the coding interview" />
         <img src={book2} className = {classes.books}alt="state of fear" />
         <img src={book3} className = {classes.books}alt="the heartless hunter" />
      </div>      
   );
}