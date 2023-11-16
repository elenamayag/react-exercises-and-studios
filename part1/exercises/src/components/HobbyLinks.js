export default function HobbyLinks() {
    let title = "My Hobbies!";
    let hobbyLinks = "https://r.search.yahoo.com/_ylt=Awriijc00lJlFF4J.1UPxQt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1699955381/RO=10/RU=https%3a%2f%2fwww.nylon.com%2flife%2fhow-to-ride-a-penny-board/RK=2/RS=cyQtdeQ7_wbLLKmU3T_9QEXH9Kw-";
    let hobbyLinks2 = "https://r.search.yahoo.com/_ylt=Awrhe0jV0VJl3MQJ5gMPxQt.;_ylu=Y29sbwNiZjEEcG9zAzQEdnRpZAMEc2VjA3Ny/RV=2/RE=1699955286/RO=10/RU=https%3a%2f%2fwww.thesprucecrafts.com%2fhow-to-crochet-for-beginners-979092/RK=2/RS=fD0LFO5RP3YGzLAovW4huUzANxw-";

 
    return (
       <div>
          <h3>{title}</h3>
          <a href = {hobbyLinks}> Penny Board </a>
          <a href = {hobbyLinks2}> Crochet </a>
         
       </div>      
    );
 }