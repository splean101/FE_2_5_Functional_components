import React, { useState, useContext } from 'react';
import Article from './components/Article';
import langs from './langs';

function App() {
  const { EN, UA } = langs;
  const [lang, setLang] = useState(EN);
  const context = useContext(lang);

  const [isShow, setIsShow] = useState(false);

  const toggleArticle = () => {
    isShow ? setIsShow(false) : setIsShow(true);
    !isShow ? setRead(false) : null;
  };

  const [read, setRead] = useState(false);
  return (
    <div className="wrapper">
      <h1 className="title">{lang.title_text}</h1>
      <div className="article">
        <Article show={isShow} text={lang} read={read}>
          <div className="article__title">
            <h2>{lang.p_title_text}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button className="article__btn" onClick={() => setRead(true)}>
            {lang.markReadButton}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isShow ? lang.close : lang.readButton}
          </button>
          <button className="article__btn" onClick={() => setRead(false)}>
            {lang.markUnreadButton}
          </button>
        </div>
      </div>
      <div className="lang">
        <button className="lang-btn" onClick={() => setLang(UA)}>
          UA
        </button>
        <button className="lang-btn" onClick={() => setLang(EN)}>
          EN
        </button>
      </div>
    </div>
  );
}
export default App;
