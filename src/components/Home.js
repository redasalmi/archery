import React from "react";
import { Row } from "reactstrap";

const Home = () => {
  return (
    <div className="m-4">
      <Row>
        <div className="col-12 col-lg-6">
          <h2 className="text-primary">ARCHERY</h2>
          <blockquote className="blockquote">
            <p>
              Archery is the practice or skill of using a bow to shoot arrows.
              Historically, archery has been used for hunting and combat. In
              modern times, it is mainly a competitive sport and recreational
              activity. A person who participates in archery is typically called
              an <i> archer</i>. As a sport, archery requires skills of
              precision, control, focus, repetition and determination. It is
              available to be practised by all, no matter age, gender or
              ability, and is a widespread pastime in both developed and
              developing countries.
            </p>
            <footer className="blockquote-footer">
              Definition of Archery by <cite>Wikipedia</cite>
            </footer>
          </blockquote>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <figure>
            <img
              src="/src/img/home/archery_compet.jpg"
              alt="archers"
              className="img-fluid border border-secondary mt-lg-5"
            />
            <figcaption>Archery Competition</figcaption>
          </figure>
        </div>
      </Row>

      <Row>
        <div className="col-12 col-sm-8">
          <h2 className="text-primary">WORLD ARCHERY</h2>
          <p>
            The World Archery Federation (WA, also and formerly known as FITA
            from the French Fédération Internationale de Tir à l'Arc) is the
            governing body of the sport of archery. It is based in Lausanne,
            Switzerland. It is composed of 156 national federations and other
            archery associations, and is recognised by the International Olympic
            Committee.
          </p>
        </div>
        <div className="col-12 col-sm-4 text-center">
          <figure>
            <img
              src="/src/img/logo/world_archery_logo.png"
              alt="world archery logo"
              width="150px"
            />
            <figcaption>World Archery Logo</figcaption>
          </figure>
        </div>
      </Row>

      <Row>
        <h2 className="col-12 text-primary">DISCIPLINES</h2>
        <div className="col-12">
          <h4 className="text-info">TARGET ARCHERY</h4>
          <p>
            Target archery is the most recognisable format of modern archery. It
            takes place both outdoors and indoors, over distances of up to 90
            metres and using the traditional five-colour, 10-ring target.
            International target archery includes two bowstyles: recurve and
            compound. Recurve target archery is included on the Olympic
            Programme, compound target archery is featured at the World Games
            and both are included in the Paralympic Games.
          </p>
        </div>
        <div className="col-12 text-center">
          <Row>
            <figure className="col-6 col-lg-3">
              <img
                src="/src/img/home/indoor_target.png"
                height="200px"
                alt="indoor target"
                className="img-fluid border border-secondary indoor"
              />
              <figcaption>Indoor Target Face</figcaption>
            </figure>
            <figure className="col-6 col-lg-3">
              <img
                src="/src/img/home/outdoor_target.png"
                height="200px"
                alt="outdoor target"
                className="img-fluid border border-secondary p-1 indoor"
              />
              <figcaption>Outdoor Target Face</figcaption>
            </figure>
            <figure className="col-12 col-lg-6">
              <img
                src="/src/img/home/indoor_compete.jpg"
                height="200px"
                alt="indoor competition"
                className="img-fluid indoor"
              />
              <figcaption>Indoor Archery Competition</figcaption>
            </figure>
          </Row>
        </div>
      </Row>

      <Row className="mt-5">
        <div className="col-12 col-lg-6">
          <h4 className="text-info">PARA ARCHERY</h4>
          <p>
            Para archery competitions, both indoor and outdoor, are target
            archery events for athletes with impairments that classify them for
            one of World Archery’s para athlete categories: open, W1 and
            visually impaired. Archery was featured in the first Paralympic
            Games in 1960 and has been at every one since. The World Archery
            Para Championships is held every two years. Archery is open to
            athletes with a physical impairment, who may shoot with assistive
            devices allowed under classification rules, if required. Para
            archery competition, which includes specific competition categories
            for athletes with certain classifications, is an integral part of
            the Paralympic Games.
          </p>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <figure>
            <img
              src="/src/img/home/para_archery.jpg"
              alt="para archers"
              className="img-fluid para_pic"
            />
            <figcaption>Para Archery Competition</figcaption>
          </figure>
        </div>
      </Row>

      <Row className="mt-5">
        <div className="col-12 col-lg-6">
          <h4 className="text-info">FIELD ARCHERY</h4>
          <p>
            Field archery is often compared to golf as athletes shoot a course
            of targets laid around an open area, often in the countryside, in
            woods or around mountains and usually at target faces of black and
            gold. The discipline requires some additional skills, such as the
            ability to shoot up and downhill, across slopes and judge distances.
            Field archery is included in the World Games. The World Archery
            Field Championships are held every two years. International field
            archery includes three bowstyles: recurve, compound and barebow.
            Field archery is included in the programme of the World Games for
            recurve and barebow athletes (along with compound target archery).
          </p>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <figure>
            <img
              src="/src/img/home/field_archery.jpg"
              alt="field archery"
              className="img-fluid para_pic"
            />
            <figcaption>Field Archery Competition</figcaption>
          </figure>
        </div>
      </Row>

      <Row className="mt-4">
        <p className="col-12 lead">
          There is a lot more to Archery than this brief introduction, if you
          want to know more about it, please follow this link to the{" "}
          <a
            href="https://worldarchery.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            World Archery
          </a>{" "}
          website.
        </p>
      </Row>
    </div>
  );
};

export default Home;
