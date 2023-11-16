export default function BookList() {
   let pageTitle = "Amazing, Interesting books!!";
   let book1 = "https://tse4.mm.bing.net/th?id=OIP.Ekb-9LilnQGzGiRWa_SVDgHaLp&pid=Api&P=0&h=180";
   let book2 = "https://tse3.mm.bing.net/th?id=OIP.8TD_d_dRAQZ9nMWBjjB8pwHaLe&pid=Api&P=0&h=180";
   let book3 = "https://tse2.mm.bing.net/th?id=OIP.iqxhY7BsXUEcswn1DZTLowHaHa&pid=Api&P=0&h=180";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Book Thief" />
         <img src={book2} alt="The Hobbit" />
         <img src={book3} alt="Milk and Honey" />
      </div>      
   );
}