import React from "react";
import Ellipse from "../svgs component/Ellipse";
import "../components css/InfoBox.css";
import MemoTwitterlogo from "../svgs component/Twitterlogo";
import MemoInstagramlogo from "../svgs component/Instagramlogo";
import MemoLinkedinlogo from "../svgs component/Linkedinlogo";
import MemoDiscordlogo from "../svgs component/Discordlogo";

const InfoBox = () => {
  return (
    <div className="infobox">
      <div className="namebox">
        <article className="photobox">
          <Ellipse />
        </article>

        <article className="photoinfo">
          <h1>Jatin Yadav</h1> <h2>Mutating but backwards</h2>
          <h2>Click Here</h2>
        </article>
      </div>
      <div className="socialbox">
        <a href="https://twitter.com/Jatin_ydav" target="_blank" className="socialanchor">
          <div className="social item1">
            <article className="socialicon">
              <MemoTwitterlogo />
            </article>
            <article className="socialinfo">
              <h1 className="tag">@Jatin_ydav</h1>
              <h2 className="tagdata">
                <span>1 follower</span>
                <span>17 following</span>
              </h2>
            </article>
          </div>
        </a>
        <a href="https://www.instagram.com/ydav_jatin/" target="_blank" className="socialanchor">
          <div className="social item2">
            <article className="socialicon">
              <MemoInstagramlogo />
            </article>

            <article className="socialinfo">
              <h1 className="tag">@ydav_jatin</h1>
              <h2 className="tagdata">
                <span>8 follower</span>
                <span>8 following</span>
              </h2>
            </article>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jatin-yadav-681811245/"
          target="_blank" className="socialanchor"
        >
          <div className="social item3">
            <article className="socialicon">
              <MemoLinkedinlogo />
            </article>

            <article className="socialinfo">
              <h1 className="tag">Jatin Yadav</h1>
              <h2 className="tagdata">
                <span>0 follower</span>
                <span>2 Interests</span>
              </h2>
            </article>
          </div>
        </a>
        <a href="https://discord.com/channels/@ICY#0131" target="_blank" className="socialanchor">
          <div className="social item4">
            <article className="socialicon">
              <MemoDiscordlogo />
            </article>

            <article className="socialinfo">
              <h1 className="tag">ICY #0131</h1>
              <h2 className="tagdata">
                <span>Anytime</span>
              </h2>
            </article>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InfoBox;
