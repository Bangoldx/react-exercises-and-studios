import './styles.css';

function Button() {
   function onLearnMore(){
      alert("Willy was Freed")
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;