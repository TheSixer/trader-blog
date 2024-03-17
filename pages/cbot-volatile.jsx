import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Markdown from '@/src/components/Markdown';
const ProjectDetails = () => {

  const content = "\n```csharp Suitable For Volatile.algo\nusing System;\nusing cAlgo.API;\nusing cAlgo.API.Indicators;\nusing cAlgo.API.Internals;\nusing cAlgo.Indicators;\n\nnamespace cAlgo.Robots\n{\n    [Robot(TimeZone = TimeZones.UTC, AccessRights = AccessRights.None)]\n    public class OscillationTradingRobot : Robot\n    {\n        ...\n\n        [Parameter(\"Bollinger Bands Deviations\", DefaultValue = 2)]\n        public double BBDeviations { get; set; }\n\n        [Parameter(\"Initial Balance\", Group = \"Volume\", DefaultValue = 1000, MinValue = 1, Step = 1)]\n        public double InitialBalance { get; set; }\n\n        [Parameter(\"Quantity (Lots)\", Group = \"Volume\", DefaultValue = 1, MinValue = 0.01, Step = 0.01)]\n        public double Quantity { get; set; }\n\n        [Parameter(\"Risk Percentage\", Group = \"Volume\", DefaultValue = 10, MinValue = 0.01, MaxValue = 100)]\n        public double RiskPercentage { get; set; }\n\n        [Parameter(\"Stop Loss (pips)\", Group = \"Protection\", DefaultValue = 1, MinValue = 0.01, Step = 0.01)]\n        public double StopLossInPips { get; set; }\n\n        [Parameter(\"Take Profit (pips)\", Group = \"Protection\", DefaultValue = 1, MinValue = 0.01, Step = 0.01)]\n        public double TakeProfitInPips { get; set; }\n\n        private MovingAverage fastMA;\n        private MovingAverage slowMA;\n        private BollingerBands bollingerBands;\n\n        protected override void OnStart()\n        {\n            fastMA = Indicators.MovingAverage(Bars.ClosePrices, FastMAPeriods, MovingAverageType.Exponential);\n            \n            slowMA = Indicators.MovingAverage(Bars.ClosePrices, SlowMAPeriods, MovingAverageType.Exponential);\n            \n            bollingerBands = Indicators.BollingerBands(Bars.ClosePrices, BBPeriods, BBDeviations, MovingAverageType.Simple);\n        }\n\n        protected override void OnBar()\n        {\n            // Check if both moving averages are converging (crossing) within the Bollinger Bands\n            if (\n                fastMA.Result.Last(1) > slowMA.Result.Last(1)\n                && fastMA.Result.Last(2) < slowMA.Result.Last(2)\n                && Bars.ClosePrices.Last(1) < bollingerBands.Top.Last(1)\n                && Bars.ClosePrices.Last(1) > bollingerBands.Bottom.Last(1))\n            {\n                // Open a long position\n                ExecuteMarketOrder(TradeType.Buy, SymbolName, VolumeFromRisk(), \"Stable\", StopLossInPips, TakeProfitInPips);\n            }\n            else if (\n                fastMA.Result.Last(1) < slowMA.Result.Last(1)\n                && fastMA.Result.Last(2) > slowMA.Result.Last(2)\n                && Bars.ClosePrices.Last(1) > bollingerBands.Bottom.Last(1)\n                && Bars.ClosePrices.Last(1) < bollingerBands.Top.Last(1))\n            {\n                // Open a short position\n                ExecuteMarketOrder(TradeType.Sell, SymbolName, VolumeFromRisk(), \"Stable\", StopLossInPips, TakeProfitInPips);\n            }\n        }\n\n        ...\n    }\n}\n\n```\n";

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
                双均线&布林带震荡策略
                <img
                  className="mxw-12 leaf"
                  src="assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
                <p>双均线和布林带震荡策略是一种常见的量化交易策略，通常用于股票或其他金融资产的交易。以下是这个策略的基本原理：</p>
                <h4 className="my-2">双均线策略：</h4>
                <p>1、选择两个不同周期的移动平均线： 典型的选择是短期（如20天）和长期（如50天）的移动平均线。</p>
                <p>2、交叉信号： 当短期移动平均线从下方穿过长期移动平均线，产生一个买入信号；当短期移动平均线从上方穿过长期移动平均线，产生一个卖出信号。</p>
                <h4 className="my-2">布林带震荡策略：</h4>
                <p>1、计算布林带： 根据一定的统计方法计算出中间线（通常是20天的简单移动平均线）以及上下两条布林带（标准差乘以某个系数，如2）。</p>
                <p>2、震荡信号： 当价格触及布林带的上下轨时，可能会产生过度买入或卖出的信号。当价格触及上轨时，可能是卖出信号；当价格触及下轨时，可能是买入信号。</p>
                <h4 className="my-2">结合策略：</h4>
                <p>买入信号： 当双均线策略产生买入信号且价格触及布林带的下轨时，可能是一个较强的买入信号。</p>
                <p>卖出信号： 当双均线策略产生卖出信号且价格触及布林带的上轨时，可能是一个较强的卖出信号。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="container container-1290">
        <Markdown content={content} />
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
                  <Link legacyBehavior href="cbot-grid">
                    网格交易策略
                  </Link>
                </h4>
                <Link legacyBehavior href="/cbot-grid">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="cbot-turtle">
                    海龟交易法
                  </Link>
                </h4>
                <Link legacyBehavior href="/cbot-turtle">
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
