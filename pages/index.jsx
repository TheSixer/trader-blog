import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section Start */}
      <section className="home-banner hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  <i>NeZha</i> <span className="block">QUANT</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                {/* <img src="assets/images/hero/hero-right.png" alt="Hero" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/banner/banner-home.jpg" alt="Hero" />
            <div className="hero-social">
              {/* <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#">
                <i className="fab fa-dribbble" /> <span>Dribbble</span>
              </a> */}
              <a href="#">
                <i className="fab fa-telegram" /> <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img
                  width={300}
                  style={{ borderRadius: 175 }}
                  src="assets/images/background/circle.png"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">关于量化</span>
                  <h2>
                    Our Main Goal to Satisficed Local &amp; Global Clients
                  </h2>
                </div>
                <div className="content">
                  <p>
                    利用数学模型、统计分析和计算机编程技术，通过对市场数据的系统化研究和分析，以及制定严格的交易规则和算法，来执行交易决策的一种交易方式
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      了解更多 <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/banner/banner.jpeg" alt="Hero" />
            <div className="hero-social">
              {/* <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#">
                <i className="fab fa-dribbble" /> <span>Dribbble</span>
              </a> */}
              <a href="#">
                <i className="fab fa-telegram" /> <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              风火轮 100X AI（FireWheel 100X AI） <span> And </span>
              混天绫1%（Hun Tian Ling 1%）
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <h2>风火轮 100X AI（FireWheel 100X AI）</h2>
                  <p className="sub-title">🔥 终极单边捕捉量化系统</p>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>策略目标</h5>
                    <p className="my-2">
                      精准识别单边行情，利用极端杠杆和浮盈加仓，实现 100 美金 →
                      10,000 美金的指数级收益增长
                    </p>
                    <Link legacyBehavior href="/">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>高质量的程序代码</h5>
                    <p className="my-2">
                      通过高效的编程，将交易策略转化为高质量的程序代码
                    </p>
                    <Link legacyBehavior href="/">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>核心优势</h5>
                    <p className="my-2">
                      采用深度强化学习（Deep Reinforcement Learning,
                      DRL）与市场动量智能追踪（Momentum
                      Intelligence），自动筛选最具爆发潜力的交易品种
                    </p>
                    <Link legacyBehavior href="/">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/fire-wheels.jpeg"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}

      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/huntianling.jpeg"
                  alt="What We Do"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <h2>混天绫1%（Hun Tian Ling 1%）</h2>
                  <p className="sub-title">
                    🌊 以柔克刚，稳定增长，每天1%的复利奇迹！
                  </p>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>多品种对冲交易</h5>
                    <p className="my-2">
                      组合外汇、大宗商品、指数等资产，分散市场风险
                    </p>
                    <Link legacyBehavior href="/">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>多策略并行运行</h5>
                    <p className="my-2">
                      结合 趋势跟随、均值回归、套利交易，适应不同市场环境。
                    </p>
                    <Link legacyBehavior href="/">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>大资金稳健运作</h5>
                    <p className="my-2">
                      通过 低杠杆+分批进场 控制回撤，确保稳定收益
                    </p>
                    <Link legacyBehavior href="/">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>04</span>
                  </div>
                  <div className="content">
                    <h5>智能动态风控</h5>
                    <p className="my-2">
                      采用 AI 风控系统，自动调整仓位和对冲比例，确保资金安全
                    </p>
                    <Link legacyBehavior href="/">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Service Style Three start */}
      <section className="service-three-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">我的量化策略</span>
                <h2>不定期更新量化策略程序，经得起实盘的检验</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>网格交易法</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon1.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>We denounce with righteous indignation dislike beguile</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>双均线&布林带扛震荡策略</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon2.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>At vero eos et accusamus et dignissim ducimbl ditiis</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>海龟交易策略</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon3.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>To take trivial example which ever undertakes laborious</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>马丁格尔交易策略</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon4.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>Sed persiciatis unde omnisey natus error voluptatem</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>策略</span> 回测效果
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">回测结果</span>
                <h2>
                  分享一下我的策略历史
                  <br />
                  回测数据
                </h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/projects">
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  查看更多 <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">01</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>网格策略回测2022-04-18至2024-03-07期间 WTI.f 品种</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                width={374}
                src="assets/images/backtesting/grid-result-01.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">02</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>PSD, Figma &amp; XD to HTML Design &amp; Development</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/project-timeline2.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">03</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>Mobile Application Design &amp; Development</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/project-timeline3.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Project Timeline Area end */}
      {/* Team Area start */}
      <section className="team-area pt-70 rpt-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">团队成员</span>
                <h2>我的小伙伴们</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
                <div className="image">
                  <img src="assets/images/team/member2.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>UI/UX Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/team/member3.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>James V. Decastro</h4>
                  <span>Senior Marketer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col">
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image">
                  <img src="assets/images/team/member4.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Troy V. Richardson</h4>
                  <span>Web Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/team/member5.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>Apps Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Headline area start */}
      {/* <div className="headline-area pt-65 rpt-55 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              pricing <span>Package</span>
            </span>
          </div>
        </div>
      </div> */}
      {/* Headline Area end */}
      {/* Pricing style three start */}
      {/* <section className="pricing-area-three pt-85">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
              <div
                className="pricing-banner"
                style={{
                  backgroundImage:
                    "url(assets/images/background/pricing-banner-bg.jpg)",
                }}
              >
                <span className="join-us">Join With Us</span>
                <h4>Amazing Pricing For Growth Business</h4>
                <Link legacyBehavior href="/pricing">
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <div className="hand-shape">
                  <img
                    src="assets/images/shapes/pricing-banner-hand-shape.png"
                    alt="Pricing Banner Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-4s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <div className="icon">
                    <img src="assets/images/icons/price.svg" alt="Icon" />
                  </div>
                  <h5>Monthly Package</h5>
                </div>
                <p>
                  We denounce with righteous indignation dislike beguiled and
                  demoralize
                </p>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <div className="price-offer">
                  <span className="price-text">
                    <span className="before">$</span>
                    <span className="price">18.3</span>
                  </span>
                  <img src="assets/images/shapes/right-arrow.png" alt="Arrow" />
                  <span className="offer-text">Save 15%</span>
                </div>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-6s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <div className="icon">
                    <img src="assets/images/icons/price.svg" alt="Icon" />
                  </div>
                  <h5>Yearly Package</h5>
                </div>
                <p>
                  We denounce with righteous indignation dislike beguiled and
                  demoralize
                </p>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <div className="price-offer">
                  <span className="price-text">
                    <span className="before">$</span>
                    <span className="price">18.3</span>
                  </span>
                  <img src="assets/images/shapes/right-arrow.png" alt="Arrow" />
                  <span className="offer-text">Save 15%</span>
                </div>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Pricing style three end */}
      {/* Why Choose Us Area start */}
      {/* <section className="why-choose-area pt-90 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7">
              <div className="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-left.jpg"
                  alt="Why Choose Left Image"
                />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="why-choose-two-wrap">
                <div className="section-title mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>We Provide Services In One Places</h2>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-3s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Competitive Rates</a>
                      </Link>
                    </h4>
                    <p>
                      We denounce with righteous indignation and dislike
                      beguiled demoralized charms
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-5s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>No Contracts Needed</a>
                      </Link>
                    </h4>
                    <p>
                      To take trivial example, which eundertakes laborious
                      physical exercise except
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-7s">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Powerful Terminal Lines</a>
                      </Link>
                    </h4>
                    <p>
                      At vero eos et accusamus eto dignissimos duc blanditiis
                      praesentium volupta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Why Choose Us Area end */}
      {/* Headline area start */}
      {/* <div className="headline-area pt-60 rpt-50 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>clients</span> Say’s
            </span>
          </div>
        </div>
      </div> */}
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      {/* <section className="testimonials-three-area pt-95 rpt-70">
        <div className="container container-1260">
          <div className="row gap-120 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-one-right-part rmb-75">
                <Swiper
                  {...sliderProps.testimonialsThreeActiveSwiper}
                  className="testimonials-three-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="ratting style-two">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="author-speech">
                      <p>
                        On the other hand we denounce see with righteous
                        indignation and dislike men who are so beguiled
                        demoralized by the charms pleasure moment
                      </p>
                    </div>
                    <div className="middle-quote">
                      <div className="icon">
                        <i className="flaticon-right-quote" />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-info">
                          <h4>Richard S. Robertson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s animated">
                  <button className="testimonial-three-prev slick-arrow slick-disabled">
                    <i className="far fa-long-arrow-left" />
                  </button>
                  <div className="testimonial-three-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-three-next slick-arrow">
                    <i className="far fa-long-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-three-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-three.jpg"
                  alt="Testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial Area end */}
      {/* Blog Style Two start */}
      {/* <section className="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Blog &amp; News</span>
                <h2>Read Our Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Voice Skills For Google Assistant And Amazon Alexa</a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Inclusive Design And Accessibility Stream Heydon Pickering
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Creating Online Environments The Work Well For Older Users
                    </a>
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Blog Style Two end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Index;
