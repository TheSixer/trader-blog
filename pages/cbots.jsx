import PageBanner from "@/src/components/PageBanner";
import Pagination from "react-bootstrap/Pagination";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Tag from "@/src/components/Tag";
const { API_BASE_URL } = require("@/config");

// 服务端获取文章列表数据
export async function getServerSideProps({ query }) {
  try {
    const page = parseInt(query.page) || 1;
    const limit = 20;

    const { data } = await axios.get(`${API_BASE_URL}/api/posts`, {
      params: {
        page,
        limit,
      },
    });

    return {
      props: {
        articles: data.data || [],
        pagination: {
          current: page,
          pageSize: limit,
          total: data.pagination.total,
        },
      },
    };
  } catch (error) {
    console.error("获取文章列表失败:", error);
    return {
      props: {
        articles: [],
        pagination: {
          current: 1,
          pageSize: 20,
          total: 0,
        },
      },
    };
  }
}

const Projects = ({ articles, pagination }) => {
  const router = useRouter();

  // 处理分页变化
  const handlePageChange = (page) => {
    router.push({
      pathname: "/cbots",
      query: { page },
    });
  };

  // 生成分页按钮
  const renderPagination = () => {
    const totalPages = Math.ceil(pagination.total / pagination.pageSize);
    const currentPage = pagination.current;

    // 计算需要显示的页码范围
    let items = [];
    const delta = 2; // 当前页前后显示的页码数

    // 添加首页
    items.push(
      <Pagination.First
        key="first"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
      />
    );

    // 添加上一页
    items.push(
      <Pagination.Prev
        key="prev"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
    );

    // 始终显示第一页
    items.push(
      <Pagination.Item
        key={1}
        active={1 === currentPage}
        onClick={() => handlePageChange(1)}
      >
        1
      </Pagination.Item>
    );

    // 添加前省略号
    if (currentPage - delta > 2) {
      items.push(<Pagination.Ellipsis key="ellipsis-start" />);
    }

    // 添加当前页附近的页码
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // 添加后省略号
    if (currentPage + delta < totalPages - 1) {
      items.push(<Pagination.Ellipsis key="ellipsis-end" />);
    }

    // 始终显示最后一页
    if (totalPages > 1) {
      items.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    // 添加下一页
    items.push(
      <Pagination.Next
        key="next"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    );

    // 添加末页
    items.push(
      <Pagination.Last
        key="last"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
      />
    );

    return (
      <div className="pagination-wrap flex justify-center mt-50 wow fadeInUp delay-0-2s">
        <Pagination>{items}</Pagination>
      </div>
    );
  };

  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"策略广场"} />
      {/* Page Banner End */}

      {/* Project Grid Area start */}
      <section className="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container container-1210">
          <div className="row gap-110">
            {articles.map((article) => (
              <div className="col-lg-6" key={article.id}>
                <div className="project-item">
                  <div className="image wow fadeInUp delay-0-2s">
                    <img
                      src={
                        article.cover_image ||
                        "assets/images/projects/project-grid1.jpg"
                      }
                      alt={article.title}
                    />
                    <Link legacyBehavior href={`/cbot/${article.id}`}>
                      <a className="project-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="content wow fadeInUp delay-0-2s">
                    <Link legacyBehavior href={`/cbot/${article.id}`}>
                      <a className="category">{article.category_name}</a>
                    </Link>

                    <div className="my-2">
                      {article.tags?.map((tag, index) => (
                        <Tag key={index} text={tag} colorIndex={index} />
                      ))}
                    </div>
                    <h2>
                      <Link legacyBehavior href={`/cbot/${article.id}`}>
                        <a>{article.title}</a>
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 分页组件 */}
          {pagination.total > pagination.pageSize && renderPagination()}
        </div>
      </section>
      {/* Project Grid Area end */}

      {/* Work With Area start */}
      <section className="work-with-area pt-100 pb-100 rpt-50 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <Link legacyBehavior href="/about">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" /> <span>关于我们</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">策略广场</span>
      </section>
      {/* Work With Area end */}
    </Layout>
  );
};

export default Projects;
