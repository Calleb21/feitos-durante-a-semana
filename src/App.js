import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

function App() {
  const [showTopics, setShowTopics] = useState(false);

  const toggleTopics = () => {
    setShowTopics(!showTopics);
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
        <div className="header-content">
          {/* Logo e nome */}
          <div className="header-left">
            <img
              src="https://honeysucklecreek.net/images/images_Apollo_11/Apollo_11_patch_vectorised_transp_sm.png"
              alt="Logo"
              className="logo"
            />
            <h1>Apollo's Legacy</h1>
          </div>
        </div>

        {/* Botão para mostrar/ocultar os tópicos */}
        <button onClick={toggleTopics} className="show-topics-button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/463/463292.png"
            alt="Mostrar Tópicos"
          />
        </button>
      </header>

      {/* Novo elemento com a imagem de fundo */}
      <div className="background-image"></div>
      <div className="background-image1"></div>
      <div className="background-image2"></div>
      <div className="background-image3"></div>
      <div className="background-image4"></div>

      {/* Modal */}
      <Modal
        isOpen={showTopics}
        onRequestClose={() => setShowTopics(false)}
        className="modal"
        overlayClassName="overlay"
      >
        {/* Conteúdo da modal */}
        <ul className="modal-topics">
          <li>Tópico 1</li>
          <li>Tópico 2</li>
          <li>Tópico 3</li>
        </ul>
        <button onClick={() => setShowTopics(false)}>Fechar</button>
      </Modal>

       {/* Footer */}
       <footer className="footer">
        <p>Apollo's Legacy © 2023</p>
        <div className="social-buttons">
          <a href="https://instagram.com/calleb_camargo_01?igshid=NTc4MTIwNjQ2YQ==" rel="noopener noreferrer">
            <button className="social-button instagram">Instagram</button>
          </a>
          <a href="https://www.linkedin.com/in/calleb-camargo-682321237" target="_blank" rel="noopener noreferrer">
            <button className="social-button linkedin">LinkedIn</button>
          </a>
          <a href="https://github.com/Calleb21" target="_blank" rel="noopener noreferrer">
            <button className="social-button github">GitHub</button>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
