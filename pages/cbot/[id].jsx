import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Markdown from '@/src/components/Markdown';
import axios from 'axios';
import Tag from "@/src/components/Tag";
const { API_BASE_URL, STATIC_URL } = require('@/config');

// 服务端获取文章详情
export async function getServerSideProps({ params }) {
  try {
    // 获取当前文章
    const { data: article } = await axios.get(`${API_BASE_URL}/api/posts/${params.id}`);
    
    // 获取所有量化策略文章列表用于前后文导航
    const { data: articlesData } = await axios.get(`${API_BASE_URL}/api/posts`, {
      params: {
        category_id: 1,
        limit: 100
      }
    });
    
    const articles = articlesData.data;
    const currentIndex = articles.findIndex(a => a.id === parseInt(params.id));
    
    // 获取上一篇和下一篇文章
    const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
    const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

    return {
      props: {
        article,
        prevArticle,
        nextArticle
      }
    };
  } catch (error) {
    console.error('获取文章详情失败:', error);
    return {
      notFound: true // 返回404页面
    };
  }
}

const ProjectDetails = ({ article, prevArticle, nextArticle }) => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{ backgroundImage: "url('/assets/images/hero/hero-two-bg.png')" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                {article.title}
                <img
                  className="mxw-12 leaf"
                  src="/assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
                {/* 使用文章内容的前200个字符作为简介 */}
                <p>发布时间: {new Date(article.created_at).toLocaleDateString('zh-CN')}</p>
                <div className="mt-3">
                  {article.tags?.map((tag, index) => (
                    <Tag key={index} text={tag} colorIndex={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}

      {/* Project Details Content Area Start */}
      <div className="container container-1290">
        <Markdown content={article.content} />
      </div>
      {/* Project Details Content Area End */}

      {/* Next Prev Post Area start */}
      {/* {(prevArticle || nextArticle) && (
        <section className="next-prev-post-area">
          <div className="container container-1290">
            <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
              {prevArticle && (
                <div className="prev-post wow fadeInLeft delay-0-2s">
                  <div className="image">
                    <img 
                      src={prevArticle.cover_image || "/assets/images/projects/prev-project.jpg"}
                      alt="Prev" 
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href={`/cbot/${prevArticle.id}`}>
                        {prevArticle.title}
                      </Link>
                    </h4>
                    <Link href={`/cbot/${prevArticle.id}`} className="read-more">
                      Prev <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              )}
              {nextArticle && (
                <div className="next-post wow fadeInRight delay-0-2s">
                  <div className="content">
                    <h4>
                      <Link href={`/cbot/${nextArticle.id}`}>
                        {nextArticle.title}
                      </Link>
                    </h4>
                    <Link href={`/cbot/${nextArticle.id}`} className="read-more">
                      Next <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="image">
                    <img 
                      src={nextArticle.cover_image || "/assets/images/projects/next-project.jpg"}
                      alt="Next" 
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )} */}
      {/* Next Prev Post Area end */}
    </Layout>
  );
};

export default ProjectDetails; 