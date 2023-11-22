import React, { useState } from 'react';
import "./styles.css"

const Carousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://press-start.com.au/wp-content/uploads/2020/09/vergil.jpg',
    'https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/10/nico-devil-may-cry-5.jpg',
    'https://t.ctcdn.com.br/VlSif2lpqQwFoqllwmweU7XzNSo=/848x477/smart/i346185.jpeg',
    'https://1hitgames.com/wp-content/uploads/2019/11/Devil-May-Cry-5-12-671x377.jpg',
    'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/Featured---V-Tips-To-Master-His-Combat.jpg',
    
  ];

  const slideTexts = [
    'Vergil',
    'Neyo',
    'Dante',
    'Nico',
    'V',
    
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const slideWidth = 900;
  const slideHeight = 600;

  return (
    <div className="container">


    <input type="radio" name="slider" className="d-none" id="s1" />
    <input type="radio" name="slider" className="d-none" id="s2" />
    <input type="radio" name="slider" className="d-none" id="s3" />
    <input type="radio" name="slider" className="d-none" id="s4" />
    <input type="radio" name="slider" className="d-none" id="s5" />

    <div className="cards">
      <label for="s1" id="slide1">
        <div className="card">
          <div className="image">
            <img src="https://press-start.com.au/wp-content/uploads/2020/09/vergil.jpg" alt="" />
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Vergil</span>
            <span className="lorem">Vergil é o irmão gêmeo de Dante, ambos sendo Nephilim, filhos do demônio Sparda. Vergil é um personagem complexo, reservado e focado em seus objetivos. Sua presença na história adiciona profundidade ao enredo, explorando o passado da família Sparda e contribuindo para a dinâmica entre os personagens. Ele é conhecido por suas habilidades em artes marciais e no uso da espada Yamato.</span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s2" id="slide2">
        <div className="card">
          <div className="image">
            <img src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/10/nico-devil-may-cry-5.jpg" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Nico</span>
            <span className="lorem">Nico é uma engenheira e mecânica de armas responsável por criar e aprimorar as armas dos protagonistas, como Dante e Nero. Ela tem uma personalidade extrovertida e habilidades mecânicas excepcionais. Nico é a neta da criadora das pistolas Ebony & Ivory, e sua oficina móvel, o "Devil May Cry Van", serve como um local para melhorias e customizações de armas. Sua presença adiciona humor e energia ao jogo.</span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s3" id="slide3">
        <div className="card">
          <div className="image">
            <img src="https://t.ctcdn.com.br/VlSif2lpqQwFoqllwmweU7XzNSo=/848x477/smart/i346185.jpeg" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Dante</span>
            <span className="lorem">Dante é um caçador de demônios Nephilim, filho de Sparda e irmão gêmeo de Vergil. Ele é um protagonista principal na série, conhecido por suas habilidades sobrenaturais e estilo de luta extravagante. </span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s4" id="slide4">
        <div className="card">
          <div className="image">
            <img src="https://1hitgames.com/wp-content/uploads/2019/11/Devil-May-Cry-5-12-671x377.jpg" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Nero</span>
            <span className="lorem">Nero é um caçador de demônios, neto de Sparda e membro da "Ordem da Espada". Ele perde seu braço demoníaco no início do jogo, mas adquire um braço protético chamado Devil Breaker. </span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s5" id="slide5">
        <div className="card">
          <div className="image">
            <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/Featured---V-Tips-To-Master-His-Combat.jpg" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">V</span>
            <span className="lorem"> V é um misterioso cliente que contrata Dante para combater uma nova ameaça demoníaca. Ele possui uma aparência distinta e um estilo de luta único, envolvendo a convocação de criaturas demoníacas chamadas "Shadow" e "Griffon". </span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>
    </div>

  </div>
  );
};

export default Carousel2;
