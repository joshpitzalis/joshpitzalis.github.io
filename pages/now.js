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

      <article class="pa4 pa4-ns pl6-ns ml4-ns sans-serif">
        <h1 class="f3 f1-m f-headline-l">Now</h1>
        <ul class="measure lh-copy">
          <li>
            I am working on spaced-repetition learning application to help
            students memorise stuff.
          </li>
          <li>
            I am working on a project management tool to help small teams make
            better decisions.
          </li>
          <li>
            I am taking bookings for late June 2019. Here is{" "}
            <Link href="/hire">
              <a target="_blank" style={{ color: "#86ae51" }}>
                more on what it’s like working with me.
              </a>
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}

hire.propTypes = propTypes;
hire.defaultProps = defaultProps;
