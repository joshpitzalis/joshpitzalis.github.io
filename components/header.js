import Link from "next/link";

export default () => (
  <header>
    <div className="wrapper sans-serif">
      <div className="logotype">
        <svg
          height="16"
          viewBox="0 0 74 16"
          width="74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m415.000592 351.055335c0 1.785343-1.876899 2.959885-3.540809 2.235935-2.792849-1.215596-4.500756-3.777959-5.949678-5.950811-1.891898-2.837724-3.071834-4.443832-5.315713-4.443832-2.242878 0-3.422815 1.606108-5.314712 4.443832-1.977893 2.966894-4.44076 6.659741-9.490487 6.659741-5.047728 0-7.508595-3.692847-9.485488-6.659741-1.889897-2.837724-3.068834-4.443832-5.308713-4.443832-2.241879 0-3.421815 1.606108-5.312713 4.443832-1.976893 2.966894-4.43876 6.659741-9.487487 6.659741-5.047727 0-7.508594-3.692847-9.484487-6.659741-1.420923-2.131798-2.438868-3.567682-3.806794-4.151449-.912951-.38851-1.502919-1.266662-1.502919-2.242944 0-1.785343 1.877898-2.960886 3.540809-2.235934 2.790849 1.216597 4.496757 3.777958 5.943678 5.949809 1.890898 2.838726 3.069834 4.443832 5.309713 4.443832 2.241879 0 3.420815-1.605106 5.312713-4.443832 1.976893-2.966894 4.43776-6.659741 9.487487-6.659741 5.047727 0 7.508594 3.692847 9.485488 6.659741 1.889897 2.838726 3.068834 4.443832 5.308713 4.443832 2.243878 0 3.423815-1.606108 5.316712-4.443832 1.977893-2.967895 4.43876-6.659741 9.488487-6.659741 5.050727 0 7.511594 3.691846 9.489487 6.659741 1.421924 2.132799 2.441868 3.569685 3.812794 4.15245.912951.387509 1.503919 1.266662 1.503919 2.242944"
            fill="#85af4b"
            fillRule="evenodd"
            transform="translate(-341 -338)"
          />
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
          <Link href="/">
            <a>Work</a>
          </Link>
          <Link href="/hire">
            <a>Hire Me</a>
          </Link>
          <Link href="/now">
            <a>Now</a>
          </Link>
          <Link href="http://learninglog.svbtle.com">
            <a>Blog</a>
          </Link>
          {/* <Link href="https://twitter.com/joshpitzalis">
            <a target="_blank">@joshpitzalis</a>
          </Link> */}
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
