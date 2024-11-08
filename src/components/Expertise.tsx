import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faBolt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Unser Vorhaben</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBatteryFull} size="3x"/>
                    <h3>Verbesserte Kundenerfahrung</h3>
                    <p>Begeistern Sie Ihre Gäste, indem Sie ihnen jederzeit eine mobile Ladelösung bieten.</p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBolt} size="3x"/>
                    <h3>Innovation ohne Aufwand</h3>
                    <p>Unser Powerbank-Service integriert sich nahtlos in Ihren Betrieb und erfordert nur minimale Verwaltung.</p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHandshake} size="3x"/>
                    <h3>Bindung und Sichtbarkeit</h3>
                    <p>Werden Sie Teil eines innovativen Netzwerks und steigern Sie die Zufriedenheit Ihrer Gäste durch ein modernes Angebot.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
