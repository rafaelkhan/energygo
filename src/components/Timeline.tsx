import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import rafaelImage from '../assets/images/rafael.jpg'; // Bild für Rafael
import ferhatImage from '../assets/images/ferhat.jpg'; // Bild für Ferhat

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>About Us</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }} 
            iconStyle={{ background: 'transparent' }} /* Hintergrundfarbe entfernt */
            icon={<img src={rafaelImage} alt="Rafael Khan" className="timeline-icon" />}
          >
            <h3 className="vertical-timeline-element-title">Rafael Khan</h3>
            <h4 className="vertical-timeline-element-subtitle">Technologie-Enthusiast & Innovator</h4>
            <p>Rafael Khan ist Mitgründer und CEO, dessen Leidenschaft für nachhaltige Technologie und effiziente Systeme ihn dazu bewegt hat, neue Wege im Bereich der Powerbank-Automaten zu beschreiten. Mit einem Hintergrund als Wirtschaftsingenieur und Softwarearchitekt kombiniert er technisches Know-how mit einem unternehmerischen Geist. Sein Ziel: innovative Lösungen zu schaffen, die Menschen den Alltag erleichtern und Unternehmen einen echten Mehrwert bieten.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'transparent' }} /* Hintergrundfarbe entfernt */
            icon={<img src={ferhatImage} alt="Ferhat Faruk" className="timeline-icon" />}
          >
            <h3 className="vertical-timeline-element-title">Ferhat Faruk</h3>
            <h4 className="vertical-timeline-element-subtitle">Visionär & Technologieführer</h4>
            <p>Chief Operating Officer</p>
            <p>Ferhat Faruk ist Mitgründer und COO, angetrieben von der Vision, innovative Technologien für den alltäglichen Gebrauch zugänglich zu machen. Mit fundierter Erfahrung im Projektmanagement und einer starken Affinität zu kundenorientierten Lösungen bringt er frische Ideen und operative Exzellenz ins Unternehmen. Sein Fokus liegt darauf, Partnerschaften zu fördern und maßgeschneiderte Lösungen zu entwickeln, die den Bedürfnissen von Unternehmen und deren Kunden gerecht werden.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
