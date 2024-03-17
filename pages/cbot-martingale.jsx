import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Markdown from '@/src/components/Markdown';
const ProjectDetails = () => {

  const content = "\n```csharp Martingale cBot.algo\nusing System;\nusing cAlgo.API;\nusing cAlgo.API.Indicators;\nusing cAlgo.API.Internals;\nusing cAlgo.Indicators;\n\nnamespace cAlgo.Robots\n{\n    [Robot(TimeZone = TimeZones.UTC, AccessRights = AccessRights.None)]\n    public class ImprovedMartingaleStrategy : Robot\n    {\n        [Parameter(\"Initial Volume\", DefaultValue = 10000)]\n        public int InitialVolume { get; set; }\n\n        [Parameter(\"Max Volume\", DefaultValue = 100000)]\n        public int MaxVolume { get; set; }\n\n        [Parameter(\"Stop Loss (pips)\", DefaultValue = 1)]\n        public double StopLoss { get; set; }\n\n        [Parameter(\"Take Profit (pips)\", DefaultValue = 1)]\n        public double TakeProfit { get; set; }\n\n        [Parameter(\"Profit Target (%)\", DefaultValue = 10)]\n        public double ProfitTargetPercent { get; set; }\n\n        [Parameter(\"Risk Percentage (%)\", DefaultValue = 1)]\n        public double RiskPercentage { get; set; }\n\n        private bool hasOpenPosition;\n        private double currentVolume;\n        private double totalProfit;\n        private double targetProfit;\n\n        protected override void OnStart()\n        {\n            currentVolume = InitialVolume;\n            targetProfit = Account.Balance * ProfitTargetPercent / 100;\n            Positions.Opened += OnPositionOpened;\n            Positions.Closed += OnPositionClosed;\n        }\n\n        protected override void OnBar()\n        {\n            if (!hasOpenPosition)\n            {\n                ExecuteMarketOrder(TradeType.Buy, SymbolName, currentVolume, \"Buy\", StopLoss, TakeProfit);\n                hasOpenPosition = true;\n            }\n        }\n\n        private void OnPositionOpened(PositionOpenedEventArgs args)\n        {\n            hasOpenPosition = true;\n        }\n\n        private void OnPositionClosed(PositionClosedEventArgs args)\n        {\n            Position closedPosition = args.Position;\n            double profit = closedPosition.NetProfit;\n\n            if (profit > 0)\n            {\n                totalProfit += profit;\n                if (totalProfit >= targetProfit)\n                {\n                    Print(\"targetProfit: \" + targetProfit);\n                    Stop();\n                }\n            }\n            else\n            {\n                double riskAmount = Account.Balance * RiskPercentage / 100;\n                double nextVolume = currentVolume * 2;\n\n                if (nextVolume <= MaxVolume && riskAmount > 0)\n                {\n                    if (riskAmount < Account.Equity)\n                    {\n                        currentVolume = nextVolume;\n                        ExecuteMarketOrder(TradeType.Buy, SymbolName, currentVolume, \"Buy\", StopLoss, TakeProfit);\n                    }\n                    else\n                    {\n                        Print(\"Account.Equity: \" + Account.Equity);\n                        Print(\"Account.Balance: \" + Account.Balance);\n                        Print(\"riskAmount: \" + riskAmount);\n                        Stop();\n                    }\n                }\n                else\n                {\n                    Print(\"nextVolume: \" + nextVolume);\n                    Stop();\n                }\n            }\n\n            hasOpenPosition = false;\n        }\n    }\n}\n```\n"

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
                马丁格尔策略
                <img
                  className="mxw-12 leaf"
                  src="assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
                <p>马丁格尔策略是一种古老的赌博策略，起源于18世纪的法国，并在欧洲广为人知。该策略的核心原理是在每次亏损后将赌注加倍，而在赢钱后则回归到一单位赌注。理论上，这种策略不会输钱，因为每次加倍的赌注都会在赢钱时覆盖之前的所有亏损，并可能实现盈利。然而，这种策略在实践中存在一些限制和风险。</p>
                <p>首先，马丁格尔策略需要投资者拥有足够的资金来支持不断加码的过程，因为理论上只有资金足够多时，才能保证最终的成功率。如果资金有限，投资者可能会在市场出现不利变动时遭遇破产风险。</p>
                <p>其次，马丁格尔策略在股票投资中的应用会受到很多因素的限制，如股票的涨跌幅限制。在中国A股市场，投资者可以利用10%的涨跌幅限制来控制加仓距离，即在每次亏损后，将加仓金额控制在最大跌幅的20%以内。</p>
                <p>最后，马丁格尔策略在交易中可能会遇到“不断一直走趋势”的市场，这种情况下，由于不断加码，亏损可能会迅速积累，最终导致账户资金全部亏光。因此，马丁格尔策略最怕的是大单边市场，而最适合用于震荡行情。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="container container-1290">
        <Markdown content={content} />
        <p>综上所述，马丁格尔策略在理论上可以实现百分百的胜率，但实际操作中会受到资金限制、市场行情的影响，以及大单边市场的风险。因此，投资者在使用马丁格尔策略时应该谨慎，合理控制仓位和风险，避免过度杠杆操作。</p>
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
                  <Link legacyBehavior href="cbot-turtle">
                    海龟交易法
                  </Link>
                </h4>
                <Link legacyBehavior href="/cbot-turtle">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Web Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Next <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img src="assets/images/projects/next-project.jpg" alt="Next" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Next Prev Post Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectDetails;
