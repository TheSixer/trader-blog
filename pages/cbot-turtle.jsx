import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Markdown from '@/src/components/Markdown';
const ProjectDetails = () => {

  const content = "\n```csharp Turtle.algo\nusing cAlgo.API;\nusing cAlgo.API.Indicators;\nusing System;\n\nnamespace cAlgo.Robots\n{\n    [Robot(TimeZone = TimeZones.UTC, AccessRights = AccessRights.None)]\n    public class TurtleTradingBot : Robot\n    {\n        [Parameter(\"海龟交易法-入场突破周期\", DefaultValue = 20)]\n        public int BreakoutPeriod { get; set; }\n\n        [Parameter(\"海龟交易法-ATR周期\", DefaultValue = 14)]\n        public int AtrPeriod { get; set; }\n\n\t...\n\n        public int HighRsi { get; set; }\n\n        [Parameter(\"RSI 下限\", DefaultValue = 30, MinValue = 20, MaxValue = 45, Step = 1)]\n        public int LowRsi { get; set; }\n\n        [Parameter(\"Stop Loss (pips)\", Group = \"Protection\", DefaultValue = 1, MinValue = 0.01, Step = 0.01)]\n        public double StopLossInPips { get; set; }\n\n        [Parameter(\"Take Profit (pips)\", Group = \"Protection\", DefaultValue = 1, MinValue = 0.01, Step = 0.01)]\n        public double TakeProfitInPips { get; set; }\n\n        private RelativeStrengthIndex _rsi;\n        private AverageTrueRange _atr;\n\n        private double _riskPerTrade;\n        private bool _canSell;\n        private bool _canBuy;\n\n        protected override void OnStart()\n        {\n            _rsi = Indicators.RelativeStrengthIndex(Bars.ClosePrices, 14);\n            _atr = Indicators.AverageTrueRange(AtrPeriod, MovingAverageType.Exponential); // 使用指数移动平均\n\n            _riskPerTrade = Account.Balance * RiskPercentage / 100.0;\n        }\n\n        protected override void OnBar()\n        {\n            int index = Bars.ClosePrices.Count - 1;\n            \n\n            if (_rsi.Result[index - 1] > HighRsi)\n            {\n                _canSell = true;\n            } else if (_rsi.Result[index - 1] < LowRsi)\n            {\n                _canBuy = true;\n            }\n            //Print(_canSell + \", \" + _canBuy + \", \" + Bars.ClosePrices[index] + \", \" + Bars.HighPrices[index - BreakoutPeriod]);\n            // 如果RSI超过70，说明市场可能过热，考虑做空\n            if (_canSell && Bars.ClosePrices[index] < Bars.HighPrices[index - BreakoutPeriod])\n            {\n                // 如果当前价格低于最高价，做空\n                double atrValue = _atr.Result[index - 1];\n                double stopLoss = StopLossInPips + atrValue;\n                double volume = CalculateVolume(Symbol.Ask + atrValue, atrValue);\n\n                ExecuteOrder(TradeType.Sell, volume, stopLoss);\n\n            }\n            // 如果RSI低于30，说明市场可能过冷，考虑做多\n            if (_canBuy && Bars.ClosePrices[index] > Bars.LowPrices[index - BreakoutPeriod])\n            {\n                // 如果当前价格高于最低价，做多\n                double atrValue = _atr.Result[index - 1];\n                double stopLoss = StopLossInPips - atrValue;\n                double volume = CalculateVolume(Symbol.Bid - atrValue, atrValue);\n\n                ExecuteOrder(TradeType.Buy, volume, stopLoss);\n            }\n        }\n\n        ...\n        \n        private void ExecuteOrder(TradeType tradeType, double volume, double stopLoss)\n        {\n            \n            var volumeInUnits = Math.Round(volume / 10) * 10;\n            Print(volumeInUnits + \", \" + stopLoss + \", \" + TakeProfitInPips);\n            // 执行开仓逻辑\n            ExecuteMarketOrder(tradeType, SymbolName, volumeInUnits, \"2.0\", stopLoss, TakeProfitInPips);\n            \n            _canBuy = false;\n            _canSell = false;\n        }\n    }\n}\n\n```\n";

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
                海龟交易法
                <img
                  className="mxw-12 leaf"
                  src="assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
                <p>海龟交易思想起源于上世纪八十年代的美国。理查德丹尼斯与好友比尔打赌，主题是一个成功的交易员是天生的还是后天的。理查德用十年时间证明了通过日常系统培训，交易员可以通过后天培训成为一名优秀的交易者。这套培训系统就是海龟交易系统。</p>
                <p>海龟交易系统是一个完整的、机械的交易思想，可以系统地完成整个交易过程。它包括了买卖什么、头寸规模、何时买卖、何时退出等一系列交易策略，是一个趋势交易策略。它最显著的特点是捕捉中长期趋势，力求在短期内获得最大的收益。</p>
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
                  <Link legacyBehavior href="cbot-volatile">
                    双均线&布林带震荡策略
                  </Link>
                </h4>
                <Link legacyBehavior href="/cbot-volatile">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="cbot-martingale">
                    马丁策略
                  </Link>
                </h4>
                <Link legacyBehavior href="/cbot-martingale">
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
