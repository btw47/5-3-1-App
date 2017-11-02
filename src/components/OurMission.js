import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import chart from '../images/comp-app-chart.PNG';
import MyPieChart from "./PieChart";
import { Fade} from 'react-reveal';

import '../css/App.css';

class OurMission extends Component {
  render() {
    return (
      <div className="hometext">
        <div className="mission">
          // <img className="chart-img" src={chart} alt="" />
          <Fade duration={5000}>
          <MyPieChart />
          </Fade>
          </div>

          <Fade duration={5000}>
          <h2>Our Mission</h2>
        <p>
          We saw there were a lot of differentt apps out there for 5/3/1 but
          most of them are just logs of your workouts instead of a full
          intergrated app that the user interacts with on a daily basis tracking
          every step of the way and adding a social aspect to the community so
          people can talk about their different routines and eating habbits. The
          5/3/1 Strength Training Program by Wendler is one of the most proven
          strength training programs available. My developement team wanted to
          take the core principles of 5/3/1 and jam them into an intuitive app.
          We also added some interactive features to keep you motivated, such as
          personal progress charts and chat forums. This 5/3/1 App does all the
          heavy thinking for you, so that you can focus on the heavy lifting.
          Our app will calculate your 1 Rep Max, all we need to know is what
          days you'd like to workout and we'll develope your workout program for
          you. It's just that fucking easy. Now get to work and enjoy the 5/3/1
          gains.
        </p>
        <br />
        <h2>Our Vision</h2>
        <p>
          To provide the community with a training template app that follows the
          5/3/1 program principles Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Eorum enim omnium multa praetermittentium, dum
          eligant aliquid, quod sequantur, quasi curta sententia; Hanc quoque
          iucunditatem, si vis, transfer in animum; Duo Reges: constructio
          interrete. Ergo illi intellegunt quid Epicurus dicat, ego non
          intellego? Quicquid porro animo cernimus, id omne oritur a sensibus; A
          quibus propter discendi cupiditatem videmus ultimas terras esse
          peragratas. An hoc usque quaque, aliter in vita? Primum quid tu dicis
          breve? Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne
          refers? Idemne potest esse dies saepius, qui semel fuit? Teneo,
          inquit, finem illi videri nihil dolere. Si quidem, inquit, tollerem,
          sed relinquo. Color egregius, integra valitudo, summa gratia, vita
          denique conferta voluptatum omnium varietate. Quod autem principium
          officii quaerunt, melius quam Pyrrho; A mene tu? Piso, familiaris
          noster, et alia multa et hoc loco Stoicos irridebat: Quid enim? Tu
          autem negas fortem esse quemquam posse, qui dolorem malum putet. Eam
          tum adesse, cum dolor omnis absit; Sed quoniam et advesperascit et
          mihi ad villam revertendum est, nunc quidem hactenus; Ergo illi
          intellegunt quid Epicurus dicat, ego non intellego? Sed ea mala
          virtuti magnitudine obruebantur. Nos commodius agimus. Dolor ergo, id
          est summum malum, metuetur semper, etiamsi non aderit; Mihi, inquam,
          qui te id ipsum rogavi? Quae qui non vident, nihil umquam magnum ac
          cognitione dignum amaverunt. Et certamen honestum et disputatio
          splendida! omnis est enim de virtutis dignitate contentio.
        </p>
        </Fade>

      </div>
    );
  }
}

export default OurMission;
