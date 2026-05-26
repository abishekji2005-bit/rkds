import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import {
  Braces,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Globe2,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Tag,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react';

const phoneDisplay = '+91 99944 62094';
const phoneHref = 'tel:+919994462094';
const whatsappMessage = 'hi I like to book an appointment. at RKDS';
const whatsappHref = `https://wa.me/919994462094?text=${encodeURIComponent(whatsappMessage)}`;
const facebookHref = 'https://www.facebook.com/share/1Da6i3UupE/';
const email = 'drnaveenaramnath@gmail.com';
const emailHref = `mailto:${email}`;
const appointmentWebAppUrl =
  'https://script.google.com/macros/s/AKfycbyuN2jTXSYLQsaIBA8ZuyumxQuEzWMbXaX5vyxW-x6WHy_e2y_PD6rrAaNANW1mlD5OwA/exec';
const hours = '10:00 AM - 1:00 PM and 5:00 PM - 8:00 PM (Daily)';
const address =
  'Vaiyapuri Nagar, SNS College Bus Stop, Kurumbapalayam, Coimbatore - 641 107';
const logoSrc = '/images/rkds-logo.png';
const clinicImages = {
  treatmentRoom: '/images/rkds-treatment-room.png',
  waitingArea: '/images/rkds-waiting-area.png',
  consultationRoom: '/images/rkds-consultation-room.png',
};

const heroStats = [
  { value: '40+', label: 'Years of care' },
  { value: '6', label: 'Specialists' },
  { value: 'Daily', label: 'Appointments' },
];

const navLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const whyCards = [
  {
    title: 'Years of Trusted Care',
    stat: '40+',
    body: 'Serving patients since 1984 - in Ooty, Coimbatore, and beyond. Built on professional care and affordable healthcare for all.',
    icon: ShieldCheck,
    featured: true,
  },
  {
    title: 'Painless Treatment',
    body: 'Advanced laser technology means most procedures are completed without discomfort. Experience dentistry that prioritises your comfort.',
    icon: Zap,
  },
  {
    title: 'Worldwide Patients',
    body: 'Patients from across India and abroad choose RKDS for specialist-level care and advanced technology.',
    icon: Globe2,
  },
  {
    title: 'Affordable Quality',
    body: 'Expert specialist care at a price that is honest, transparent, and fair.',
    icon: Tag,
  },
];

const services = [
  {
    title: 'Dental Implants',
    body: 'Replace missing teeth with a permanent, natural-looking solution placed by a certified implant specialist using ultrasonic surgical technology.',
    icon: SmilePlus,
    image: '/images/implant-3d.jpg',
  },
  {
    title: 'Root Canal Treatment',
    body: 'We remove infection and save your tooth comfortably. Our specialist endodontists use laser-assisted techniques for a painless procedure.',
    icon: Stethoscope,
    image: '/images/root-canal-3d.jpg',
  },
  {
    title: 'Braces & Clear Aligners',
    body: 'Straighten teeth with traditional braces or near-invisible trays, planned using 3D digital scanning for precise alignment.',
    icon: Braces,
    image: '/images/aligners-3d.jpg',
  },
  {
    title: 'Smile Designing',
    body: 'A complete smile makeover using veneers, crowns, whitening, and gum correction. Your dream smile, designed by a prosthodontics specialist.',
    icon: Sparkles,
    image: '/images/smile-design-3d.jpg',
  },
  {
    title: 'Laser Gum Treatment',
    body: 'Treat gum disease with our Zolar diode laser - no cuts, no stitches, minimal bleeding, and dramatically faster healing.',
    icon: WandSparkles,
    image: '/images/laser-gum-3d.jpg',
  },
  {
    title: "Children's Dentistry",
    body: 'Gentle, specialist dental care for children. Our paediatric specialist creates a fear-free environment that kids actually enjoy.',
    icon: Heart,
    image: '/images/children-dental-3d.jpg',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Book or Call',
    body: 'Choose a convenient time online, call us directly, or WhatsApp. We confirm your appointment within minutes.',
  },
  {
    num: '02',
    title: 'Meet Your Specialist',
    body: 'You will consult with a dedicated MDS specialist, not a general dentist. We explain every option clearly before we begin.',
  },
  {
    num: '03',
    title: 'Treatment, Comfortably Done',
    body: 'Your procedure is performed with laser and digital equipment by a qualified specialist. Most treatments are painless.',
  },
];

const specialists = [
  {
    initials: 'NR',
    tag: 'FACIOMAXILLARY SURGEON & PSYCHOLOGIST',
    name: 'Dr. Naveena Ramnath',
    quals: 'BDS, MDS (OMFS), IDEA (Implantology), MSc (Psychology)',
    bio: 'Leading faciomaxillary surgeon specializing in jaw corrections, facial surgery, dental implants, and patient-centered psychological care.',
  },
  {
    initials: 'RP',
    tag: 'ROOT CANAL SPECIALIST',
    name: 'Dr. Revathi Palanisamy',
    quals: 'BDS, MDS (Endodontics)',
    bio: 'Specialist endodontist focused on painless and precision-based root canal treatments for saving natural teeth.',
  },
  {
    initials: 'RK',
    tag: 'ROOT CANAL SPECIALIST',
    name: 'Dr. Raaj Kamal',
    quals: 'BDS, Dip (Endodontics)',
    bio: 'Experienced clinician providing advanced microscopic root canal therapy and restorative dental procedures.',
  },
  {
    initials: 'AB',
    tag: 'ORTHODONTIST & INVISALIGN PROVIDER',
    name: 'Dr. Abinila',
    quals: 'BDS, MDS (Orthodontics)',
    bio: 'Orthodontic specialist providing braces and clear aligner treatments with digital smile planning and long-term stability.',
  },
  {
    initials: 'AR',
    tag: 'PREVENTIVE & CHILD DENTAL SPECIALIST',
    name: 'Dr. Arvind',
    quals: 'BDS, MDS (Paedodontics)',
    bio: 'Child dental care expert focused on preventive dentistry, painless pediatric treatment, and positive dental experiences.',
  },
  {
    initials: 'MY',
    tag: 'PROSTHODONTICS & SMILE DESIGNING',
    name: 'Dr. Mayavaraj',
    quals: 'BDS, MDS (Maxillofacial Prosthodontics)',
    bio: 'Smile design and prosthodontic specialist delivering full-mouth rehabilitation and aesthetic restorative dentistry.',
  },
];

const equipment = [
  {
    badge: 'Zolar Photon Plus',
    name: 'Laser Surgery System',
    body: 'Treats gums and soft tissue without cuts. Less pain, minimal bleeding, faster healing than traditional surgical methods.',
    className: 'equip-laser',
  },
  {
    badge: 'Intraoral Scanner',
    name: '3D Digital Tooth Scanner',
    body: 'Maps your teeth in 3D in seconds - no messy impressions, no gagging. Perfect accuracy for crowns, aligners, and implants.',
    className: 'equip-scanner',
  },
  {
    badge: 'Acteon Piezotome Cube',
    name: 'Ultrasonic Bone Surgery',
    body: 'Precision bone surgery using sound waves. Less trauma, reduced swelling, and significantly faster recovery for implants and extractions.',
    className: 'equip-piezotome',
  },
];

const gallery = [
  {
    src: clinicImages.treatmentRoom,
    caption: 'Treatment Room',
  },
  {
    src: clinicImages.waitingArea,
    caption: 'Patient Waiting Area',
  },
  {
    src: clinicImages.consultationRoom,
    caption: 'Consultation Room',
  },
];

const testimonials = [
  {
    quote:
      'I was terrified of root canals. Dr. Revathi made the entire procedure completely painless. I still cannot believe it was done so quickly.',
    name: 'Priya K. - Coimbatore',
  },
  {
    quote:
      'Dr. Naveena did my jaw correction surgery. The care before and after was exceptional. The results have truly changed my life and confidence.',
    name: 'Arjun M. - Chennai',
  },
  {
    quote:
      'My children actually look forward to visiting RKDS. Dr. Arvind is wonderful with kids - every visit is completely stress-free.',
    name: 'Kavitha R. - Coimbatore',
  },
];

const treatmentsForForm = [
  'Dental Implants',
  'Root Canal Treatment',
  'Braces / Clear Aligners',
  'Smile Designing',
  'Laser Gum Treatment',
  "Children's Dentistry",
  'Face & Jaw Surgery',
  'Wisdom Tooth',
  'Teeth Whitening',
  'Crowns, Bridges & Dentures',
  'Other / General Query',
];

type AppointmentFormData = {
  name: string;
  phone: string;
  email: string;
  location: string;
  treatment: string;
  message: string;
};

type AppointmentStatus = 'idle' | 'success' | 'error';

type AppointmentResponse = {
  success?: boolean;
};

function getFormFieldValue(id: string) {
  const field = document.getElementById(id) as
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement
    | null;

  return field?.value.trim() ?? '';
}

function isValidPhone(phone: string) {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

function isValidEmailAddress(emailAddress: string) {
  if (!emailAddress) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailAddress);
}

function getAppointmentValidationError(data: AppointmentFormData) {
  if (!data.name || !data.phone || !data.location || !data.treatment) {
    return 'Please complete all required appointment fields.';
  }

  if (!isValidPhone(data.phone)) {
    return 'Please enter a valid phone number.';
  }

  if (!isValidEmailAddress(data.email)) {
    return 'Please enter a valid email address.';
  }

  return '';
}

function SectionHeader({
  label,
  title,
  align = 'left',
  dark = false,
  children,
}: {
  label: string;
  title: string;
  align?: 'left' | 'center';
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`section-header ${align === 'center' ? 'center' : ''}`}>
      <span className={`eyebrow ${dark ? 'white' : ''}`}>{label}</span>
      <h2 className={`section-title ${dark ? 'white' : ''}`}>{title}</h2>
      <div className="gold-line" />
      {children}
    </div>
  );
}

function Logo() {
  return (
    <a
      href="#hero"
      className="brand"
      aria-label="Ramkalyan Dental home"
      onClick={() => closeDrawerIfNeeded()}
    >
      <span className="logo-mark" aria-hidden="true">
        <img src={logoSrc} alt="" />
      </span>
      <span className="brand-copy">
        <strong>RKDS DENTAL</strong>
        <small>& Face Surgical Clinic</small>
      </span>
    </a>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4.25c-6.35 0-11.5 5.08-11.5 11.35 0 2.18.63 4.22 1.72 5.95L5.08 27.6l6.16-1.36A11.7 11.7 0 0 0 16 27.25c6.35 0 11.5-5.08 11.5-11.35S22.35 4.25 16 4.25Z"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.05 9.95c-.24-.55-.48-.56-.7-.57h-.6c-.22 0-.56.08-.84.4-.3.32-1.1 1.07-1.1 2.62 0 1.54 1.12 3.04 1.28 3.25.16.2 2.18 3.48 5.38 4.74 2.64 1.04 3.18.84 3.76.78.58-.05 1.86-.76 2.12-1.5.26-.74.26-1.36.18-1.5-.08-.13-.3-.2-.62-.36-.32-.16-1.9-.94-2.2-1.04-.3-.1-.52-.16-.74.16-.21.32-.84 1.04-1.03 1.26-.18.2-.37.23-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.8-2.25-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.22-.32.32-.53.1-.22.05-.4-.03-.56-.08-.16-.7-1.72-1-2.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

function closeDrawerIfNeeded() {
  document.body.classList.remove('drawer-open');
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('drawer-open', open);
    return () => document.body.classList.remove('drawer-open');
  }, [open]);

  useEffect(() => {
    const sections = ['#hero', ...navLinks.map((link) => link.href)]
      .map((href) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.08, 0.2, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <Logo />

      <div className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <a className="phone-display" href={phoneHref}>
          <Phone size={17} aria-hidden="true" />
          <span>{phoneDisplay}</span>
        </a>
        <a
          className="btn-primary nav-book"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon size={18} />
          Book on WhatsApp
        </a>
        <button
          id="hamburger"
          className="hamburger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <aside className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button
          className="drawer-close"
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>
        <Logo />
        <div className="drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={handleNav}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="btn-primary drawer-cta"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={handleNav}
        >
          <WhatsAppIcon size={18} />
          Book on WhatsApp
        </a>
      </aside>
      <button
        className={`drawer-scrim ${open ? 'open' : ''}`}
        type="button"
        aria-label="Close menu overlay"
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-kicker">
          <span>
            <CalendarCheck size={16} aria-hidden="true" />
            Daily appointments
          </span>
          <span>
            <MapPin size={16} aria-hidden="true" />
            Coimbatore & Ooty
          </span>
        </div>
        <span className="eyebrow white">PAINLESS · LASER-POWERED · SPECIALIST CARE</span>
        <h1>
          Specialist Dental Care,
          <br />
          <em>Made Painless.</em>
        </h1>
        <p className="hero-sub">
          40 years of trusted care. 6 specialist doctors. Modern laser-assisted
          treatments at Coimbatore&apos;s most advanced dental and face surgical clinic.
        </p>
        <div className="hero-ctas">
          <a
            href={whatsappHref}
            className="btn-primary hero-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={20} />
            Book on WhatsApp
          </a>
          <a href={phoneHref} className="btn-white">
            <Phone size={18} aria-hidden="true" />
            Call {phoneDisplay}
          </a>
        </div>
        <div className="hero-stats" aria-label="RKDS clinic highlights">
          {heroStats.map((stat) => (
            <span className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <small>{stat.label}</small>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBar() {
  return (
    <div id="infobar">
      <span>
        <MapPin size={18} aria-hidden="true" />
        Kurumbapalayam, Coimbatore
      </span>
      <a href={phoneHref}>
        <Phone size={18} aria-hidden="true" />
        {phoneDisplay}
      </a>
      <span>
        <Clock size={18} aria-hidden="true" />
        10AM-1PM · 5PM-8PM Daily
      </span>
      <a href={emailHref}>
        <Mail size={18} aria-hidden="true" />
        {email}
      </a>
    </div>
  );
}

function WhySection() {
  return (
    <section id="why" className="section stone">
      <div className="container">
        <SectionHeader
          label="WHY CHOOSE US"
          title="More Than a Dentist. A Complete Care Team."
          align="center"
        />
        <div className="why-grid">
          {whyCards.map((item) => {
            const Icon = item.icon;
            return (
              <article
                className={`card why-card ${item.featured ? 'featured' : ''}`}
                key={item.title}
              >
                <Icon className="card-icon" aria-hidden="true" />
                {item.stat && <span className="why-stat">{item.stat}</span>}
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection() {
  return (
    <section id="treatments" className="section white-section">
      <div className="container">
        <SectionHeader label="OUR TREATMENTS" title="Expert Care for Every Dental Need.">
          <p className="section-copy">
            From painless root canals to full smile makeovers - our 6-doctor specialist
            team has the expertise and technology to help you.
          </p>
        </SectionHeader>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="card service-card" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt="" loading="lazy" />
                  <span className="service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.body}</p>
                <a
                  href={whatsappHref}
                  className="service-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book This Treatment →
                </a>
              </article>
            );
          })}
        </div>
        <div className="center mt-40">
          <a href={whatsappHref} className="btn-primary" target="_blank" rel="noreferrer">
            <WhatsAppIcon size={20} />
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section dark-section">
      <div className="container">
        <SectionHeader
          label="THE PROCESS"
          title="Getting Care at RKDS is Simple."
          align="center"
          dark
        />
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.num}>
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-body">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialistsSection() {
  return (
    <section id="doctors" className="specialists-section section">
      <div className="container">
        <div className="specialists-intro">
          <SectionHeader label="OUR SPECIALISTS" title="6 Specialists. One Clinic. Complete Care.">
            <p className="section-copy">
              Every doctor at RKDS holds a postgraduate MDS or equivalent specialist
              qualification. You are always treated by a dedicated specialist for your
              specific dental concern.
            </p>
          </SectionHeader>
        </div>

        <div className="specialists-grid" aria-label="RKDS specialist doctors">
          {specialists.map((doctor) => (
            <article className="specialist-card card" key={doctor.name}>
              <div className="specialist-avatar" aria-hidden="true">
                {doctor.initials}
              </div>
              <div className="specialist-specialty">{doctor.tag}</div>
              <h3 className="specialist-name">{doctor.name}</h3>
              <p className="specialist-quals">{doctor.quals}</p>
              <p className="specialist-bio">{doctor.bio}</p>
              <a
                href={whatsappHref}
                className="btn-secondary specialist-button"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} />
                Book Appointment
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipmentSection() {
  return (
    <section id="equipment" className="section white-section">
      <div className="container">
        <SectionHeader label="OUR TECHNOLOGY" title="Clinic-Grade Equipment You Can Trust.">
          <p className="section-copy">
            We invest in the same technology used by specialist hospitals - so your
            treatment is precise, comfortable, and delivered to the highest standard.
          </p>
        </SectionHeader>
        <div className="equipment-grid">
          {equipment.map((item) => (
            <article className="card equipment-card" key={item.name}>
              <div className="equip-image-wrap">
                <div className={`equip-visual ${item.className}`} />
              </div>
              <div className="equip-badge">{item.badge}</div>
              <h3 className="equip-name">{item.name}</h3>
              <p className="equip-desc">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="section dark-section">
      <div className="container">
        <SectionHeader
          label="INSIDE RKDS"
          title="A Space Designed for Your Comfort."
          align="center"
          dark
        >
          <p className="section-copy light center-copy">
            Our Coimbatore clinic pairs a calm waiting area, modern consultation room,
            and fully equipped treatment room under one roof.
          </p>
        </SectionHeader>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className="gallery-item" key={`${item.caption}-${index}`}>
              <img src={item.src} alt={item.caption} loading="lazy" />
              <figcaption className="gallery-caption">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const visibleTestimonials = useMemo(
    () => testimonials.map((_, index) => testimonials[(active + index) % testimonials.length]),
    [active]
  );

  const move = (direction: number) => {
    setActive((value) => (value + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section stone">
      <div className="container">
        <SectionHeader
          label="WHAT PATIENTS SAY"
          title="Trusted by Families Across Generations."
          align="center"
        />
        <div className="testimonial-shell">
          <button
            className="testimonial-arrow"
            type="button"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="testimonial-grid">
            {visibleTestimonials.map((testimonial) => (
              <article className="testimonial-card card" key={testimonial.name}>
                <div className="stars" aria-label="5 star review">
                  ★★★★★
                </div>
                <blockquote className="quote">"{testimonial.quote}"</blockquote>
                <div className="patient-name">{testimonial.name}</div>
              </article>
            ))}
          </div>
          <button
            className="testimonial-arrow"
            type="button"
            aria-label="Next testimonial"
            onClick={() => move(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div className="testimonial-dots" aria-label="Choose testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.name}
              className={index === active ? 'active' : ''}
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section white-section">
      <div className="container about-grid">
        <div>
          <SectionHeader label="OUR STORY" title="Building Trust Since 1984." />
          <div className="about-copy">
            <p>
              Ram Kalyan Clinic was founded in Ooty in 1984 by Lion. Dr. V R Nath -
              built on the principles of professional care and affordable healthcare for
              all communities.
            </p>
            <p>
              The Coimbatore branch opened in 2013, bringing the same commitment to
              excellence to a growing community. In June 2026, we moved into a spacious,
              fully modernised clinic in Kurumbapalayam with expanded capacity, a team of
              6 specialist doctors, and the most advanced dental equipment in the region.
            </p>
            <p>
              Today, we serve patients from across India and the world - a testament to
              our unwavering dedication to quality care.
            </p>
          </div>
          <a href={whatsappHref} className="btn-primary" target="_blank" rel="noreferrer">
            Book Your Appointment →
          </a>
        </div>
        <div className="about-image-wrap">
          <img src={clinicImages.treatmentRoom} alt="RKDS treatment room" loading="lazy" />
          <div className="stat-card">
            <span className="stat-num">40+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="cta-banner">
      <div className="container center">
        <span className="eyebrow white">GET STARTED TODAY</span>
        <h2 className="section-title white cta-title">Ready to Transform Your Smile?</h2>
        <div className="gold-line" />
        <p>
          Our specialists are available every day. Call, WhatsApp, or book online - we
          guide you from first consultation to final treatment.
        </p>
        <div className="cta-actions">
          <a href={whatsappHref} className="btn-primary" target="_blank" rel="noreferrer">
            <WhatsAppIcon size={20} />
            Book on WhatsApp
          </a>
          <a href={phoneHref} className="btn-white">
            <Phone size={18} aria-hidden="true" />
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<AppointmentStatus>('idle');
  const [formMessage, setFormMessage] = useState('');
  const statusTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current !== null) {
        window.clearTimeout(statusTimerRef.current);
      }
    };
  }, []);

  const showFormStatus = (status: AppointmentStatus, message: string) => {
    if (statusTimerRef.current !== null) {
      window.clearTimeout(statusTimerRef.current);
    }

    setFormStatus(status);
    setFormMessage(message);

    if (status !== 'idle') {
      statusTimerRef.current = window.setTimeout(() => {
        setFormStatus('idle');
        setFormMessage('');
        statusTimerRef.current = null;
      }, 6000);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const data: AppointmentFormData = {
      name: getFormFieldValue('name'),
      phone: getFormFieldValue('phone'),
      email: getFormFieldValue('email'),
      location: getFormFieldValue('location'),
      treatment: getFormFieldValue('treatment'),
      message: getFormFieldValue('message'),
    };

    const validationError = getAppointmentValidationError(data);

    if (validationError) {
      showFormStatus('error', validationError);
      alert('Submission failed');
      return;
    }

    setIsSubmitting(true);
    showFormStatus('idle', '');

    try {
      const response = await fetch(appointmentWebAppUrl, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as AppointmentResponse;

      if (response.ok && result.success) {
        alert('Appointment Submitted Successfully!');
        form.reset();
        showFormStatus(
          'success',
          'Thank you. Your appointment request was received, and our team will contact you shortly.'
        );
      } else {
        alert('Submission failed');
        showFormStatus(
          'error',
          'We could not submit your appointment request. Please try again.'
        );
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
      showFormStatus(
        'error',
        'Something went wrong while submitting. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section stone">
      <div className="container">
        <SectionHeader label="REACH US" title="Book Your Appointment" align="center" />
        <div className="contact-grid">
          <form
            id="appointmentForm"
            className="appointment-form card"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+91..."
                  autoComplete="tel"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <select id="location" name="location" required defaultValue="">
                  <option value="">Select location</option>
                  <option>Coimbatore - Kurumbapalayam</option>
                  <option>Ooty</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="treatment">Treatment Needed *</label>
                <select id="treatment" name="treatment" required defaultValue="">
                  <option value="">Select treatment</option>
                  {treatmentsForForm.map((treatment) => (
                    <option key={treatment}>{treatment}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your concern..."
              />
            </div>
            <button
              type="submit"
              className="btn-primary form-submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              aria-describedby={formMessage ? 'appointmentStatus' : undefined}
            >
              {isSubmitting && <span className="submit-spinner" aria-hidden="true" />}
              <span>{isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}</span>
            </button>
            <p className="form-note">Walk-ins welcome during clinic hours</p>
            {formMessage && (
              <p
                id="appointmentStatus"
                className={`form-status ${formStatus}`}
                role={formStatus === 'error' ? 'alert' : 'status'}
                aria-live={formStatus === 'error' ? 'assertive' : 'polite'}
              >
                {formMessage}
              </p>
            )}
          </form>

          <div className="location-stack">
            <article className="location-card card">
              <h3>Coimbatore (Main)</h3>
              <p>
                <MapPin aria-hidden="true" />
                {address}
              </p>
              <p>
                <Phone aria-hidden="true" />
                <a href={phoneHref}>{phoneDisplay}</a>
              </p>
              <p>
                <Clock aria-hidden="true" />
                {hours}
              </p>
              <p>
                <Mail aria-hidden="true" />
                <a href={emailHref}>{email}</a>
              </p>
              <a
                href="https://share.google/8RLpQG17VFcipqnBB"
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps →
              </a>
            </article>
            <article className="location-card card">
              <h3>Ooty</h3>
              <p>
                <MapPin aria-hidden="true" />
                Krishnammal Apartments, Bandlane, Old Liberty Theatre Backside, Ooty -
                643 001
              </p>
              <p>
                <Phone aria-hidden="true" />
                <a href={phoneHref}>{phoneDisplay}</a>
              </p>
              <p>
                <Clock aria-hidden="true" />
                {hours}
              </p>
              <a
                href="https://maps.app.goo.gl/6GhJYsL6HZh73Yco8"
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps →
              </a>
            </article>
            <a
              href={whatsappHref}
              className="btn-primary whatsapp-button"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-tagline">Painless Dental Clinic</p>
            <p className="footer-subtag">Advanced LASER, IMPLANT & COSMETIC SMILE CENTER</p>
            <p className="footer-group">Part of Ram Kalyan Group of Clinics</p>
            <p className="footer-muted">
              Dental & Face Surgery · Diabetes Care · General Healthcare · Sexology
            </p>
            <div className="social-links">
              <a href={facebookHref} aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#treatments">Treatments</a>
              <a href="#doctors">Doctors</a>
              <a href="#equipment">Equipment</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h3>Get in Touch</h3>
            <div className="footer-contact">
              <a href={phoneHref}>{phoneDisplay}</a>
              <a href={emailHref}>{email}</a>
              <span>10AM-1PM · 5PM-8PM Daily</span>
              <span>Unit 1: Kurumbapalayam, Coimbatore 641 107</span>
              <span>Unit 2: Ooty 643 001</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Ramkalyan Dental & Face Surgical Clinic. All Rights Reserved.</span>
          <span>Coimbatore · Ooty · Chennai</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        id="whatsapp-fab"
        href={whatsappHref}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={32} />
      </a>
      <button
        id="back-to-top"
        className={visible ? 'visible' : ''}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll('.card, .process-step, .section-header, .gallery-item, .specialist-card')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <InfoBar />
        <WhySection />
        <TreatmentsSection />
        <ProcessSection />
        <SpecialistsSection />
        <EquipmentSection />
        <GallerySection />
        <TestimonialsSection />
        <AboutSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <FooterSection />
      <FloatingActions />
    </>
  );
}

export default App;
