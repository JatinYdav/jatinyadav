import React from "react";
import "../components css/MainContent.css";
import MemoCSS from "../svgs component/CSS";
import MemoDemonSlayer from "../svgs component/DemonSlayer";
import MemoFigmaDark from "../svgs component/FigmaDark";
import MemoHTML from "../svgs component/HTML";
import MemoJavaScript from "../svgs component/JavaScript";
import MemoMySQLDark from "../svgs component/MySQLDark";
import MemoNodeJSDark from "../svgs component/NodeJSDark";
import MemoReactDark from "../svgs component/ReactDark";
import MemoVSCodeDark from "../svgs component/VSCodeDark";
import MemoMyPhoto from "../svgs component/MyPhoto";

const MainContent = () => {
  return (
    <div className="maincontentwrapper">
      <h1 className="titleofbox">Just Me:</h1>
      <div className="box1">
        <div className="subbox1">
          <article className="container1">
            <h1>Know Me:</h1>
            <p>
              Hey , it’s me ! I am a self - taught & evolving programmer. I love
              to have a long talks as long as there are some good snacks. Also ,
              I am a high school student who is still figuring out colleges &
              finds it hard. The thought of AI destroying humans in near future
              constantly entertains me. If you are looking to forward to talk
              about anything relatable go ahead and message me on one of my
              socials above . I don’t mind having new friends. (Wink Emoji){" "}
            </p>
          </article>
        </div>
        <div className="subbox2">
          <article className="container2">
            <a
              class="twitter-timeline"
              data-height="302"
              data-width="508"
              data-theme="dark"
              data-chrome="noscrollbar"
              href="https://twitter.com/Jatin_ydav?ref_src=twsrc%5Etfw"
            >
              Tweets by Jatin_ydav
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </article>
          <article className="container3">
            <h1>Go-to Languages & Tools</h1>
            <div className="langicons">
              <article className="iconsdiv1">
                <MemoJavaScript />
                <MemoFigmaDark />
                <MemoMySQLDark />
                <MemoNodeJSDark />
                <MemoVSCodeDark />
              </article>
              <article className="iconsdiv2">
                <MemoHTML />
                <MemoCSS />
                <MemoVSCodeDark />
              </article>
            </div>
          </article>
        </div>
      </div>
      <div className="box2">
        <div className="subbox3">
          <article className="container4">
            <p>
              Currently I am learning Next-Js framework. Started from web
              development basics like everyone & holding steady at an
              intermediate level right now. Always learning new things , happy
              to have friend like mohitya.dev who constantly pushes me forward.
              Hoping to build some cool apps in the near future and crawl up
              this ladder.{" "}
            </p>
          </article>
          <div className="subbox3division">
            <article className="container5">
              <MemoMyPhoto />
            </article>
            <article className="container6">
              <iframe
                style={{
                  borderRadius: "35.85px!important",
                }}
                src="https://open.spotify.com/embed/track/2OXUK0Lwgv5Y9M5m8bI9Af?utm_source=generator&theme=0"
                width="379"
                height="351"
                frameBorder="0"
                scrolling="no"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </article>
          </div>
        </div>
        <div className="subbox4">
          <MemoDemonSlayer />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
