"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Building2,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Handshake,
  HandHeart,
  Heart,
  HeartHandshake,
  Landmark,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserRoundCheck,
  UsersRound,
  Volleyball,
  X,
} from "lucide-react";

const pillars = [
  { icon: UsersRound, title: "Community", copy: "Building strong connections and lifelong friendships." },
  { icon: Dumbbell, title: "Sports", copy: "Promoting healthy lifestyles through athletics and teamwork." },
  { icon: Landmark, title: "Culture", copy: "Honoring heritage and celebrating diversity." },
  { icon: Building2, title: "Leadership", copy: "Empowering individuals to lead, inspire, and make an impact." },
  { icon: HandHeart, title: "Service", copy: "Giving back to our community through volunteerism." },
  { icon: Heart, title: "Family", copy: "Creating positive, family-centered experiences." },
];

const impact = [
  { icon: Trophy, stat: "20+", label: "Years", copy: "of serving our community" },
  { icon: UsersRound, stat: "1,000+", label: "Athletes & participants", copy: "each year" },
  { icon: Volleyball, stat: "50+", label: "Teams", copy: "from across the United States" },
  { icon: Heart, stat: "100%", label: "Volunteer driven", copy: "community organization" },
  { icon: HandHeart, stat: "Countless", label: "Lives impacted", copy: "through sports and service" },
];

const programs = [
  { icon: Volleyball, title: "National volleyball tournament", copy: "Our premier annual event attracts athletes and spectators from across the United States for competition, camaraderie, and celebration.", image: "/images/gallery/volleyball-team.png" },
  { icon: Sparkles, title: "Community events", copy: "Social gatherings, networking opportunities, family activities, and cultural celebrations throughout the year.", image: "/images/gallery/cultural-event.png" },
  { icon: UserRoundCheck, title: "Youth & family engagement", copy: "Creating opportunities for youth and families to build teamwork, leadership, and positive values together.", image: "/images/gallery/youth-winners.jpg" },
  { icon: HeartHandshake, title: "Community service", copy: "Supporting charitable causes and partnering with local organizations to improve lives in our community.", image: "/images/gallery/community-meal.png" },
  { icon: Handshake, title: "Corporate partnerships", copy: "Collaborating with businesses that share our commitment to meaningful community impact.", image: "/images/gallery/community-event.png" },
  { icon: UsersRound, title: "Building community", copy: "Bringing people together through sports, culture, volunteerism, and shared experiences.", image: "/images/gallery/team-portrait.png" },
];

const reasons = [
  { icon: UsersRound, copy: "Build lifelong friendships" },
  { icon: Landmark, copy: "Celebrate culture and heritage" },
  { icon: Award, copy: "Develop leadership skills" },
  { icon: HandHeart, copy: "Give back to the community" },
  { icon: Star, copy: "Make a positive impact" },
  { icon: ShieldCheck, copy: "Be part of something meaningful" },
];

const memories = [
  "/images/gallery/trophy-winners.jpg",
  "/images/gallery/team-bench.png",
  "/images/gallery/volleyball-team.png",
  "/images/gallery/legacy-champions.jpg",
  "/images/gallery/family-trophy.jpg",
  "/images/gallery/night-winners.jpg",
  "/images/gallery/youth-winners.jpg",
  "/images/gallery/cultural-event.png",
  "/images/gallery/cultural-family.png",
  "/images/gallery/outdoor-community.png",
  "/images/gallery/community-meal.png",
  "/images/gallery/team-portrait.png",
];

const sponsors = [
  { name: "Pactex Lodging Supply", logo: "/images/sponsors/pactex.png" },
  { name: "IHG Hotels & Resorts", logo: "/images/sponsors/ihg.jpg" },
  { name: "Charles Schwab", logo: "/images/sponsors/charles-schwab.png" },
  { name: "NUT & Diamond Furniture", logo: "/images/sponsors/nut-diamond.webp" },
  { name: "SGL Insurance Services", logo: "/images/sponsors/sgl-insurance.png" },
  { name: "DRA Attorneys at Law", logo: "/images/sponsors/dra-law.png" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Cookie Consent States
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookieSettingsModal, setShowCookieSettingsModal] = useState(false);
  const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    performance: false,
    functional: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedConsent = localStorage.getItem("sdaasc_cookie_consent");
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setCookiePreferences(parsed);
      } catch {
        setShowCookieBanner(true);
      }
    } else {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = { essential: true, performance: true, functional: true };
    setCookiePreferences(allConsent);
    localStorage.setItem("sdaasc_cookie_consent", JSON.stringify(allConsent));
    setShowCookieBanner(false);
    setShowCookieSettingsModal(false);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = { essential: true, performance: false, functional: false };
    setCookiePreferences(essentialOnly);
    localStorage.setItem("sdaasc_cookie_consent", JSON.stringify(essentialOnly));
    setShowCookieBanner(false);
    setShowCookieSettingsModal(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("sdaasc_cookie_consent", JSON.stringify(cookiePreferences));
    setShowCookieBanner(false);
    setShowCookieSettingsModal(false);
  };

  return (
    <main>
      <header className="site-header">
        <div className="nav wrap">
          <a className="brand" href="#home" aria-label="SDAASC home">
            <Image src="/images/sdaasc-logo.png" alt="San Diego Asian American Sports Club" width={84} height={84} priority />
            <span>San Diego<br />Asian American<br />Sports Club</span>
          </a>
          <nav aria-label="Main navigation">
            <a className="active" href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#programs">Events</a>
            <a href="#programs">Programs</a>
            <a href="mailto:DAYSINNVT@yahoo.com?subject=New%20Member%20Interest">Get Involved</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#gallery">Gallery</a>
          </nav>
          <a className="donate" href="mailto:dpatel@dpalaw.com?subject=Donation%20Inquiry%20-%20SDAASC">Donate <Heart size={15} strokeWidth={2.5} /></a>
          <button className="menu" onClick={() => setMobileMenuOpen(true)} aria-label="Open mobile menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand">
                <Image src="/images/sdaasc-logo.png" alt="SDAASC" width={48} height={48} />
                <span>San Diego<br />Asian American<br />Sports Club</span>
              </div>
              <button className="close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="mobile-nav-links">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#programs" onClick={() => setMobileMenuOpen(false)}>Events & Programs</a>
              <a href="#impact" onClick={() => setMobileMenuOpen(false)}>Our Impact</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#sponsors" onClick={() => setMobileMenuOpen(false)}>Sponsors</a>
              <a href="mailto:DAYSINNVT@yahoo.com?subject=New%20Member%20Interest" onClick={() => setMobileMenuOpen(false)}>Get Involved</a>
              <a className="donate" href="mailto:dpatel@dpalaw.com?subject=Donation%20Inquiry%20-%20SDAASC" onClick={() => setMobileMenuOpen(false)}>
                Donate <Heart size={15} strokeWidth={2.5} />
              </a>
            </nav>
          </div>
        </div>
      )}

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content wrap">
          <p className="eyebrow">Unity. Culture. Community.</p>
          <h1>Uniting community.<br />Celebrating culture.<br /><em>Building legacies.</em></h1>
          <p className="hero-copy">A 501(c)(3) nonprofit organization dedicated to strengthening our community through sports, culture, leadership, and service.</p>
          <div className="hero-actions">
            <a className="button gold" href="#about">About us</a>
            <a className="button outline" href="mailto:DAYSINNVT@yahoo.com?subject=New%20Member%20Interest">Get involved <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="pillars wrap" id="programs" aria-label="Our values">
        {pillars.map(({ icon: Icon, title, copy }) => (
          <article className="pillar" key={title}>
            <Icon aria-hidden="true" />
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="about wrap" id="about">
        <div className="about-copy">
          <h2>About us</h2>
          <span className="gold-rule" />
          <p>The San Diego Asian American Sports Club (SDAASC) is a 501(c)(3) nonprofit dedicated to strengthening our community through athletics, culture, leadership, and service.</p>
          <p>Founded on the belief that sports have the power to unite people from all backgrounds, SDAASC creates opportunities for individuals and families to build lifelong friendships, promote healthy lifestyles, celebrate cultural heritage, and give back to the communities we serve.</p>
          <p>While volleyball remains one of our signature events, our mission extends far beyond the court. We are committed to building a stronger, more connected community where individuals can compete, lead, volunteer, and thrive together.</p>
        </div>
        <div className="about-art" aria-label="SDAASC players and community members">
          <Image src="/images/hero.png" alt="SDAASC athletes and community members" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="art-badge"><span>SD</span><small>Since 2004</small></div>
        </div>
        <div className="mission" id="mission">
          <div className="mission-mark" aria-hidden="true"><Target /><ArrowUpRight /></div>
          <div>
            <p className="eyebrow">Mission statement</p>
            <p>Our mission is to strengthen and unite our community by promoting health, leadership, cultural pride, family values, and lifelong relationships through athletics, community engagement, and service.</p>
            <p>We strive to create opportunities that inspire individuals of all ages to lead active lives, embrace diversity, develop meaningful connections, and make a lasting positive impact throughout San Diego and beyond.</p>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="wrap">
          <div className="section-heading"><span /> <h2>Our impact</h2> <span /></div>
          <div className="impact-grid">
            {impact.map(({ icon: Icon, stat, label, copy }) => (
              <article className="impact-item" key={label}>
                <Icon aria-hidden="true" />
                <div><strong>{stat}</strong><h3>{label}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="programs wrap" id="programs">
        <div className="section-heading"><span /> <h2>What we do</h2> <span /></div>
        <div className="program-grid">
          {programs.map(({ icon: Icon, title, copy, image }) => (
            <article className="program-card" key={title}>
              <div className="program-photo"><Image src={image} alt="SDAASC community event" fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              <div className="program-icon"><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-join wrap">
        <div className="why-copy"><h2>Why join SDAASC?</h2><span className="gold-rule" /><p>At SDAASC, you&apos;re more than a participant—you&apos;re part of a family. Whether you&apos;re an athlete, volunteer, sponsor, or supporter, you&apos;ll find opportunities to connect, grow, and give back.</p></div>
        <div className="reason-grid">
          {reasons.map(({ icon: Icon, copy }) => <article key={copy}><Icon aria-hidden="true" /><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="memories wrap" id="gallery">
        <div className="section-heading"><span /> <h2>A community of memories</h2> <span /></div>
        <div className="memory-grid">
          {memories.map((image, index) => (
            <div className="memory-photo" key={image} onClick={() => setLightboxIndex(index)} role="button" aria-label={`View full memory photo ${index + 1}`}>
              <Image src={image} alt={`SDAASC community memory ${index + 1}`} fill sizes="(max-width: 760px) 50vw, 16vw" />
              <div className="memory-overlay"><Sparkles size={20} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close image">
              <X size={24} />
            </button>
            <button
              className="lightbox-nav prev"
              onClick={() => setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + memories.length) % memories.length))}
              aria-label="Previous image"
            >
              <ChevronLeft size={30} />
            </button>
            <div className="lightbox-image-container">
              <Image src={memories[lightboxIndex]} alt={`SDAASC memory ${lightboxIndex + 1}`} width={960} height={640} className="lightbox-image" priority />
            </div>
            <button
              className="lightbox-nav next"
              onClick={() => setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % memories.length))}
              aria-label="Next image"
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      )}

      <section className="sponsors wrap" id="sponsors">
        <div className="section-heading"><span /> <h2>Our sponsors</h2> <span /></div>
        <div className="sponsor-marquee" aria-label="SDAASC sponsors">
          <div className="sponsor-grid">
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
              <div className="sponsor-card" aria-hidden={index >= sponsors.length} key={`${sponsor.name}-${index}`}>
                <Image className="sponsor-image" src={sponsor.logo} alt={index < sponsors.length ? sponsor.name : ""} width={280} height={90} />
              </div>
            ))}
          </div>
        </div>
        <p className="sponsor-cta">Interested in becoming a sponsor? <a href="mailto:DAYSINNVT@yahoo.com?subject=Sponsorship%20Inquiry">PARTNER WITH US <ArrowRight size={15} /></a></p>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <p className="eyebrow">Join our community</p>
          <h2>There&apos;s a place for you<br />in the SDAASC family.</h2>
          <p>Whether you&apos;re an athlete, volunteer, sponsor, or supporter, let&apos;s build a legacy of unity, leadership, and service together.</p>
          <div>
            <a className="button gold" href="mailto:DAYSINNVT@yahoo.com?subject=New%20Member%20Interest">Get involved <ArrowRight size={16} /></a>
            <a className="button outline" href="mailto:DAYSINNVT@yahoo.com?subject=Sponsorship%20Inquiry">Become a sponsor</a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-content wrap">
          <div className="footer-brand">
            <Image src="/images/sdaasc-logo.png" alt="SDAASC" width={64} height={64} />
            <div>
              <strong>San Diego Asian American Sports Club (SDAASC)</strong>
              <span>P.O. Box 20116, San Diego, CA 92198</span>
              <span>Donations: <a href="mailto:dpatel@dpalaw.com" className="footer-email">dpatel@dpalaw.com</a></span>
              <span>Member & Sponsor Inquiries: <a href="mailto:DAYSINNVT@yahoo.com" className="footer-email">DAYSINNVT@yahoo.com</a></span>
            </div>
          </div>
          <p>SDAASC is a 501(c)(3) nonprofit organization. Funds raised support programs, events, and community service.</p>
          <a className="donate" href="mailto:dpatel@dpalaw.com?subject=Donation%20Inquiry%20-%20SDAASC">Donate <Heart size={15} strokeWidth={2.5} /></a>
        </div>
        <div className="copyright">
          © 2025 San Diego Asian American Sports Club (SDAASC). All Rights Reserved.
          <span className="copyright-links">
            <button className="footer-link-btn" onClick={() => setShowCookieSettingsModal(true)}>
              Cookie Settings
            </button>
            <span>·</span>
            <button className="footer-link-btn" onClick={() => setShowPrivacyPolicyModal(true)}>
              Privacy Policy
            </button>
          </span>
        </div>
        <div className="aiws-footer-credit">
          Designed &amp; Developed by{" "}
          <a href="https://www.aiwebsiteservice.com/" target="_blank" rel="noopener noreferrer">
            AIWebsiteService
          </a>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <aside className="cookie-banner" aria-label="Cookie Consent Banner">
          <div className="cookie-banner-wrap wrap">
            <div className="cookie-banner-text">
              <p>
                We use cookies and similar technologies to support the operation of our website and improve your browsing experience. You can accept all cookies or reject non-essential cookies. For more information, please see our{" "}
                <button className="cookie-inline-link" onClick={() => setShowPrivacyPolicyModal(true)}>
                  Privacy Policy
                </button>.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button className="button gold" onClick={handleAcceptAll}>
                Accept All
              </button>
              <button className="button outline" onClick={handleRejectNonEssential}>
                Reject Non-Essential
              </button>
              <button className="button text-btn" onClick={() => setShowCookieSettingsModal(true)}>
                Cookie Settings
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Cookie Settings Modal */}
      {showCookieSettingsModal && (
        <div className="cookie-modal-overlay" onClick={() => setShowCookieSettingsModal(false)}>
          <div className="cookie-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
            <div className="cookie-modal-header">
              <h2 id="cookie-settings-title">Cookie Preferences</h2>
              <button className="close-btn" onClick={() => setShowCookieSettingsModal(false)} aria-label="Close cookie settings">
                <X size={22} />
              </button>
            </div>
            <div className="cookie-modal-body">
              <p className="cookie-modal-intro">
                Customize your cookie preferences below. Essential cookies are necessary for the website to function properly and remain enabled.
              </p>
              
              <div className="cookie-option">
                <div className="cookie-option-info">
                  <strong>Essential Cookies</strong>
                  <span>Required for basic site operation, security, and accessibility features.</span>
                </div>
                <div className="cookie-toggle locked">
                  <ShieldCheck size={16} /> Always Active
                </div>
              </div>

              <div className="cookie-option">
                <div className="cookie-option-info">
                  <strong>Performance & Analytics Cookies</strong>
                  <span>Optional cookies used to analyze site performance and aggregate visitor traffic metrics.</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.performance}
                    onChange={(e) => setCookiePreferences((prev) => ({ ...prev, performance: e.target.checked }))}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="cookie-option">
                <div className="cookie-option-info">
                  <strong>Functional Preferences</strong>
                  <span>Optional cookies that remember user choices and layout preferences.</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.functional}
                    onChange={(e) => setCookiePreferences((prev) => ({ ...prev, functional: e.target.checked }))}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="cookie-modal-footer">
              <button className="button outline" onClick={handleSavePreferences}>
                Save Preferences
              </button>
              <button className="button gold" onClick={handleAcceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyPolicyModal && (
        <div className="cookie-modal-overlay" onClick={() => setShowPrivacyPolicyModal(false)}>
          <div className="cookie-modal privacy-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title">
            <div className="cookie-modal-header">
              <h2 id="privacy-policy-title">Privacy Policy</h2>
              <button className="close-btn" onClick={() => setShowPrivacyPolicyModal(false)} aria-label="Close privacy policy">
                <X size={22} />
              </button>
            </div>
            <div className="cookie-modal-body privacy-body">
              <h3>San Diego Asian American Sports Club (SDAASC)</h3>
              <p className="effective-date"><strong>Effective Date:</strong> January 1, 2025</p>
              <p>The San Diego Asian American Sports Club (SDAASC) is a 501(c)(3) nonprofit organization committed to protecting your privacy. This Privacy Policy explains how we handle your information and respect your cookie choices when you visit our website.</p>
              
              <h4>1. Information We Collect</h4>
              <p>We only collect personal information that you voluntarily provide to us when contacting us regarding membership, events, sponsorship, or donations (such as your name, email address, and message details).</p>
              
              <h4>2. How We Use Cookies & Local Storage</h4>
              <p>We use essential cookies and local storage to support website navigation, ensure security, and store your cookie consent preferences. Essential cookies remain enabled as they are necessary for the website to function. Non-essential cookies are only activated with your explicit consent.</p>
              
              <h4>3. Data Sharing & Third Parties</h4>
              <p>SDAASC does not sell, trade, or rent personal information to third parties. We do not use advertising tracking networks or external data brokers.</p>
              
              <h4>4. Contact Us</h4>
              <p>If you have questions regarding this Privacy Policy or wish to manage your information, please contact us at:</p>
              <ul>
                <li><strong>Donations:</strong> <a href="mailto:dpatel@dpalaw.com" className="footer-email">dpatel@dpalaw.com</a></li>
                <li><strong>Membership & Sponsorships:</strong> <a href="mailto:DAYSINNVT@yahoo.com" className="footer-email">DAYSINNVT@yahoo.com</a></li>
              </ul>
            </div>
            <div className="cookie-modal-footer">
              <button className="button gold" onClick={() => setShowPrivacyPolicyModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
