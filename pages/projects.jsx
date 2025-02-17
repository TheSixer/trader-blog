import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Projects = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"策略广场"} />
      {/* Page Banner End */}
      {/* Project Grid Area start */}
      <section className="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container container-1210">
          <div className="row gap-110">
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid1.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">趋势 & 震荡</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        网格交易策略 <i>v2.0.0</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid2.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">震荡</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        双均线&布林带震荡策略 <i>v1.2.8</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid3.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">趋势</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        海龟交易法 &amp; <i>v1.5.1</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid4.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">震荡</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        马丁策略 <i>v1.1.3</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid5.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Creative Work</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        Task Management <i>Dashboard</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid6.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Digital Product</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        Mobile Application <i>Development</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid7.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Creative Work</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        Product Design &amp; <i>Branding</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid8.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/project-details">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Digital Product</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/project-details">
                      <a>
                        Digital Content For Web <i>Development</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Project Grid Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">更多策略</span>
                <h2>更多量化交易策略代码正在开发中，敬请期待！！！</h2>
                <Link legacyBehavior href="/about">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>关于我们</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">策略广场</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Projects;
