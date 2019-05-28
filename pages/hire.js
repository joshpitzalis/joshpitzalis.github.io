import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "../components/header";

const propTypes = {};

const defaultProps = {};

export default function hire(props) {
  return (
    <main>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
        />
      </Head>
      <Header />

      <article class="sans-serif pa4">
        <blockquote class="ph0 f4 f1-ns measure-narrow center">
          <p class="fw9 lh-copy lh-title-ns">
            If you have an idea for a web application that changes the way
            people behave, I can help you build it.
          </p>
        </blockquote>
        <div className="tc">
          <Link href="https://calendly.com/joshpitzalis/20min">
            <a
              target="_blank"
              class="f6 link dim br-pill ba ph3 pv2 mt4 dib center"
              style={{ backgroundColor: "#86ae51", color: "white" }}
            >
              Book A Free Consultation
            </a>
          </Link>
        </div>
        <h2 class="f6 f4-ns lh-copy measure center mt6">
          How much does a web app cost and how long does it usually take to
          build?
        </h2>
        <p class="f6 f4-ns lh-copy measure center">
          Turning an idea into a web application usually costs between $10,000
          and $30,000 and takes about 3 months to build. This includes designing
          the application, building the application, testing it out with a group
          of people and then launching the platform. A particularly complex
          project can take longer. Conversely, if you have designs ready or want
          to test the app yourself then a project can become much cheaper. I can
          provide an exact quote and timeframe for the project once I
          understanding the idea and what needs to be done.
        </p>
        <h2 class="f6 f4-ns lh-copy measure center mt6">
          Will you sign a Non-disclosure Agreement to protect my idea?
        </h2>
        <p class="f6 f4-ns lh-copy measure center">
          Absolutely.{" "}
          <Link href="https://www.docracy.com/7271/non-disclosure-agreement">
            <a target="_blank" style={{ color: "#86ae51" }}>
              Here is a template
            </a>
          </Link>{" "}
          you can use if you don’t already have an agreement.
        </p>
        <h2 class="f6 f4-ns lh-copy measure center mt6">
          How does a project work? What it like working with you?
        </h2>
        <h3 class="f6 f4-ns lh-copy measure center fw3">
          STEP 1: Consultation
        </h3>
        <p class="f6 f4-ns lh-copy measure center">
          The first step is a quick consultation. I will listen to what you want
          to do and honestly tell you if it’s something I can help with. If it’s
          not I’ll do my best to connect you to someone who can.{" "}
        </p>
        <h3 class="f6 f4-ns lh-copy measure center fw3">STEP 2: Proposal</h3>
        <p class="f6 f4-ns lh-copy measure center">
          After a consultation, if we think we are a good fit for each other, I
          begin a project by putting a proposal together. I’ll need to ask you
          specific preliminary questions about the project. We can do this over
          a short Skype conversation or by email. Once I have understood what
          needs to be done, my proposal will outline how I can help solve your
          problem, what your options are, what my solution could look like, how
          much it will cost and how long it will take. Here are some examples or
          some of past proposals:
        </p>
        <ul class="f6 f4-ns lh-copy measure center">
          <li>
            <Link href="http://palpoll.surge.sh">
              <a target="_blank" style={{ color: "#86ae51" }}>
                This architecture for a polling application
              </a>
            </Link>
          </li>
          <li>
            <Link href=" http://templetree.surge.sh">
              <a target="_blank" style={{ color: "#86ae51" }}>
                This design for a wildlife souvenir shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="http://joshpitzalis.github.io/beeProposal">
              <a target="_blank" style={{ color: "#86ae51" }}>
                This redesign of a commitment application
              </a>
            </Link>
          </li>
        </ul>
        <p class="f6 f4-ns lh-copy measure center">
          Each proposal is unique but I usually include a wire flows for the
          entire system so that you can see how many screens there are and how
          they connect to each other, wireframes for one or two pages and then
          the final design of one screen so that you can picture how it would
          look and feel.
        </p>{" "}
        <p class="f6 f4-ns lh-copy measure center">
          Proposals cost $500 and they take 10 days to 2 weeks to develop. I
          charge for proposals because they are a lot of work. Moreover, they
          are not templates, they are custom solutions to each project I work
          on. If you decide not to work with me after I submit my proposal, for
          whatever reason, then you have paid for the proposal and you own all
          the ideas and designs within. You are free to take the project spec to
          another developer, modify it in any way, and have them build the
          project.
        </p>{" "}
        <p class="f6 f4-ns lh-copy measure center">
          If hire me for the project I will prepare a standard freelance
          contract for you to review and prepare an invoice for the first
          milestone. Each milestone is paid for in advance.
        </p>
        <h3 class="f6 f4-ns lh-copy measure center fw3">STEP 3: Milestones</h3>
        <p class="f6 f4-ns lh-copy measure center">
          If you decide to hire me for the project then each milestone will be
          outlined in the proposal along with each milestone deliverable and
          deadline. I proceed according to the project outline and provide
          updates on a weekly schedule. Once a milestone is complete, the work
          must be approved and payment for that milestone must be complete
          before the next milestone begins.
        </p>
        <h3 class="f6 f4-ns lh-copy measure center fw3">
          STEP 4: The Project case study
        </h3>
        <p class="f6 f4-ns lh-copy measure center">
          After each project, I will take some time to write a project case
          study that goes everything I learned during our project. I outline
          what the why of the project, what challenges were, things I learned,
          what I would do differently next time, and what the final outcome was.
          You do not need to pay for the final milestone until I produce a case
          study of the project. This gives us each a little time to reflect on
          the project, and space to try the platform out before the project is
          complete. Here are some examples or some of past case studies:
        </p>
        <ul class="f6 f4-ns lh-copy measure center">
          <li>
            <Link href="http://learninglog.svbtle.com/barsoom">
              <a target="_blank" style={{ color: "#86ae51" }}>
                Barsoom | A Website Design and Marketing Campaign Case Study
              </a>
            </Link>
          </li>

          <li>
            <Link href="http://learninglog.svbtle.com/panda">
              <a target="_blank" style={{ color: "#86ae51" }}>
                When Pandas Attack | A Website Design and Promotion Case Study
              </a>
            </Link>
          </li>
        </ul>
        <h2 class="f6 f4-ns lh-copy measure center mt6">
          Do you offer continued support?{" "}
        </h2>
        <p class="f6 f4-ns lh-copy measure center">
          There is no continued support or maintenance after the project is
          complete. The application will be fully tested before it is deployed.
        </p>{" "}
        <p class="f6 f4-ns lh-copy measure center">
          I spend a lot of time writing a complete suite of tests for each
          project I deliver. I also spend time testing the platform with a small
          group of test users before the project begins. I encourage you to use
          the app during this phase and report as many bugs as you can. If there
          are any bugs after deployment, I take full responsibility for the
          problem and fix it (provide the source code has not been modified and
          none of the APIs have changed).{" "}
        </p>{" "}
        <p class="f6 f4-ns lh-copy measure center">
          If you would like to hire me for changes or to build additional
          features after the project is complete it would be as a separate
          project.
        </p>
        <h2 class="f6 f4-ns lh-copy measure center mt6">
          So how do I work with you?
        </h2>
        <p class="f6 f4-ns lh-copy measure center">
          You’re interested in working with me? That's great. Well, I’m looking
          forward to meeting you, learning more about your project. The easiest
          way to get started is to book a consultation. They're free and they're
          short, about 20 minutes or so. I will listen to you and then honestly
          tell you if its something I can help with. If it’s not I’ll do my best
          to connect you to someone who can.
        </p>
        <div className="tc">
          <Link href="https://calendly.com/joshpitzalis/20min">
            <a
              target="_blank"
              class="f6 link dim br-pill ba ph3 pv2 mt4 dib center"
              style={{ backgroundColor: "#86ae51", color: "white" }}
            >
              Book A Free Consultation
            </a>
          </Link>
        </div>
        <h2 class="f6 f4-ns lh-copy measure center mt6">
          If you prefer email please write to{" "}
          <Link href="mailto:joshpitzalis@gmail.com">
            <a target="_blank" style={{ color: "#86ae51" }}>
              joshpitzalis@gmail.com
            </a>
          </Link>
        </h2>
      </article>
    </main>
  );
}

hire.propTypes = propTypes;
hire.defaultProps = defaultProps;
