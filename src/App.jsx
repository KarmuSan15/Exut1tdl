// src/App.jsx
import React from 'react';
import Noticia from './components/Noticias'; // Ajusta la ruta según tu estructura
import './App.css';

function App() {
  const noticias = [
    {
      id: 1,
      avatar: 'https://i.pinimg.com/736x/e8/2a/c6/e82ac6d53775a4bffbb1550f91c3c8dd.jpg',
      titulo: 'Noticia 1',
      fecha: '22/10/2024',
      imagen: 'https://i.pinimg.com/736x/1d/f3/19/1df3193f3413be91b675ec23bc5289cb.jpg',
      descripcion: 'Esta es la descripción de la noticia 1.',
      likes: 25,
    },
    {
      id: 2,
      avatar: 'https://i.pinimg.com/736x/e0/da/72/e0da724278aa6ed3d8e63709635f448c.jpg',
      titulo: 'Noticia 2',
      fecha: '21/10/2024',
      imagen: 'https://i.pinimg.com/736x/59/9f/cd/599fcd4233c965da494866d12d6cb6fa.jpg',
      descripcion: 'Esta es la descripción de la noticia 2.',
      likes: 10,
    },
    {
      id: 3,
      avatar: 'https://i.pinimg.com/736x/34/84/14/348414f94c5c470565b8d314585767a5.jpg',
      titulo: 'Noticia 3',
      fecha: '20/10/2024',
      imagen: 'https://i.pinimg.com/736x/bf/eb/de/bfebde6fa1caba6982ec63b674e27bc3.jpg',
      descripcion: 'Esta es la descripción de la noticia 3.',
      likes: 5,
    },
    {
      id: 4,
      avatar: 'https://i.pinimg.com/736x/90/45/c1/9045c124c2e26a1614ffbbe63aafb87f.jpg',
      titulo: 'Noticia 4',
      fecha: '19/10/2024',
      imagen: 'https://i.pinimg.com/736x/06/46/cb/0646cb6f44b298e22e5925e12fceaae2.jpg',
      descripcion: 'Esta es la descripción de la noticia 4.',
      likes: 15,
    },
  ];

  return (
    <div className="App">
      <div className="noticias-container">
        {noticias.map(noticia => (
          <Noticia key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </div>
  );
}

export default App;
