'use client'

export default function Home() {
  return (
    <div className="container">
      {/* Main Content Grid */}
      <div className="main-content">
        {/* Left Column - Content */}
        <div className="content-section">
          <h1 className="main-title">Master the Markets with The Alchemy</h1>
          
          {/* YouTube Video Embed */}
          <div className="video-container">
            <iframe 
              src="https://www.youtube.com/embed/DKD-Hud-9WQ" 
              title="Inside The Alchemy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <p className="description">
            Learn a Mechanical strategy for market success with daily insights by The Architect & AC.
          </p>

          {/* Benefits Section */}
          <div className="benefits-section">
            <div className="benefit-item">
              <div className="benefit-icon education">💡</div>
              <div className="benefit-content">
                <h3>Education Course Content</h3>
                <p>
                  Master the core of successful trading with a focus on psychology, risk 
                  management, analysis, and execution. Learn proven strategies, refine your 
                  edge, and back your decisions with real data
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon analysis">📈</div>
              <div className="benefit-content">
                <h3>Market Analysis & Trading Insights</h3>
                <p>
                  Get in-depth market insights through clear technical and fundamental analysis. 
                  Stay ahead with actionable trade breakdowns, fundamental forecasts, and real-time 
                  trade analysis and ideas
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon automation">⚙️</div>
              <div className="benefit-content">
                <h3>Automated System → Proof of Concept</h3>
                <p>
                  Explore our mechanical trading strategy brought to life through automation, 
                  backed by data-driven results and built as a proof of concept for a consistent 
                  edge in the markets
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stripe Buy Buttons */}
        <div>
          <div className="payment-section">
            <stripe-buy-button
              buy-button-id="buy_btn_1SSOX2GJyA264RLzxQ8LPbRx"
              publishable-key="pk_live_51Nz2c5GJyA264RLzs4wMnYgqr0Dey1zRJeBQr7ZdbdB2KuyJmLbgfHGD5Yjx7RBVrt4zkqHAR4s7QGkWzI5eAwRT00md2ZuRH1"
            >
            </stripe-buy-button>
          </div>

          <div className="payment-section" style={{ marginTop: 16 }}>
            <stripe-buy-button
              buy-button-id="buy_btn_1SSPSyGJyA264RLzwrwfwNz3"
              publishable-key="pk_live_51Nz2c5GJyA264RLzs4wMnYgqr0Dey1zRJeBQr7ZdbdB2KuyJmLbgfHGD5Yjx7RBVrt4zkqHAR4s7QGkWzI5eAwRT00md2ZuRH1"
            >
            </stripe-buy-button>
          </div>
        </div>
      </div>
    </div>
  )
}