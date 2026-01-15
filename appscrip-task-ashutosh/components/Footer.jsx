




export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Section - Newsletter & Contact */}
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
            <p className="footer-description">Sign up for updates from mettā muse.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="newsletter-button">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">CONTACT US</h3>
            <p className="footer-contact-item">+44 221 133 5360</p>
            <p className="footer-contact-item">customercare@mettamuse.com</p>
            
            <h3 className="footer-heading footer-currency-heading">CURRENCY</h3>
            <div className="footer-currency">
              <span className="currency-flag">🇺🇸</span>
              <span className="currency-text">USD</span>
            </div>
            <p className="footer-currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section - Links & Social */}
        <div className="footer-bottom">
          <div className="footer-column">
            <h3 className="footer-brand">mettā muse</h3>
            <nav aria-label="Company navigation">
              <ul className="footer-links-list">
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/stories" className="footer-link">Stories</a></li>
                <li><a href="/artisans" className="footer-link">Artisans</a></li>
                <li><a href="/boutiques" className="footer-link">Boutiques</a></li>
                <li><a href="/contact" className="footer-link">Contact Us</a></li>
                <li><a href="/eu-compliances" className="footer-link">EU Compliances Docs</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <nav aria-label="Quick links">
              <ul className="footer-links-list">
                <li><a href="/orders" className="footer-link">Orders & Shipping</a></li>
                <li><a href="/seller" className="footer-link">Join/Login as a Seller</a></li>
                <li><a href="/payment" className="footer-link">Payment & Pricing</a></li>
                <li><a href="/returns" className="footer-link">Return & Refunds</a></li>
                <li><a href="/faqs" className="footer-link">FAQs</a></li>
                <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">FOLLOW US</h3>
            <div className="footer-social">
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                </svg>
              </a>
            </div>

            <h3 className="footer-heading footer-payment-heading">mettā muse ACCEPTS</h3>
            <div className="footer-payment-methods">
              <div className="payment-badge">
                <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="4" fill="white"/>
                  <text x="25" y="20" fontSize="10" fill="#4285F4" textAnchor="middle" fontWeight="bold">G Pay</text>
                </svg>
              </div>
              <div className="payment-badge">
                <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="4" fill="white"/>
                  <circle cx="20" cy="16" r="8" fill="#EB001B"/>
                  <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
                </svg>
              </div>
              <div className="payment-badge">
                <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="4" fill="white"/>
                  <text x="25" y="20" fontSize="9" fill="#003087" textAnchor="middle" fontWeight="bold">PayPal</text>
                </svg>
              </div>
              <div className="payment-badge">
                <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="4" fill="white"/>
                  <text x="25" y="20" fontSize="8" fill="#006FCF" textAnchor="middle" fontWeight="bold">AMEX</text>
                </svg>
              </div>
              <div className="payment-badge">
                <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="4" fill="white"/>
                  <text x="25" y="20" fontSize="8" fill="#000" textAnchor="middle" fontWeight="bold"> Pay</text>
                </svg>
              </div>
              <div className="payment-badge payment-shop">
                <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="32" rx="4" fill="#5A31F4"/>
                  <text x="25" y="21" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">Shop Pay</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>Copyright © {year} mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
