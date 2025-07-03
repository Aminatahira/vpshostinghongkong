export default function Index() {
  return (
    <div style={{ minHeight: "100vh", background: "#E9FFF9" }}>
      {/* Header Navigation */}
      <header className="nav-header">
        <nav className="nav-container">
          <a href="https://arzhost.com/" className="logo">
            ARZ Host
          </a>
          <ul className="nav-menu">
            <li>
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                className="nav-link"
              >
                VPS Hosting Hong Kong
              </a>
            </li>
            <li>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="nav-link"
              >
                VPS Region
              </a>
            </li>
            <li>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="nav-link"
              >
                Lifetime Web Hosting
              </a>
            </li>
            <li>
              <a href="https://www.arzhost.com/about-us/" className="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="nav-link"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "bold",
                color: "#10375C",
                marginBottom: "20px",
                lineHeight: "1.2",
              }}
            >
              VPS Hosting Hong Kong
            </h1>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "#10A37F",
                marginBottom: "30px",
                fontWeight: "600",
              }}
            >
              Fast, Private &amp; Powerful VPS Hosting in Hong Kong
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#10375C",
                marginBottom: "40px",
                lineHeight: "1.8",
              }}
            >
              Welcome to the digital heart of Asia! With our{" "}
              <a
                href="https://arzhost.com/"
                style={{ color: "#10A37F", textDecoration: "underline" }}
              >
                VPS Hosting in Hong Kong
              </a>
              , you get blazing speeds, unmatched privacy, and unbeatable
              uptime. Whether you're targeting customers in mainland China,
              Southeast Asia, or beyond, our servers are here to power your
              journey.
            </p>
            <a
              href="https://arzhost.com/vps/"
              className="btn-primary"
              style={{ fontSize: "1.1rem", padding: "15px 30px" }}
            >
              Choose Your Plan
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "bold",
            }}
          >
            Why Choose VPS Hosting in Hong Kong?
          </h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }}
              >
                Strategic Location
              </h3>
              <p style={{ color: "#10375C" }}>Hosting in Hong Kong means:</p>
              <ul
                style={{
                  color: "#10375C",
                  paddingLeft: "20px",
                  marginTop: "15px",
                }}
              >
                <li>Super-low latency across Asia</li>
                <li>Advanced infrastructure and reliable power grids</li>
                <li>Strong internet freedoms and privacy laws</li>
              </ul>
              <p style={{ color: "#10375C", marginTop: "15px" }}>
                It's perfect for developers, entrepreneurs, and businesses that
                demand both performance and compliance.
              </p>
            </div>
            <div className="feature-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }}
              >
                Unique Features
              </h3>
              <p style={{ color: "#10375C" }}>We offer:</p>
              <ul
                style={{
                  color: "#10375C",
                  paddingLeft: "20px",
                  marginTop: "15px",
                }}
              >
                <li>
                  Ultra-fast{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Solid-state_drive"
                    target="_blank"
                    style={{ color: "#10A37F" }}
                  >
                    SSD storage
                  </a>{" "}
                  for lightning-quick access
                </li>
                <li>Root-level access for full control and customization</li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine"
                    target="_blank"
                    style={{ color: "#10A37F" }}
                  >
                    KVM virtualization
                  </a>{" "}
                  for dedicated resources
                </li>
                <li>Seamless scalability for growing apps</li>
              </ul>
              <p
                style={{
                  color: "#10375C",
                  marginTop: "15px",
                  fontStyle: "italic",
                }}
              >
                "You get all the power of a dedicated server without the price
                tag!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding" style={{ background: "#E9FFF9" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            Plans &amp; Pricing
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#10375C",
              marginBottom: "50px",
            }}
          >
            Find the perfect fit for your project:
          </p>

          <div className="pricing-table">
            <div className="pricing-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                }}
              >
                Basic
              </h3>
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#10375C",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                $9.99<span style={{ fontSize: "1rem" }}>/mo</span>
              </div>
              <ul
                style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}
              >
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  1 vCPU
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  1 GB RAM
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  25 GB Storage
                </li>
                <li style={{ padding: "8px 0" }}>1 TB Bandwidth</li>
              </ul>
              <a href="https://arzhost.com/vps/" className="btn-primary">
                Order Now
              </a>
            </div>

            <div className="pricing-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                }}
              >
                Standard
              </h3>
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#10375C",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                $19.99<span style={{ fontSize: "1rem" }}>/mo</span>
              </div>
              <ul
                style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}
              >
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  2 vCPU
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  2 GB RAM
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  50 GB Storage
                </li>
                <li style={{ padding: "8px 0" }}>2 TB Bandwidth</li>
              </ul>
              <a href="https://arzhost.com/vps/" className="btn-primary">
                Order Now
              </a>
            </div>

            <div className="pricing-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                }}
              >
                Pro
              </h3>
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#10375C",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                $39.99<span style={{ fontSize: "1rem" }}>/mo</span>
              </div>
              <ul
                style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}
              >
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  4 vCPU
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  4 GB RAM
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  100 GB Storage
                </li>
                <li style={{ padding: "8px 0" }}>4 TB Bandwidth</li>
              </ul>
              <a href="https://arzhost.com/vps/" className="btn-primary">
                Order Now
              </a>
            </div>

            <div className="pricing-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                }}
              >
                Enterprise
              </h3>
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#10375C",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                $69.99<span style={{ fontSize: "1rem" }}>/mo</span>
              </div>
              <ul
                style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}
              >
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  8 vCPU
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  8 GB RAM
                </li>
                <li
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #30E3CA",
                  }}
                >
                  200 GB Storage
                </li>
                <li style={{ padding: "8px 0" }}>6 TB Bandwidth</li>
              </ul>
              <a href="https://arzhost.com/vps/" className="btn-primary">
                Order Now
              </a>
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "#10375C",
              marginTop: "40px",
              fontWeight: "600",
            }}
          >
            All plans come with a dedicated IP, full root access, and instant
            setup!
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "bold",
            }}
          >
            Key Features of Our Hong Kong VPS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                Pure SSD Storage
              </h4>
              <p style={{ color: "#10375C" }}>
                Lightning-fast performance for your applications
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                Dedicated IPv4 Address
              </h4>
              <p style={{ color: "#10375C" }}>
                Your own unique IP for maximum control
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                KVM Virtualization
              </h4>
              <p style={{ color: "#10375C" }}>
                True dedicated resources for optimal performance
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                Instant Provisioning
              </h4>
              <p style={{ color: "#10375C" }}>
                Get your server running in minutes
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                Multiple OS Options
              </h4>
              <p style={{ color: "#10375C" }}>
                Ubuntu, CentOS, Debian, Windows available
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                Control Panels
              </h4>
              <p style={{ color: "#10375C" }}>
                Optional cPanel, DirectAdmin support
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                DDoS Protection
              </h4>
              <p style={{ color: "#10375C" }}>
                Advanced security for your applications
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h4 style={{ color: "#10A37F", marginBottom: "15px" }}>
                99.99% Uptime SLA
              </h4>
              <p style={{ color: "#10375C" }}>
                Guaranteed reliability and performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding" style={{ background: "#E9FFF9" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "bold",
            }}
          >
            Use Cases for Hong Kong VPS Hosting
          </h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }}
              >
                Web Hosting
              </h3>
              <p style={{ color: "#10375C" }}>Great for:</p>
              <ul
                style={{
                  color: "#10375C",
                  paddingLeft: "20px",
                  marginTop: "15px",
                }}
              >
                <li>Hosting websites targeting China, Taiwan, SEA</li>
                <li>Launching latency-sensitive mobile apps</li>
                <li>Building secure VPN or proxy services</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3
                style={{
                  color: "#10A37F",
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }}
              >
                Business Applications
              </h3>
              <p style={{ color: "#10375C" }}>Perfect for:</p>
              <ul
                style={{
                  color: "#10375C",
                  paddingLeft: "20px",
                  marginTop: "15px",
                }}
              >
                <li>Running trading bots, forex, or crypto apps</li>
                <li>Managing e-commerce or SaaS platforms</li>
                <li>Enterprise application hosting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center Section */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            Our Hong Kong Data Center
          </h2>
          <div className="feature-grid">
            <div>
              <ul
                style={{
                  color: "#10375C",
                  fontSize: "1.1rem",
                  lineHeight: "2",
                }}
              >
                <li>Tier-3 certified infrastructure</li>
                <li>Redundant power and cooling</li>
                <li>High-speed fiber network</li>
                <li>Low ping to China, Japan, Singapore</li>
                <li>24/7 physical security and monitoring</li>
              </ul>
            </div>
            <div>
              <p
                style={{
                  color: "#10375C",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                }}
              >
                "Your data stays safe, fast, and close to your users."
              </p>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/p8qVXz_2mPI?si=C1osDG1w3_-FfbdG"
                  title="Hong Kong VPS Hosting Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      <section className="section-padding" style={{ background: "#E9FFF9" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            Security &amp; Reliability
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#10375C",
              marginBottom: "40px",
            }}
          >
            We take your security seriously:
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <ul style={{ color: "#10375C", lineHeight: "2" }}>
                <li>99.99% uptime guarantee</li>
                <li>RAID-protected storage</li>
                <li>Optional offsite backups</li>
                <li>Built-in firewall &amp; malware protection</li>
              </ul>
            </div>
            <div className="feature-card">
              <p
                style={{
                  color: "#10375C",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                "Your VPS stays up, even when the world doesn't."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Tools Section */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            Easy Management Tools
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#10375C",
              marginBottom: "40px",
            }}
          >
            Managing your VPS is a breeze:
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <ul style={{ color: "#10375C", lineHeight: "2" }}>
                <li>Clean, easy-to-use control panel</li>
                <li>One-click OS reinstall or upgrades</li>
                <li>Reboot, monitor, and scale anytime</li>
              </ul>
            </div>
            <div className="feature-card">
              <p
                style={{
                  color: "#10375C",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                "No sysadmin? No problem. You're in control!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding" style={{ background: "#E9FFF9" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            24/7 Expert Support
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#10375C",
              marginBottom: "40px",
            }}
          >
            We're always here:
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <ul style={{ color: "#10375C", lineHeight: "2" }}>
                <li>Real humans, not bots</li>
                <li>Live chat, email, and ticket support</li>
                <li>
                  Friendly techs ready to help with setup, DNS, or migrations
                </li>
              </ul>
            </div>
            <div className="feature-card">
              <p
                style={{
                  color: "#10375C",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                "Need help? Ping us anytime."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "bold",
            }}
          >
            What Our Customers Say
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="testimonial">
              <p
                style={{
                  color: "#10375C",
                  fontSize: "1.1rem",
                  marginBottom: "15px",
                }}
              >
                "I launched my trading bot on their HK VPS and never had
                downtime. Lightning-fast and super helpful support!"
              </p>
              <p style={{ color: "#10A37F", fontWeight: "600" }}>
                - Emily Zhang, Fintech Dev
              </p>
            </div>
            <div className="testimonial">
              <p
                style={{
                  color: "#10375C",
                  fontSize: "1.1rem",
                  marginBottom: "15px",
                }}
              >
                "Perfect for running our China-facing app. Low ping and totally
                reliable."
              </p>
              <p style={{ color: "#10A37F", fontWeight: "600" }}>
                - Leo Chan, SaaS Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: "#E9FFF9" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#10375C",
              textAlign: "center",
              marginBottom: "60px",
              fontWeight: "bold",
            }}
          >
            FAQs
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="faq-item">
              <h4 style={{ color: "#10A37F", marginBottom: "10px" }}>
                Is VPS hosting in Hong Kong legal for international users?
              </h4>
              <p style={{ color: "#10375C" }}>
                Yes! Hosting in Hong Kong is fully legal and widely used for
                global websites.
              </p>
            </div>
            <div className="faq-item">
              <h4 style={{ color: "#10A37F", marginBottom: "10px" }}>
                Is the latency low for users in China?
              </h4>
              <p style={{ color: "#10375C" }}>
                Yes, Hong Kong provides one of the lowest latencies to mainland
                China.
              </p>
            </div>
            <div className="faq-item">
              <h4 style={{ color: "#10A37F", marginBottom: "10px" }}>
                Can I install Windows or a custom OS?
              </h4>
              <p style={{ color: "#10375C" }}>
                Absolutely. Choose from our templates or upload your own ISO.
              </p>
            </div>
            <div className="faq-item">
              <h4 style={{ color: "#10A37F", marginBottom: "10px" }}>
                Is your service good for crypto or forex?
              </h4>
              <p style={{ color: "#10375C" }}>
                Yes, many clients use our VPS for secure and stable trading
                environments.
              </p>
            </div>
            <div className="faq-item">
              <h4 style={{ color: "#10A37F", marginBottom: "10px" }}>
                Do you offer a refund guarantee?
              </h4>
              <p style={{ color: "#10375C" }}>
                Yes, we offer a 7-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding"
        style={{ background: "#10A37F", color: "white" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Join thousands of satisfied customers who trust{" "}
            <a
              href="https://arzhost.com/"
              style={{ color: "#30E3CA", textDecoration: "underline" }}
            >
              ARZ Host
            </a>{" "}
            for their Hong Kong VPS hosting needs.
          </p>
          <a
            href="https://arzhost.com/vps/"
            style={{
              background: "white",
              color: "#10A37F",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            Choose Your Plan Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ARZ Host</h3>
              <p style={{ color: "#99F3BD", lineHeight: "1.8" }}>
                Your trusted partner for high-performance VPS hosting in Hong
                Kong. Fast, reliable, and secure hosting solutions for
                businesses worldwide.
              </p>
              <div style={{ marginTop: "20px" }}>
                <p style={{ color: "#99F3BD" }}>
                  Website:{" "}
                  <a href="https://arzhost.com/" className="footer-link">
                    arzhost.com
                  </a>
                </p>
                <p style={{ color: "#99F3BD" }}>Phone: +1 (631) 594-8060</p>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                className="footer-link"
              >
                VPS Hosting Hong Kong
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="footer-link"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="footer-link"
              >
                Lifetime Web Hosting
              </a>
              <a href="https://arzhost.com/vps/" className="footer-link">
                VPS Plans
              </a>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <a
                href="https://www.arzhost.com/about-us/"
                className="footer-link"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="footer-link"
              >
                Contact Us
              </a>
              <a
                href="https://www.arzhost.com/terms-conditions/"
                className="footer-link"
              >
                Terms and Conditions
              </a>
              <a
                href="https://www.arzhost.com/privacy-policy/"
                className="footer-link"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.arzhost.com/disclaimer/"
                className="footer-link"
              >
                Disclaimer
              </a>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <p style={{ color: "#99F3BD", lineHeight: "1.8" }}>
                Professional VPS hosting solutions with 99.99% uptime guarantee.
                Our{" "}
                <a href="https://arzhost.com/" style={{ color: "#30E3CA" }}>
                  hosting services
                </a>{" "}
                are designed for maximum performance and reliability.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2024 ARZ Host. All rights reserved. | Premium Hong Kong VPS
              Hosting Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
