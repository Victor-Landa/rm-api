import getData from '../utils/getData';

// Esta función va a retornarnos la vista que necesitamos para Home
const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="characters">
    ${characters.results.map(character => `
      <article class="character-item">
       <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        </a>
      </article>
    `).join('')}
    </div>
  `;
  return view;
};

// Lo exportamos porque nos va a permitir identificar 
// si este archivo puede ser utilizado dentro de otros archivos de JS
export default Home;