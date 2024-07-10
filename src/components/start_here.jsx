import React from 'react';
import './Header.css';
import './MainContent.css';

const start_here = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to Yummy Yard</h1>
        
        <pre>
            Feast your eyes on our mouth watering recipes <br />
            <br />Sometimes you just need a steamy bowl of Biryani to soothe your taste buds!
            <br />or , maybe a portion of Fish Florentine to cream away your sorrows.
            <br />  We have got it all here with much more!!
            <br />Share your recipes which tantalize the senses and display the divinity of food!
        </pre>

        </div>
        
    

        <main className="main-content">
        <section className="section">
  <h2>Login/Signup</h2>
  <p> Post your lip smacking recipes</p>
  <h2>About Us</h2>
  <p>Read our </p>
</section>
<section className="section">
  <h2>Recipes</h2>
  <p>See our magical recipes</p>
</section>
</main>


</header>



  );
};

export default start_here;




