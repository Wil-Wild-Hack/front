import "./App.css";
import OneForm from "./OneForm";

const Home = () => {
  return (
    <div>
      <div class="nav-container">
        <div class="wrapper">
          <nav>
            <div class="logo">Inseption</div>
          </nav>
        </div>
      </div>
      <div class="header-container">
        <div class="wrapper">
          <header>
            <div className="hero-content">
              <h1>
                Дикуй: <br />
                нове хобі
                <br />в один клік
              </h1>
              <p>
                Завантаж фото в повний ріст і <br />
                "приміряй на себе" будь-яке хобі в згенерованих відео.
              </p>
              <OneForm />
            </div>
            <div class="hero-image">
              <img src="dancing.png" alt="" />
              <img src="dancing.png" alt="" />
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Home;
