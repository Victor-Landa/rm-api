// Esta función va a retornarnos la vista que necesitamos para Home
const Home = () => {
  const view = `
    <div class="characters">
      <article class="character-item">
        <a href="#/1/">
          <img src="image" alt="name">
          <h2>Name</h2>
        </a>
      </article>
    </div>
  `;
  return view;
};

// Lo exportamos porque nos va a permitir identificar 
// si este archivo puede ser utilizado dentro de otros archivos de JS
export default Home;