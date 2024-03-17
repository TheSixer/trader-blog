import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectDetails = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                网格交易策略
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
                <p>网格交易法是一种利用行情震荡进行获利的策略。在标的价格不断震荡的过程中，对标的价格绘制网格，在市场价格触碰到某个网格线时进行加减仓操作尽可能获利。</p>
                <p>网格交易法属于左侧交易的一种。与右侧交易不同，网格交易法并非跟随行情，追涨杀跌，而是逆势而为，在价格下跌时买入，价格上涨时卖出。</p>
                <p>此次网格交易策略是在经典网格交易策略的基础上进行了改良，在适用于震荡行情中获利的前提下，同样能在单边行情中，获得不错的效果。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <p></p>
          <p className="my-2">回测品种：WTI.f</p>
          <p className="my-2">回测时长：18/04/2022 - 07/03/2024</p>
          <p>初始资本为 10,000 美元，结果为 618,544 美元，相当于初始金额在此期间的回报率为 6,056%。</p>
          <p></p>
          <div className="image wow fadeInUp delay-0-2s">
            <img
              width={'100%'}
              src="assets/images/cbots/grid-wti1.png"
              alt="Project"
            />
          </div>
          <p></p>
          <p className="my-2">然而，丰厚的利润也伴随着较大的风险，最大余额回撤也达到了44.39%，最大净值回撤也达到了44.83%。但不可否认的是，这确实是一个非常优秀的程序。</p>
          <p></p>
          <div className="image wow fadeInUp delay-0-2s">
            <img
              width={'100%'}
              src="assets/images/cbots/grid-wti2.png"
              alt="Project"
            />
          </div>

          <p></p>
          <p className="my-2">回测品种：Brent Oil</p>
          <p className="my-2">回测时长：18/04/2022 - 07/03/2024</p>
          <p>初始资本为 1,000 美元，结果为 39,952 美元，相当于初始金额在此期间的回报率为 3,995%。</p>
          <p></p>
          <div className="image wow fadeInUp delay-0-2s">
            <img
              width={'100%'}
              src="assets/images/cbots/grid-brent1.png"
              alt="Project"
            />
          </div>
          <p></p>
          <p className="my-2">然而，丰厚的利润也伴随着较大的风险，最大余额回撤也达到了44.39%，最大净值回撤也达到了44.83%。但不可否认的是，这确实是一个非常优秀的程序。</p>
          <p></p>
          <div className="image wow fadeInUp delay-0-2s">
            <img
              width={'100%'}
              src="assets/images/cbots/grid-brent2.png"
              alt="Project"
            />
          </div>
          <p></p>
          <p>
            下载代码：
            <a href="https://ctrader.com/algos/cbots/show/4025">https://ctrader.com/algos/cbots/show/4025</a>
          </p>
        </div>
      </div>
      {/* Project Details Content Area End */}
      {/* Next Prev Post Area start */}
      <section className="next-prev-post-area">
        <div className="container container-1290">
          <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
            <div className="prev-post wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src="assets/images/projects/prev-project.jpg" alt="Prev" />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="cbot-martingale">
                    马丁策略
                  </Link>
                </h4>
                <Link legacyBehavior href="/cbot-martingale">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="cbot-volatile">
                    Web Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/cbot-volatile">
                  <a className="read-more">
                    Next <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img src="assets/images/projects/next-project.jpg" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Next Prev Post Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectDetails;
