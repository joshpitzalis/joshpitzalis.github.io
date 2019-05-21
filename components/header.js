import Link from "next/link";

export default () => (
  <header>
    <div className="wrapper">
      <div className="logotype">
        {/* <b>Josh</b> Pitzalis */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-zap"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
      {/* <div className="navigation">
        <Link href="https://twitter.com/evilrabbit_"><a target="_blank">Twitter</a></Link>
        <Link href="https://github.com/evilrabbit"><a target="_blank">GitHub</a></Link>
        <Link href="https://dribbble.com/evilrabbit"><a target="_blank">Dribbble</a></Link>
      </div> */}
      <div className="theme">
        {/* <p>2019</p> */}
        <p>
          <Link href="https://twitter.com/evilrabbit_">
            <a target="_blank">@joshpitzalis</a>
          </Link>
        </p>
      </div>
    </div>
    <style jsx>{`
      a {
        color: #000;
        margin-right: 20px;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border 0.2s ease;
      }
      a:last-child {
        margin-right: 0;
      }
      a :hover {
        border-bottom: 1px solid #000;
      }
      p {
        color: #999;
        margin: 0;
        font-size: 0.75em;
      }
      header {
        background: #fff;
        max-width: 100%;
        position: sticky;
        top: 0;
        z-index: 1;
      }
      .wrapper {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: auto;
        max-width: 980px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
      }
      @media screen and (max-width: 992px) {
        .navigation {
          display: none;
        }
      }
    `}</style>
  </header>
);
