import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-16 pb-4">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-12 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/footer-logo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-8 wow fadeInLeft delay-0-2s animated">
                <a href="https://t.me/Easy_Trader_Investments" target="_blank">
                  <i className="fab fa-telegram" /> <span>Telegram</span>
                </a>
                <a href="mailto:longjia.zhang@outlook.com" target="_blank">
                  <i className="fab fa-mail" /> <span>longjia.zhang@outlook.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-16">
              <div className="lets-work mb-16 wow fadeInUp delay-0-2s animated">
                <img
                  src="assets/images/footer/lets-work.png"
                  alt="Let's Work Man"
                />
                <span>快来加入我吧！</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="mailto:longjia.zhang@outlook.com"
                  target="_blank"
                >
                  longjia.zhang@outlook.com <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="https://t.me/Easy_Trader_Investments"
                  target="_blank"
                >
                 <i className="fab fa-telegram" />&nbsp; Easy_Trader <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                相关链接
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <Link legacyBehavior href="/">
                      首页
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="cbots">
                      量化策略
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="about">
                      关于我们
                    </Link>
                  </li>
                </ul>
                {/* <ul className="list-style-two wow fadeInUp delay-0-4s animated">
                  <li>
                    <Link legacyBehavior href="index">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index2">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index3">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Need a Career
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="faqs">
                      Faqs ?
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu pt-12 pb-8 rpb-0 wow fadeInRight delay-0-2s animated">
                <ul>
                  <li>
                    <Link legacyBehavior href="/">
                      首页
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>关于我们</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-12 pb-8 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright @2024,{" "}
                  <Link legacyBehavior href="/">
                    <a>Quant Home</a>
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
