import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Dumbbell,
  Handshake,
  HandHeart,
  Heart,
  HeartHandshake,
  Landmark,
  Menu,
  Medal,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserRoundCheck,
  UsersRound,
  Volleyball,
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
            <a href="#about">Get Involved</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#gallery">Gallery</a>
          </nav>
          <a className="donate" href="#about">Donate <Heart size={15} strokeWidth={2.5} /></a>
          <button className="menu" aria-label="Open menu"><Menu /></button>
        </div>
      </header>
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content wrap">
          <p className="eyebrow">Unity. Culture. Community.</p>
          <h1>Uniting community.<br />Celebrating culture.<br /><em>Building legacies.</em></h1>
          <p className="hero-copy">A 501(c)(3) nonprofit organization dedicated to strengthening our community through sports, culture, leadership, and service.</p>
          <div className="hero-actions">
            <a className="button gold" href="#about">About us</a>
            <a className="button outline" href="#programs">Get involved <ArrowRight size={16} /></a>
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
          <a className="text-link" href="#mission">Learn more about us <ArrowRight size={16} /></a>
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
          {memories.map((image, index) => <div className="memory-photo" key={image}><Image src={image} alt={`SDAASC community memory ${index + 1}`} fill sizes="(max-width: 760px) 50vw, 16vw" /></div>)}
        </div>
      </section>

      <section className="sponsors wrap" id="sponsors">
        <div className="section-heading"><span /> <h2>Our sponsors</h2> <span /></div>
        <div className="sponsor-marquee" aria-label="SDAASC sponsors"><div className="sponsor-grid">{[...sponsors, ...sponsors].map((sponsor, index) => <div className="sponsor-logo has-logo" aria-hidden={index >= sponsors.length} key={`${sponsor.name}-${index}`}><Image className="sponsor-image" src={sponsor.logo} alt={index < sponsors.length ? sponsor.name : ""} width={320} height={120} /></div>)}</div></div>
        <p>Interested in becoming a sponsor? <a href="#contact">Partner with us <ArrowRight size={15} /></a></p>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <p className="eyebrow">Join our community</p>
          <h2>There&apos;s a place for you<br />in the SDAASC family.</h2>
          <p>Whether you&apos;re an athlete, volunteer, sponsor, or supporter, let&apos;s build a legacy of unity, leadership, and service together.</p>
          <div><a className="button gold" href="#programs">Get involved <ArrowRight size={16} /></a><a className="button outline" href="#sponsors">Become a sponsor</a></div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-content wrap">
          <div className="footer-brand"><Image src="/images/sdaasc-logo.png" alt="SDAASC" width={64} height={64} /><div><strong>San Diego Asian American Sports Club (SDAASC)</strong><span>P.O. Box 20116, San Diego, CA 92198</span><span>info@sdaasc.org</span></div></div>
          <div className="social"><strong>Follow us</strong><span>Facebook · Instagram · LinkedIn</span></div>
          <p>SDAASC is a 501(c)(3) nonprofit organization. Funds raised support programs, events, and community service.</p>
          <a className="donate" href="#home">Donate <Heart size={15} strokeWidth={2.5} /></a>
        </div>
        <div className="copyright">© 2025 San Diego Asian American Sports Club (SDAASC). All Rights Reserved.</div>
      </footer>
    </main>
  );
}
