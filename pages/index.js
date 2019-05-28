import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Image from "../components/image";
if (typeof window !== "undefined") {
  require("typeform-elements/dist/embed");
}
export default () => {
  return (
    <main>
      <Head>
        <title>Josh Pitzalis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="white" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joshpitzalis" />
        <meta name="twitter:creator" content="@joshpitzalis" />
        <meta name="twitter:title" content="Josh Pitzalis" />
        <meta
          name="twitter:description"
          content="Using web tech for behaviour change."
        />
        <meta
          name="twitter:image"
          content="https://www.joshpitzalis.com/static/og-image.png"
        />
        <meta property="og:title" content="Josh Pitzalis" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Using web tech for behaviour change."
        />
        <meta property="og:url" content="https://www.joshpitzalis.com" />
        <meta
          property="og:image"
          content="https://www.joshpitzalis.com/static/og-image.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      </Head>

      <Header />
      <section className="intro">
        <h1>
          <b>Using the web to change behaviour.</b>
          {/* <b>Using web tech to change behaviour.</b> */}
        </h1>
        <h3 style={{ margin: "40px 0 0 0" }}>
          <b style={{ color: "#86ae51" }}> Josh Pitzalis </b>| Software
          Consultant
        </h3>
        <div className="line" />
      </section>
      <section className="project">
        <div className="zeit">
          <div className="wrapper">
            <h4>Prolifiko</h4>
            <h2>
              <b>Helping writers write more.</b>
            </h2>
            <Link href="https://prolifiko.com/">
              <a target="_blank">View Site</a>
            </Link>
            <Image
              src="../static/prolifiko.png"
              width={2800 / 2.25}
              height={1600 / 2.25}
              margin={0}
            />
            <div className="cssda">
              <div
                className="image"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  src={`../static/becEvans.png`}
                  width={150 / 2}
                  height={150 / 2}
                  round
                />
                <br />
                <Image
                  src={`../static/chrisSmith.jpg`}
                  width={150 / 2}
                  height={150 / 2}
                  round
                />
              </div>

              <div className="award">
                <h3>
                  <b>
                    “We hired Josh together with a small group of freelancers to
                    build a prototype app for us in a week. They did it! And, we
                    are delighted with the results. Josh was a delight to work
                    with; always cooperative, creative, responsive and
                    technically excellent at his job - went above and beyond. I
                    wouldn’t hesitate to recommend him to anyone.”
                  </b>
                </h3>
                <p>
                  <Link href="https://twitter.com/Eva_Bec">
                    <a target="_blank">Bec Evans</a>
                  </Link>{" "}
                  &{" "}
                  <Link href="https://twitter.com/word_smiths">
                    <a target="_blank">Chris Smith</a>
                  </Link>
                  , Co-founders of Prolifiko.
                </p>
              </div>
              <div className="date">
                <p>JUL 2015</p>
                <p>Design & Development work.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="now-desktop">
          <div className="wrapper">
            <div className="meta">
              <h4>BEEMINDER</h4>
              <h2>
                <b>Follow through on goals or lose money.</b>
                {/* <b>Stick to your goals or lose money.</b> */}
              </h2>
              <Link href="https://www.beeminder.com">
                <a target="_blank">View Site</a>
              </Link>
            </div>
            <Image
              src="../static/beeminder.png"
              width={2800 / 2.25}
              height={1600 / 2.25}
              margin={0}
            />

            <div className="cssda">
              <div
                className="image"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Image
                  src={`../static/danielReeves.png`}
                  width={150 / 2}
                  height={150 / 2}
                  round
                />
              </div>

              <div className="award">
                <h3>
                  <b>
                    “Josh was wonderfully thoughtful about the tradeoffs
                    (newbees vs power users) and did many user tests to single
                    out problem areas in the old design, and to test out the
                    mockups of the new design.”
                  </b>
                </h3>
                <p>
                  <Link href="https://twitter.com/dreev">
                    <a target="_blank">Daniel Reeve</a>
                  </Link>{" "}
                  , Co-founder of Beeminder.
                </p>
              </div>
              <div className="date">
                <p>JUL 2015</p>
                <p>Design work.</p>
                <Link href="https://blog.beeminder.com/josh/">
                  <a target="_blank">Case Study</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hyper">
          <div className="wrapper">
            <div className="meta">
              <h4>PATH</h4>
              <h2>
                <b>Bookmark online courses and upskill.</b>
                {/* <b>Build your own curriculum and schedule time to Upskill.</b> */}
              </h2>
              <Link href="https://path-1ba3e.firebaseapp.com">
                <a target="_blank">View Site</a>
              </Link>
            </div>
            <Image
              src={`../static/path.png`}
              width={2800 / 2.25}
              height={1700 / 2.25}
              margin={0}
            />
          </div>
        </div>
      </section>
      {/* <Typeform /> */}
      <typeform-standard url="https://joshpitzalis.typeform.com/to/hxjToF" />
      <footer
        style={{
          height: "1rem",
          backgroundColor: "black",
          color: "#86ae51",
          textAlign: "center",
          padding: "2rem "
        }}
      >
        <small> 2014 - 2019 © Josh Pitzalis</small>
      </footer>
      <style jsx>{`
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        a {
          color: #86ae51;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border 0.2s ease;
        }
        a :hover {
          border-bottom: 1px solid #86ae51;
        }
        .award {
          text-align: left;
          max-width: 400px;
          border-right: 1px solid #eaeaea;
          padding-left: 50px;
          padding-right: 50px;
        }
        b {
          font-weight: 600;
        }
        .cssda {
          display: flex;
          justify-content: center;
          margin-top: -50px;
        }

        .date {
          text-align: left;
          padding-left: 50px;
        }
        .electron {
          display: flex;
          justify-content: center;
        }
        .guardian {
          display: flex;
          justify-content: center;
          max-width: 100%;
          padding-bottom: 50px;
          padding-top: 150px;
          text-align: center;
          border-bottom: 1px solid #eaeaea;
        }
        .hackernews {
          display: flex;
          justify-content: center;
        }
        h1 {
          font-size: 6.25em;
          font-weight: 300;
          margin: 0;
        }
        h2 {
          font-size: 3.375em;
          margin: 0 0 10px 0;
        }
        h3 {
          font-size: 1.625em;
          font-weight: 300;
          margin: 0;
        }
        h4 {
          margin: 0;
        }
        .hyper {
          display: flex;
          justify-content: center;
          max-width: 100%;
          padding-bottom: 150px;
          padding-top: 150px;
          text-align: center;
          border-bottom: 1px solid #eaeaea;
        }
        .hyper-icon {
          margin-top: -75px;
          margin-bottom: 50px;
        }
        .sharelock {
          background: #fafbfc;
          display: flex;
          justify-content: center;
          max-width: 100%;
          padding-bottom: 150px;
          padding-top: 150px;
          text-align: center;
          border-bottom: 1px solid #eaeaea;
        }
        .intro {
          max-width: 980px;
          padding: 0 30px;
        }
        .line {
          border-left: 1px solid transparent;
          height: 100px;
          margin: 0 auto;
          margin-top: 100px;
        }
        .line-through {
          text-decoration: line-through;
        }
        main {
          animation: fadein 2s;
        }
        .meta {
          margin-bottom: 50px;
        }
        .now-desktop {
          background: #fafbfc;
          display: flex;
          justify-content: center;
          max-width: 100%;
          padding-bottom: 150px;
          padding-top: 150px;
          text-align: center;
          border-bottom: 1px solid #eaeaea;
        }
        p {
          font-size: 0.875em;
          line-height: 1.5em;
        }
        .project {
          height: auto;
        }
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
          margin: auto;
        }
        .wrapper {
          max-width: 980px;
        }
        .zeit {
          display: flex;
          justify-content: center;
          max-width: 100%;
          padding-bottom: 150px;
          text-align: center;
          border-bottom: 1px solid #eaeaea;
        }
        @media screen and (max-width: 1200px) {
          .award {
            border-right: none;
            padding-left: 20px;
            padding-right: 20px;
            text-align: center;
            margin: auto;
          }
          .date {
            text-align: center;
            padding-left: 0;
          }
          .cssda {
            flex-direction: column;
          }
          .electron {
            flex-direction: column;
          }
          .electron .image {
            transform: scale(0.75);
            margin-bottom: 10px;
          }
          .electron .date {
            margin-bottom: 75px;
          }
          .guardian {
            padding-bottom: 0;
            padding-top: 75px;
          }
          .hackernews {
            flex-direction: column;
          }
          .hackernews .date {
            margin-bottom: 75px;
          }
          .hackernews .image {
            transform: scale(0.75);
            margin-bottom: 10px;
          }
          .hyper-icon {
            margin-top: 0;
          }
          .image {
            width: 150px;
            margin: 0 auto;
          }
          .hyper {
            padding-bottom: 0;
            padding-top: 75px;
          }

          .intro {
            margin-top: 100px;
          }
          .now-desktop {
            padding-bottom: 0;
            padding-top: 75px;
          }
          .sharelock {
            padding-bottom: 0;
            padding-top: 75px;
          }
          .line {
            margin-bottom: 100px;
          }
          .wrapper {
            width: 100vw;
          }
          .zeit {
            padding-bottom: 50px;
          }
        }
        @media screen and (max-width: 992px) {
          .line {
            display: none;
          }
          .intro {
            border-bottom: 1px solid #eaeaea;
            margin-bottom: 150px;
            padding-bottom: 150px;
          }
          section {
            height: auto;
          }
        }
        @media screen and (max-width: 576px) {
          h1 {
            font-size: 12vw;
          }
          .intro {
            margin-bottom: 100px;
            margin-top: 50px;
            margin-bottom: 100px;
            padding-bottom: 100px;
          }
        }
      `}</style>
      <style global jsx>{`
        ::selection {
          background: #000;
          color: #fff;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          margin: 0;
        }
      `}</style>
    </main>
  );
};
