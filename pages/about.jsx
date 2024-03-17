import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                I'm A Quant Trader
                <img
                  className="mxw-20"
                  src="assets/images/banner/inside-title3.png"
                  alt="title"
                />
                <img
                  className="mxw-40"
                  src="assets/images/banner/inside-title4.png"
                  alt="title"
                />
                And A Bot
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="assets/images/hero/title-arrow.png"
                    alt="Arrow"
                  />
                </span>
                Developer
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Page Banner Section End */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.png" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=OaPdk_ioTbQ"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-40 pb-50">
                作为一名资深程序员，本人接触量化近十年时间。我的编程技能与金融市场的深度理解相结合，使我能够设计和开发高效的交易算法和工具。我热衷于利用技术手段解决金融市场中的复杂问题，通过数据分析、机器学习和算法优化来实现交易策略的自动化与优化。我的经验使我对市场变化有着敏锐的洞察力，能够快速响应并调整策略，以取得最佳的交易结果。在不断学习与探索的过程中，我始终保持着对新技术和新方法的开放心态，以不断提升自己在量化交易领域的竞争力。
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <div className="video-year text-lg-end text-center rel">
                2024
                <img
                  className="leaf-shape"
                  src="assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">我的爱好</span>
                <h2>本人是一名量化爱好者，接触量化近十年时间， </h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-creativity" />
                  <h5>编写自己的量化策略</h5>
                </div>
                <p>
                  基于各种经典交易策略（如网格、马丁、海龟等），实现属于自己专属的量化交易策略
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-mobile-banking" />
                  <h5>实盘检验策略的效果</h5>
                </div>
                <p>
                  通过实盘检验量化策略的效果，并在专属直播平台实时展示实盘过程
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-optimization-1" />
                  <h5>不断优化和拓展新的策略</h5>
                </div>
                <p>
                  根据回测和实盘的结果，不断优化和更新优化量化策略，以实现长期稳定的收益
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary py-20">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>量化 &amp; 交易策略</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>交易 策略</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>量化 编程</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>量化 &amp; 交易策略</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>交易 策略</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>量化 编程</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>量化 &amp; 交易策略</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>交易 策略</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>量化 编程</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Team Area end */}
      {/* Statistics Area start */}
      <div
        className="statistics-area pt-100 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* Client Logo Two start */}
      <section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h4>We Have 1520+Global Clients</h4>
          </div>
          <div className="client-logo-wrap">
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/client-logos/client-logo1.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/client-logos/client-logo2.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/client-logos/client-logo3.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/client-logos/client-logo4.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/client-logos/client-logo5.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-7s">
                <img
                  src="assets/images/client-logos/client-logo6.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
