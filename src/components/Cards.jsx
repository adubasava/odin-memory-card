import { useEffect, useState } from 'react';

function Cards({ name }) {
  const [src, setSrc] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const imageSource = async function (charName) {
      try {
        const data = await fetch(
          'https://pokeapi.co/api/v2/pokemon/' + charName,
        );
        const response = await data.json();
        const imageSrc = response.sprites.other.dream_world.front_default;
        setSrc(imageSrc);
        setTitle(name.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    imageSource(name.name);
  });

  return (
    <>
      <h3>{title}</h3>
      <img src={src ? src : '<p>Loading</p>'} alt={title} />
    </>
  );
}
export default Cards;
