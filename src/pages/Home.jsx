import Slider from "../components/Slider";
import "../styles/Home.css";
import {
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaHeartbeat,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <Slider />

      {/* <section className="features">
        <div className="feature">
          <FaStethoscope size={50} color="#295590" />
          <p>Vorsorgeuntersuchungen</p>
        </div>
        <div className="feature">
          <FaUserMd size={50} color="#295590" />
          <p>Häusliche Versorgung</p>
        </div>
        <div className="feature">
          <FaHospital size={50} color="#295590" />
          <p>Diagnostik</p>
        </div>
        <div className="feature">
          <FaHeartbeat size={50} color="#295590" />
          <p>Krankheitsbilder</p>
        </div>
      </section> */}

      {/* Willkommen-Text-Bereich */}
      <section className="welcome-section">
  

  <div className="text-container">
    <h2>
    Wir sind bald für Sie da!

Unsere Website befindet sich aktuell im Aufbau. Wir arbeiten mit Hochdruck daran, Ihnen bald ein ansprechendes und informatives Online-Erlebnis bieten zu können. <br/>In der Zwischenzeit können Sie dennoch bequem online einen Termin bei DoctoLib vereinbaren.

<br/>Vielen Dank für Ihr Verständnis – bleiben Sie gespannt!


      
    </h2>

    
  </div>
</section>



      {/* Zitat-Bereich */}
      <section className="quote-section">
        <div className="quote-box">
          <p>
            „Es ist der größte Reichtum, gesund zu sein. In einem gesunden
            Körper wohnt ein glücklicher Geist.“
          </p>
          <span>– Deutsches Sprichwort</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
