"use client";
/* eslint-disable @next/next/no-img-element */

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  FiArrowRight as ArrowRight,
  FiCheckCircle as CheckCircle,
  FiChevronLeft as ChevronLeft,
  FiChevronRight as ChevronRight,
  FiCode as Code,
  FiMail as Mail,
  FiMenu as Menu,
  FiMessageCircle as MessageCircle,
  FiMessageSquare as MessageSquare,
  FiSend as Send,
  FiX as X,
  FiZap as Lightbulb,
} from "react-icons/fi";
import { FaFacebookF as Facebook, FaPalette as Palette, FaRocket as Rocket } from "react-icons/fa";
import { RiSkypeFill, RiWhatsappFill } from "react-icons/ri";
import Lottie from "lottie-react";

const handleTrackTwitterEvent = () => {
  if (typeof window === "undefined") return;
  const track = (window as any).trackTwitterEvent;
  if (typeof track === "function") {
    track();
  } else if (typeof (window as any).twq === "function") {
    (window as any).twq("event", "tw-qlj5x-qlj5x", {});
  }
};

const handleClosePopup = () => {
  if (typeof window !== "undefined" && typeof (window as any).closePopup === "function") {
    (window as any).closePopup();
  }
};

const handleTrackAndClosePopup = () => {
  handleTrackTwitterEvent();
  handleClosePopup();
};

const handleCloseFloatingBanner = () => {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).closeFloatingBanner === "function"
  ) {
    (window as any).closeFloatingBanner();
  }
};

const handleCopyMail = () => {
  if (typeof window !== "undefined" && typeof (window as any).myFunctionMail === "function") {
    (window as any).myFunctionMail();
  }
};

const handleOpenCity = (event: any, cityName: string) => {
  event?.preventDefault?.();
  if (typeof window !== "undefined" && typeof (window as any).openCity === "function") {
    (window as any).openCity(event?.nativeEvent ?? event, cityName);
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pro Agency",
  url: "https://proagency.com/",
  logo: "https://proagency.com/assets/images/logo_agency.png",
  sameAs: ["https://t.me/ntvanee"],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://proagency.com/",
  name: "Pro Agency",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://proagency.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tôi có thể thuê tài khoản Facebook Ads ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bạn có thể thuê tài khoản Facebook Ads tại Pro Agency với nhiều ưu đãi và hỗ trợ chuyên nghiệp.",
      },
    },
    {
      "@type": "Question",
      name: "Pro Agency có hỗ trợ VPS miễn phí không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có, Pro Agency cung cấp VPS/proxy miễn phí cho khách hàng mới.",
      },
    },
  ],
};

export default function Home() {
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    fetch("https://lottie.host/f955fec6-5774-4fdd-a0db-a8f8d03927c5/A6jIxUeaG2.json")
      .then((res) => res.json())
      .then((json) => {
        if (isMounted) setLottieData(json);
      })
      .catch(() => {
        // ignore fetch errors; animation is non-critical
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17681969657"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17681969657');
        `}
      </Script>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]), (k.async = 1), (k.src = r), a.parentNode.insertBefore(k, a);
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
          ym(97072113, 'init', { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/97072113"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Script id="twitter-base" strategy="afterInteractive">
        {`
          !(function (e, t, n, s, u, a) {
            e.twq || ((s = e.twq = function () { s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments); }), (s.version = '1.1'), (s.queue = []), (u = t.createElement(n)), (u.async = !0), (u.src = 'https://static.ads-twitter.com/uwt.js'), (a = t.getElementsByTagName(n)[0]), a.parentNode.insertBefore(u, a));
          })(window, document, 'script');
          twq('config', 'qlj5x');
          function trackTwitterEvent() { twq('event', 'tw-qlj5x-qlj5x', {}); }
          window.trackTwitterEvent = trackTwitterEvent;
        `}
      </Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/language.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper.js" strategy="afterInteractive" />
      <Script src="/assets/js/map-animation.js" strategy="afterInteractive" />
      <Script src="/assets/js/testimonials-carousel.js" strategy="afterInteractive" />
      <Script src="/assets/js/script.js" strategy="afterInteractive" />
      <Script src="/assets/js/popup-banner.js" strategy="afterInteractive" />
      <Script id="ld-org" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLdOrganization)}
      </Script>
      <Script id="ld-website" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLdWebsite)}
      </Script>
      <Script id="ld-faq" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      <div id="top" suppressHydrationWarning>
        <header className="header" data-header="">
              <div className="container">
                <div className="language">
                  <button className="translate" id="en-gb">
                    <img className="flag" src="/assets/images/flag-usa.jpg" alt="" />
                  </button>
                  <button className="translate" id="zh-tw">
                    <img className="flag" src="/assets/images/flag-china.jpg" alt="" />
                  </button>
                  <button className="translate" id="ru-gb">
                    <img
                      className="flag russia"
                      src="/assets/images/flag-russia.jpg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="container">
                <div className="overlay" data-overlay=""></div>
                <a href="#">
                  <img
                    src="/assets/images/logo_agency.png"
                    alt="pro agency"
                    className="logo"
                  />
                </a>
                <nav className="navbar" data-navbar="">
                  <div className="navbar-top">
                    <a href="#" className="logo">
                      <img
                        src="/assets/images/logo_agency.png"
                        alt="pro agency"
                        className="logo"
                      />
                    </a>
                    <button
                      className="nav-close-btn"
                      aria-label="Close Menu"
                      data-nav-close-btn=""
                    >
                      <X />
                    </button>
                  </div>
        
                  <ul className="navbar-list">
                    <li className="navbar-item">
                      <a
                        href="#home"
                        className="lang navbar-link"
                        data-key="HOME"
                        data-navbar-link=""
                      ></a>
                    </li>
        
                    <li className="navbar-item">
                      <a
                        href="team.html"
                        className="lang navbar-link"
                        data-key="TEAM-NAV"
                        data-navbar-link=""
                      ></a>
                    </li>
        
                    <li className="navbar-item">
                      <a
                        href="news.html"
                        className="lang navbar-link"
                        data-key="NEWS-NAV"
                        data-navbar-link=""
                      ></a>
                    </li>
        
                    <li className="navbar-item">
                      <a
                        href="#about"
                        className="lang navbar-link"
                        data-key="ACCOUNT"
                        data-navbar-link=""
                      ></a>
                    </li>
        
                    <li className="navbar-item">
                      <a
                        href="#process"
                        className="lang navbar-link"
                        data-key="PROCESS"
                        data-navbar-link=""
                      ></a>
                    </li>
        
                    <li className="navbar-item">
                      <a
                        href="#questions"
                        className="lang navbar-link"
                        data-key="QUESTION"
                        data-navbar-link=""
                      ></a>
                    </li>
                  </ul>
                </nav>
        
                <a href="#contact-us" className="btn">
                  <MessageSquare />
                  <span className="lang" data-key="CONTACT"></span>
                </a>
        
                <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn="">
                  <Menu />
                </button>
              </div>
            </header>
        
            <main>
              <article>
                <section className="hero" id="home">
                  <div className="container">
                    <div className="hero-content">
                      <h2 className="h3 hero-title lang" data-key="TITLE1A"></h2>
                      
                      <h2 className="h2 hero-sub-title lang" data-key="TITLE1C"></h2>
        
                      <p className="hero-text lang" data-key="DESC1"></p>
        
                      <a
                        className="btn lang"
                        data-key="START"
                        href="https://t.me/ntvanee"
                        target="_blank"
                        onClick={handleTrackTwitterEvent}
                      ></a>
                      
                      <div className="rating-section">
                        <div className="rating-info">
                          <div className="rating-stars">
                            <span className="lang" data-key="RATING_LABEL"></span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ margin: '0 2px', verticalAlign: 'middle' }}
                            >
                              <path
                                d="M10 2.5l2.472 5.008 5.528.803-4 3.899.944 5.51L10 14.125l-4.944 2.595.944-5.51-4-3.899 5.528-.803L10 2.5z"
                                fill="#FFD700"
                              />
                            </svg>
                            <span className="rating-value">4.8</span>
                          </div>
                        </div>
                        <div className="rating-desc lang" data-key="RATING_DESC"></div>
                        <div className="avatars">
                          <img
                            src="/assets/images/rating.png"
                            alt="client"
                            className="avatar"
                          />
                        </div>
                        <img
                          src="/assets/images/trustpilot.png"
                          alt="Trustpilot"
                          className="trustpilot-logo"
                        />
                      </div>
                    </div>
        
                    <figure className="hero-banner">
                      <img
                        src="/assets/images/img-1.png"
                        width="694"
                        height="529"
                        loading="lazy"
                        alt="hero-banner"
                        className="w-100 banner-animation"
                      />
                    </figure>
                  </div>
                </section>
        
                
        
                <section className="section about" id="about">
                  <div className="about-video">
                    <div className="about-video-embed">
                      <iframe
                        src="https://www.youtube.com/embed/sV6lbZXKeAA"
                        title="ProAgency Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="about-video-iframe"
                      ></iframe>
                    </div>
                  </div>
                  <div className="container">
                    <figure className="about-banner" data-aos="fade-right">
                      <img
                        src="/assets/images/haireus.png"
                        width="700"
                        height="532"
                        loading="lazy"
                        alt="about banner"
                        className="w-100 banner-animation"
                      />
                    </figure>
        
                    <div className="about-content">
                      <h2 className="h2 section-title lang" data-key="TITLE2"></h2>
        
                      <p className="about-text lang" data-key="DESC2"></p>
        
                      <ul className="stats-list">
                        <li className="stats-card">
                          <div className="stats-icon">
                            <img
                              src="/assets/images/happy.svg"
                              loading="lazy"
                              alt="about banner"
                              className="stats-img"
                            />
                          </div>
                          <div className="stats-text-wrapper">
                            <h3 className="h3 stats-title lang" data-key="STATUS1"></h3>
                            <p className="stats-text lang" data-key="DESC-STATUS1"></p>
                          </div>
                        </li>
        
                        <li className="stats-card">
                          <div className="stats-icon">
                            <img
                              src="/assets/images/cashback.svg"
                              loading="lazy"
                              alt="about banner"
                              className="stats-img"
                            />
                          </div>
                          <div className="stats-text-wrapper">
                            <h3 className="h3 stats-title lang" data-key="STATUS2"></h3>
                            <p className="stats-text lang" data-key="DESC-STATUS2"></p>
                          </div>
                        </li>
        
                        <li className="stats-card">
                          <div className="stats-icon">
                            <img
                              src="/assets/images/statistics.svg"
                              loading="lazy"
                              alt="about banner"
                              className="stats-img"
                            />
                          </div>
                          <div className="stats-text-wrapper">
                            <h3 className="h3 stats-title lang" data-key="STATUS3"></h3>
                            <p className="stats-text lang" data-key="DESC-STATUS3"></p>
                          </div>
                        </li>
        
                        <li className="stats-card">
                          <div className="stats-icon">
                            <img
                              src="/assets/images/payments.svg"
                              loading="lazy"
                              alt="about banner"
                              className="stats-img"
                            />
                          </div>
                          <div className="stats-text-wrapper">
                            <h3 className="h3 stats-title lang" data-key="STATUS4"></h3>
                            <p className="stats-text lang" data-key="DESC-STATUS4"></p>
                          </div>
                        </li>
        
                        <li className="stats-card">
                          <div className="stats-icon">
                            <img
                              src="/assets/images/security.svg"
                              loading="lazy"
                              alt="about banner"
                              className="stats-img"
                            />
                          </div>
                          <div className="stats-text-wrapper">
                            <h3 className="h3 stats-title lang" data-key="STATUS5"></h3>
                            <p className="stats-text lang" data-key="DESC-STATUS5"></p>
                          </div>
                        </li>
                        <li className="stats-card">
                          <div className="stats-icon">
                            <img
                              src="/assets/images/support.svg"
                              loading="lazy"
                              alt="about banner"
                              className="stats-img"
                            />
                          </div>
                          <div className="stats-text-wrapper">
                            <h3 className="h3 stats-title lang" data-key="STATUS6"></h3>
                            <p className="stats-text lang" data-key="DESC-STATUS6"></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
        
                
        
                <section className="section partners">
                  <div className="container">
                    <h2 className="h2 section-title">Our Partners</h2>
        
                    <div className="swiper mySwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="/assets/images/brand-00.png" alt="adpowers" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/payoneer.png" alt="payoneer" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/pingpong.png" alt="pingpong" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/brand-01.png" alt="facebook" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/brand-02.png" alt="shopify" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/brand-03.png" alt="salesforce" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/images/brand-04.png" alt="ebay" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </section>
        
                
        
                <section className="section service" id="services">
                  <div className="container">
                    <h2 className="h2 section-title underline lang" data-key="TITLE3"></h2>
        
                    <div className="tab">
                      <button
                        className="tablinks lang"
                        id="defaultOpen"
                        onClick={(event) => handleOpenCity(event, 'personal')}
                        data-key="TAB1"
                      ></button>
                      <button
                        className="tablinks lang"
                        data-key="TAB2"
                        onClick={(event) => handleOpenCity(event, 'business')}
                      ></button>
                      <button
                        className="tablinks lang"
                        data-key="TAB3"
                        onClick={(event) => handleOpenCity(event, 'fanpage')}
                      ></button>
                      <button
                        className="tablinks lang"
                        data-key="TAB4"
                        onClick={(event) => handleOpenCity(event, 'profile')}
                      ></button>
                    </div>
        
                    <div id="personal" className="tabcontent">
                      <ul className="price-list">
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-NEW"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-50"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC1-LIMIT-50-250"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-50"></span>
                            </li>
        
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-NEW"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-250"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC1-LIMIT-50-250"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-250"></span>
                            </li>
        
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-NEW"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-1500"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC1-LIMIT-50-250"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-1500"></span>
                            </li>
                          </ul>
                        </li>
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-NEW"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-NO"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC1-LIMIT-50-250"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-NO"></span>
                            </li>
                          </ul>
                        </li>
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-OLD"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-50"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-TITLE-OLD"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-50"></span>
                            </li>
        
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-OLD"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-250"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-TITLE-OLD"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
        
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-OLD"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-1500"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-TITLE-OLD"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-1500"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span
                              className="price-card-title lang"
                              data-key="TAB1-TITLE-OLD"
                            ></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-NO"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-TITLE-OLD"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC1-NOLIMIT-OLD"></span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
        
                    <div id="business" className="tabcontent">
                      <ul className="price-list">
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-NORMAL"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-50"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-NORMAL-1"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-50"></span>
                            </li>
        
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-NORMAL"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-250"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
        
                              <span className="lang" data-key="DESC-BM-NORMAL-1"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-250"></span>
                            </li>
        
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-NORMAL"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-1500"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
        
                              <span className="lang" data-key="DESC-BM-NORMAL-1"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-1500"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-NORMAL"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-NO"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
        
                              <span className="lang" data-key="DESC-BM-NORMAL-1"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-NORMAL-NOLIMIT"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-VERIFY"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-50"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-OLD-1"></span>
                            </li>
                            <li className="price-description-items lang">
                              <CheckCircle className="price-circle-icon" />
                              Can spend up to $50 per day.
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-VERIFY"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-250"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-OLD-1"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-250"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC3-LIMIT-50-250"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-VERIFY"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-1500"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-OLD-1"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC2-LIMIT-1500"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="BM-VERIFY"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="LIMIT-NO"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-OLD-1"></span>
                            </li>
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-BM-OLD-NOLIMIT"></span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
        
                    <div id="fanpage" className="tabcontent">
                      <ul className="price-list">
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="TAB3"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="PAGE-NEW"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-NEW"></span>
                            </li>
                          </ul>
                        </li>
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="TAB3"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="PAGE-OLD"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-OLD"></span>
                            </li>
                          </ul>
                        </li>
        
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="TAB3"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="PAGE-VERIFY"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-VERIFY"></span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div id="profile" className="tabcontent">
                      <ul className="price-list">
                        <li className="price-card">
                          <div className="price-card-header">
                            <Facebook className="price-card-logo" />
                            <span className="price-card-title lang" data-key="TAB3"></span>
                          </div>
                          <hr />
                          <div className="price-items lang" data-key="TAB3"></div>
        
                          <ul className="price-description">
                            <li className="price-description-items">
                              <CheckCircle className="price-circle-icon" />
                              <span className="lang" data-key="DESC-PROFILE"></span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
        
                
        
                <section className="section process" id="process">
                  <div className="container">
                    <h2
                      className="h2 section-title underline lang"
                      data-key="TITLE-PROCESS"
                    ></h2>
                    <p className="lang" data-key="DESC-PROCESS"></p>
        
                    <div className="process-container">
                      <div className="process-timeline">
                        <div className="process-timeline-item">
                          <div
                            className="process-timeline-title lang"
                            data-key="PROCESS-STEP-1-TITLE"
                          ></div>
                          <p
                            className="process-timeline-des lang"
                            data-key="PROCESS-STEP-1-DESC"
                          ></p>
                          <ul className="process-details">
                            <li className="lang" data-key="PROCESS-STEP-1-DETAIL-1"></li>
                            <li className="lang" data-key="PROCESS-STEP-1-DETAIL-2"></li>
                          </ul>
                        </div>
        
                        <div className="process-timeline-item">
                          <div
                            className="process-timeline-title lang"
                            data-key="PROCESS-STEP-2-TITLE"
                          ></div>
                          <p
                            className="process-timeline-des lang"
                            data-key="PROCESS-STEP-2-DESC"
                          ></p>
                          <ul className="process-details">
                            <li className="lang" data-key="PROCESS-STEP-2-DETAIL-1"></li>
                            <li className="lang" data-key="PROCESS-STEP-2-DETAIL-2"></li>
                          </ul>
                        </div>
        
                        <div className="process-timeline-item">
                          <div
                            className="process-timeline-title lang"
                            data-key="PROCESS-STEP-3-TITLE"
                          ></div>
                          <p
                            className="process-timeline-des lang"
                            data-key="PROCESS-STEP-3-DESC"
                          ></p>
                          <ul className="process-details">
                            <li className="lang" data-key="PROCESS-STEP-3-DETAIL-1"></li>
                            <li className="lang" data-key="PROCESS-STEP-3-DETAIL-2"></li>
                          </ul>
                        </div>
        
                        
        
                        
                      </div>
        
                      <div className="process-result">
                        <div className="result-highlight">
                          <p className="lang" data-key="PROCESS-RESULT-1"></p>
                          <p className="lang" data-key="PROCESS-RESULT-2"></p>
                        </div>
        
                        <figure className="process-image">
                          <img
                            src="/assets/images/timeline.png"
                            width="369"
                            height="318"
                            loading="lazy"
                            alt="time-line"
                            className="w-100 banner-animation"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </section>
        
                <section className="section events-gallery" id="events">
                  <div className="container">
                    <div className="events-gallery-header">
                      <h2 className="h2 section-title lang" data-key="EVENTS-TITLE"></h2>
                      <p className="section-text lang" data-key="EVENTS-SUBTITLE"></p>
                    </div>
        
                    <div className="events-card-carousel">
                      <button
                        className="events-card-nav events-card-prev"
                        type="button"
                        aria-label="Previous event"
                      >
                        <ChevronLeft />
                      </button>
                      <div className="events-card-window">
                        <div className="events-card-track" data-event-card-track=""></div>
                      </div>
                      <button
                        className="events-card-nav events-card-next"
                        type="button"
                        aria-label="Next event"
                      >
                        <ChevronRight />
                      </button>
                    </div>
                    <div className="events-card-dots" data-event-card-dots=""></div>
        
                    <div className="events-media-gallery">
                      <div className="events-media-header">
                        <h3 className="h3 lang" data-key="EVENTS-MEDIA-TITLE"></h3>
                        <p className="lang" data-key="EVENTS-MEDIA-SUBTITLE"></p>
                      </div>
                      <div className="events-media-viewer">
                        <button
                          className="events-media-nav events-media-prev"
                          type="button"
                          aria-label="Previous highlight"
                        >
                          <ChevronLeft />
                        </button>
                        <div className="events-media-frame" data-event-media="">
                          <img
                            src="/assets/images/Affiliate World Asia.jpg"
                            alt="Affiliate World Asia 2024 exhibition hall"
                            loading="lazy"
                          />
                        </div>
                        <button
                          className="events-media-nav events-media-next"
                          type="button"
                          aria-label="Next highlight"
                        >
                          <ChevronRight />
                        </button>
                      </div>
                      <div
                        className="events-media-thumbs"
                        role="list"
                        data-event-media-thumbs=""
                      ></div>
                    </div>
                  </div>
                </section>
        
                
        
                <section className="section testimonials" id="testimonials">
                  <div className="container">
                    <div className="testimonials-left">
                      <h2 className="h2 section-title lang" data-key="TESTIMONIALS-TITLE"></h2>
                      <div className="testimonials-navigation">
                        <button
                          className="testimonial-nav-btn prev-btn"
                          aria-label="Previous testimonials"
                        >
                          <ChevronLeft />
                        </button>
                        <button
                          className="testimonial-nav-btn next-btn"
                          aria-label="Next testimonials"
                        >
                          <ChevronRight />
                        </button>
                      </div>
                    </div>
        
                    <div className="testimonials-right">
                      <div className="testimonials-wrapper">
                        <div className="testimonials-grid">
                          <div className="testimonial-card">
                            <div className="quote-icon">
                              <MessageCircle />
                            </div>
                            <div className="testimonial-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star empty">★</span>
                            </div>
                            <p
                              className="testimonial-text lang"
                              data-key="TESTIMONIAL-1-TEXT"
                            ></p>
                            <div className="testimonial-author">
                              <div className="author-avatar">👩🏻‍💼</div>
                              <div className="author-info">
                                <h4 className="author-name">
                                  <span className="lang" data-key="TESTIMONIAL-1-NAME"></span>
                                  <span
                                    className="author-flag lang"
                                    data-key="TESTIMONIAL-1-FLAG"
                                  ></span>
                                </h4>
                                <p
                                  className="author-title lang"
                                  data-key="TESTIMONIAL-1-TITLE"
                                ></p>
                              </div>
                            </div>
                          </div>
        
                          <div className="testimonial-card">
                            <div className="quote-icon">
                              <MessageCircle />
                            </div>
                            <div className="testimonial-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                            </div>
                            <p
                              className="testimonial-text lang"
                              data-key="TESTIMONIAL-2-TEXT"
                            ></p>
                            <div className="testimonial-author">
                              <div className="author-avatar">👨🏻‍💼</div>
                              <div className="author-info">
                                <h4 className="author-name">
                                  <span className="lang" data-key="TESTIMONIAL-2-NAME"></span>
                                  <span
                                    className="author-flag lang"
                                    data-key="TESTIMONIAL-2-FLAG"
                                  ></span>
                                </h4>
                                <p
                                  className="author-title lang"
                                  data-key="TESTIMONIAL-2-TITLE"
                                ></p>
                              </div>
                            </div>
                          </div>
        
                          <div className="testimonial-card">
                            <div className="quote-icon">
                              <MessageCircle />
                            </div>
                            <div className="testimonial-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                            </div>
                            <p
                              className="testimonial-text lang"
                              data-key="TESTIMONIAL-3-TEXT"
                            ></p>
                            <div className="testimonial-author">
                              <div className="author-avatar">👨🏻</div>
                              <div className="author-info">
                                <h4 className="author-name">
                                  <span className="lang" data-key="TESTIMONIAL-3-NAME"></span>
                                  <span
                                    className="author-flag lang"
                                    data-key="TESTIMONIAL-3-FLAG"
                                  ></span>
                                </h4>
                                <p
                                  className="author-title lang"
                                  data-key="TESTIMONIAL-3-TITLE"
                                ></p>
                              </div>
                            </div>
                          </div>
        
                          <div className="testimonial-card">
                            <div className="quote-icon">
                              <MessageCircle />
                            </div>
                            <div className="testimonial-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                            </div>
                            <p
                              className="testimonial-text lang"
                              data-key="TESTIMONIAL-4-TEXT"
                            ></p>
                            <div className="testimonial-author">
                              <div className="author-avatar">👩🏼</div>
                              <div className="author-info">
                                <h4 className="author-name">
                                  <span className="lang" data-key="TESTIMONIAL-4-NAME"></span>
                                  <span
                                    className="author-flag lang"
                                    data-key="TESTIMONIAL-4-FLAG"
                                  ></span>
                                </h4>
                                <p
                                  className="author-title lang"
                                  data-key="TESTIMONIAL-4-TITLE"
                                ></p>
                              </div>
                            </div>
                          </div>
        
                          <div className="testimonial-card">
                            <div className="quote-icon">
                              <MessageCircle />
                            </div>
                            <div className="testimonial-rating">
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                              <span className="star">★</span>
                            </div>
                            <p
                              className="testimonial-text lang"
                              data-key="TESTIMONIAL-5-TEXT"
                            ></p>
                            <div className="testimonial-author">
                              <div className="author-avatar">👨🏻‍💼</div>
                              <div className="author-info">
                                <h4 className="author-name">
                                  <span className="lang" data-key="TESTIMONIAL-5-NAME"></span>
                                  <span
                                    className="author-flag lang"
                                    data-key="TESTIMONIAL-5-FLAG"
                                  ></span>
                                </h4>
                                <p
                                  className="author-title lang"
                                  data-key="TESTIMONIAL-5-TITLE"
                                ></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        
                
                <section className="section global-presence" id="global">
                  <div className="container">
                    <h2 className="h2 section-title underline lang" data-key="GLOBAL-TITLE"></h2>
                    <p className="section-text lang" data-key="GLOBAL-DESC"></p>
        
                    <div className="map-container">
                      <img src="/assets/svg/globe.svg" alt="World Map" />
                      <div className="map-pin" style={ { top: '25%', left: '20%' } }>
                        <div className="country-name">Canada</div>
                      </div>
                      <div className="map-pin" style={ { top: '65%', left: '30%' } }>
                        <div className="country-name">Brazil</div>
                      </div>
                      <div className="map-pin" style={ { top: '20%', left: '45%' } }>
                        <div className="country-name">United Kingdom</div>
                      </div>
                      <div className="map-pin" style={ { top: '25%', left: '48%' } }>
                        <div className="country-name">France</div>
                      </div>
                      <div className="map-pin" style={ { top: '30%', left: '50%' } }>
                        <div className="country-name">Italy</div>
                      </div>
                      <div className="map-pin" style={ { top: '35%', left: '45%' } }>
                        <div className="country-name">Morocco</div>
                      </div>
                      <div className="map-pin" style={ { top: '40%', left: '48%' } }>
                        <div className="country-name">Algeria</div>
                      </div>
                      <div className="map-pin" style={ { top: '48%', left: '49%' } }>
                        <div className="country-name">Nigeria</div>
                      </div>
                      <div className="map-pin" style={ { top: '22%', left: '55%' } }>
                        <div className="country-name">Ukraine</div>
                      </div>
                      <div className="map-pin" style={ { top: '18%', left: '60%' } }>
                        <div className="country-name">Russia</div>
                      </div>
                      <div className="map-pin" style={ { top: '32%', left: '58%' } }>
                        <div className="country-name">Turkey</div>
                      </div>
                      <div className="map-pin" style={ { top: '30%', left: '72%' } }>
                        <div className="country-name">China</div>
                      </div>
                      <div className="map-pin" style={ { top: '35%', left: '65%' } }>
                        <div className="country-name">Pakistan</div>
                      </div>
                      <div className="map-pin" style={ { top: '40%', left: '70%' } }>
                        <div className="country-name">Bangladesh</div>
                      </div>
                      <div className="map-pin" style={ { top: '45%', left: '68%' } }>
                        <div className="country-name">India</div>
                      </div>
                      <div className="map-pin" style={ { top: '48%', left: '75%' } }>
                        <div className="country-name">Vietnam</div>
                      </div>
                      <div className="map-pin" style={ { top: '50%', left: '80%' } }>
                        <div className="country-name">Philippines</div>
                      </div>
                      <div className="map-pin" style={ { top: '55%', left: '74%' } }>
                        <div className="country-name">Singapore</div>
                      </div>
                      <div className="map-pin" style={ { top: '60%', left: '78%' } }>
                        <div className="country-name">Indonesia</div>
                      </div>
                      <div className="map-pin" style={ { top: '70%', left: '85%' } }>
                        <div className="country-name">Australia</div>
                      </div>
                    </div>
                  </div>
                </section>
        
                
        
                <section className="section features" id="features">
                  <div className="container">
                    <h2
                      className="h2 section-title underline lang"
                      data-key="FEATURE-TITLE"
                    ></h2>
        
                    <ul className="features-list">
                      <li>
                        <div className="features-card">
                          <div className="icon">
                            <Lightbulb />
                          </div>
        
                          <div className="content">
                            <h3 className="h3 title lang" data-key="F-1-TITLE">
                              Invoice Trusted Business Accounts
                            </h3>
        
                            <p className="text lang" data-key="F-1-DESC">
                              Accounts are provided directly by authorized agency, with
                              high trust factor, speediest ads approval time and easiest
                              review progress for hard ads like DROP, P.O.D,
                              cosmetics...
                            </p>
                          </div>
                        </div>
                      </li>
        
                      <li>
                        <div className="features-card">
                          <div className="icon">
                            <Palette />
                          </div>
        
                          <div className="content">
                            <h3 className="h3 title lang" data-key="F-2-TITLE">
                              Fast, Low and Transparent Fee
                            </h3>
        
                            <p className="text lang" data-key="F-2-DESC">
                              247 same day top up with low and transparent fee. Support
                              many kinds of payment method.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
        
                    <figure className="features-banner">
                      {lottieData ? (
                        <Lottie
                          animationData={lottieData}
                          loop
                          autoplay
                          style={{ width: 350, height: 350 }}
                        />
                      ) : null}
                    </figure>
        
                    <ul className="features-list">
                      <li>
                        <div className="features-card">
                          <div className="icon">
                            <Code />
                          </div>
        
                          <div className="content">
                            <h3 className="h3 title lang" data-key="F-3-TITLE">
                              Total Marketing Control
                            </h3>
        
                            <p className="text lang" data-key="F-3-DESC">
                              Business accounts will be shared to you, you can check
                              anytime and will be in total control of ads, cost, and
                              customer data!
                            </p>
                          </div>
                        </div>
                      </li>
        
                      <li>
                        <div className="features-card">
                          <div className="icon">
                            <Rocket />
                          </div>
        
                          <div className="content">
                            <h3 className="h3 title lang" data-key="F-4-TITLE">
                              Support & Consultancy
                            </h3>
                            <p className="text lang" data-key="F-4-DESC">
                              Our services include full technical supports from 10 years
                              experienced expert on FB ads for helping you set up a
                              running system and create ads following FB policies.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
        
                
        
                <section className="section news-preview" id="news">
                  <div className="container">
                    <div className="news-preview-header">
                      <div>
                        <p className="news-eyebrow lang" data-key="NEWS-EYEBROW"></p>
                        <h2
                          className="h2 section-title news-title lang"
                          data-key="NEWS-SECTION-TITLE"
                        ></h2>
                      </div>
        
                      <a href="news.html" className="btn-outline news-view-all">
                        <span className="lang" data-key="NEWS-READ-ALL"></span>
                        <ArrowRight />
                      </a>
                    </div>
        
                    <div className="news-card-grid">
                      <article className="news-card">
                        <a
                          href="news.html#news-affiliate-world-budapest"
                          className="news-card-link"
                        >
                          <div
                            className="news-card-media news-card-media-1"
                            aria-hidden="true"
                          >
                            <span
                              className="news-card-badge lang"
                              data-key="NEWS-CATEGORY-STRATEGY"
                            ></span>
                          </div>
                          <div className="news-card-content">
                            <h3
                              className="news-card-title lang"
                              data-key="NEWS-CARD-1-TITLE"
                            ></h3>
                            <p
                              className="news-card-excerpt lang"
                              data-key="NEWS-CARD-1-EXCERPT"
                            ></p>
                            <p className="news-card-date lang" data-key="NEWS-CARD-1-DATE"></p>
                          </div>
                        </a>
                      </article>
        
                      <article className="news-card">
                        <a href="news.html#news-account-locks" className="news-card-link">
                          <div
                            className="news-card-media news-card-media-2"
                            aria-hidden="true"
                          >
                            <span
                              className="news-card-badge lang"
                              data-key="NEWS-CATEGORY-STRATEGY"
                            ></span>
                          </div>
                          <div className="news-card-content">
                            <h3
                              className="news-card-title lang"
                              data-key="NEWS-CARD-2-TITLE"
                            ></h3>
                            <p
                              className="news-card-excerpt lang"
                              data-key="NEWS-CARD-2-EXCERPT"
                            ></p>
                            <p className="news-card-date lang" data-key="NEWS-CARD-2-DATE"></p>
                          </div>
                        </a>
                      </article>
        
                      <article className="news-card">
                        <a
                          href="news.html#news-fanpage-restrictions"
                          className="news-card-link"
                        >
                          <div
                            className="news-card-media news-card-media-3"
                            aria-hidden="true"
                          >
                            <span
                              className="news-card-badge lang"
                              data-key="NEWS-CATEGORY-COMPLIANCE"
                            ></span>
                          </div>
                          <div className="news-card-content">
                            <h3
                              className="news-card-title lang"
                              data-key="NEWS-CARD-3-TITLE"
                            ></h3>
                            <p
                              className="news-card-excerpt lang"
                              data-key="NEWS-CARD-3-EXCERPT"
                            ></p>
                            <p className="news-card-date lang" data-key="NEWS-CARD-3-DATE"></p>
                          </div>
                        </a>
                      </article>
                    </div>
                  </div>
                </section>
        
                
        
                <section className="section questions" id="questions">
                  <div className="container">
                    <div></div>
                    <div>
                      <h2 className="lang" data-key="QUESTION-TITLE">
                        Frequently Asked Questions
                      </h2>
                      <div className="accordion">
                        <div className="accordion-item">
                          <button id="accordion-button-1" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-1">
                              Can your account run Black Hat and Gray Hat campaigns?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-1">
                              Yes, our account can be used for Black Hat and Grey Hat
                              campaigns.
                            </p>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button id="accordion-button-2" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-2">
                              What types of accounts do you provide?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-2">
                              We provide all account types: Personal accounts with
                              spending history, BM accounts and agency accounts.
                            </p>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button id="accordion-button-3" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-3">
                              What happens when the account is locked? Can the money in
                              that account be transferred to the new account?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-3">
                              When the account is locked, our staff will provide you
                              with a new account completely free of charge.
                            </p>
        
                            <p className="lang" data-key="A-3A">
                              The balance in the old account will be transferred to the
                              new account. This applies to both profile accounts and
                              page accounts.
                            </p>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button id="accordion-button-4" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-4">
                              What is your account limit??
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-4">
                              Our account has spending limits of $1500, 250 and no limit
                              daily.
                            </p>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button id="accordion-button-5" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-5">
                              How do I use your account?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-5">
                              We set up everything and marketing access in VPS, RDP or
                              AdsPower.
                            </p>
                            <p className="lang" data-key="A-5A">
                              You will be granted access to these software to control
                              and use our account.
                            </p>
                          </div>
                        </div>
        
                        <div className="accordion-item">
                          <button id="accordion-button-5" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-6">
                              Which payment method do you use?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-6">
                              We use USDT ,BTC, Payoneer for payment.
                            </p>
                          </div>
                        </div>
        
                        <div className="accordion-item">
                          <button id="accordion-button-5" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-7">
                              How to top up your account?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-7">
                              You send us money after checking our account. Then our
                              staff will activate the account for you to use.
                            </p>
        
                            <p className="lang" data-key="A-7A">
                              When your deposit has almost been spent, our staff will
                              notify you to deposit more so that your campaign will not
                              be interrupted.
                            </p>
                          </div>
                        </div>
        
                        <div className="accordion-item">
                          <button id="accordion-button-5" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-8">
                              What is your refund process?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-8">
                              When you want to stop cooperation. Your support staff will
                              stop the campaign and aggregate your spending, calculate
                              the balance and confirm the balance with you.
                            </p>
        
                            <p className="lang" data-key="A-8A">
                              If there are no problems, the request will be forwarded to
                              the accounting department for completion. This process
                              will take 1-2 days.
                            </p>
                          </div>
                        </div>
        
                        <div className="accordion-item">
                          <button id="accordion-button-5" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-9">
                              What is the service fee?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-9">
                              We charge a service fee. This fee is 5-8% for standard
                              campaigns and 6-10% for advanced optimization campaigns.
                            </p>
                            <p className="lang" data-key="A-9A">
                              This fee may change if you spend well and stably.
                            </p>
                          </div>
                        </div>
        
                        <div className="accordion-item">
                          <button id="accordion-button-5" aria-expanded="false">
                            <span className="accordion-title lang" data-key="Q-10">
                              What is the minimum spend to use your service?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                          </button>
                          <div className="accordion-content">
                            <p className="lang" data-key="A-10">
                              $100 is the minimum spent on our account.
                            </p>
                            <p className="lang" data-key="A-10A">
                              You can test campaigns with a smaller budget, but you need
                              to make sure to scale them after testing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        
                
        
                <section className="section contact-us" id="contact-us">
                  <div className="container">
                    <h2 className="h2 section-title underline">
                      <span className="lang" data-key="CONTACT-TITLE"></span>
                    </h2>
        
                    <div className="contact-wrapper">
                      <div className="contact-title">
                        <img
                          src="/assets/images/contact.svg"
                          alt="phone contact"
                          className="contact-img"
                        />
                        <div className="contact-text lang" data-key="CONTACT-DESC">
                          Contact us immediately to receive special offers and
                          thoughtful support
                        </div>
                      </div>
        
                      <ul className="contact-social">
                        <li>
                          <a
                            href="https://t.me/ntvanee"
                            className="contact-social-tele"
                            target="_blank"
                            onClick={handleTrackTwitterEvent}
                          >
                            <div className="icon-tele-wrapper">
                              <Send className="icon-tele" />
                              <span> Telegram </span>
                            </div>
                            <div>PA - Vane</div>
                            <div>
                              <MessageSquare className="icon-chat" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://t.me/jack777z"
                            className="contact-social-tele"
                            target="_blank"
                            onClick={handleTrackTwitterEvent}
                          >
                            <div className="icon-tele-wrapper">
                              <Send className="icon-tele" />
                              <span> Telegram </span>
                            </div>
                            <div>PA - Jack</div>
                            <div>
                              <MessageSquare className="icon-chat" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://t.me/facebook_account_rent"
                            className="contact-social-tele"
                            target="_blank"
                            onClick={handleTrackTwitterEvent}
                          >
                            <div className="icon-tele-wrapper">
                              <Send className="icon-tele" />
                              <span> Telegram </span>
                            </div>
                            <div>My Channel</div>
                            <div>
                              <MessageSquare className="icon-chat" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://api.whatsapp.com/send/?phone=84971523298&text&type=phone_number&app_absent=0"
                            target="_blank"
                            className="contact-social-whatsapp"
                            onClick={handleTrackTwitterEvent}
                          >
                            <RiWhatsappFill size={20} />
                            <span>Whatsapp</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://join.skype.com/invite/tMRwABMbKEBB"
                            target="_blank"
                            className="contact-social-skype"
                          >
                            <RiSkypeFill size={20} />
                            <span>Skype</span>
                          </a>
                        </li>
                        <li>
                          <button
                            onClick={handleCopyMail}
                            className="contact-social-mail"
                          >
                            <Mail />
                            <span className="mail-hide">Email</span>
                            <input
                              className="mail-show"
                              id="mail-main"
                              value="proagency.work@gmail.com"
                              readOnly
                            />
                            <span className="mail-show">Click to copy</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </article>
            </main>
        
            <footer className="footer">
              <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
              </div>
        
              <ul className="menu">
                <li className="menu__item">
                  <a className="menu__link lang" href="#" data-key="HOME">Home</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link lang" href="team.html" data-key="TEAM-NAV">Team</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link lang" href="news.html" data-key="NEWS-NAV">News</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link lang" href="#about" data-key="ACCOUNT">Account</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link lang" href="#process" data-key="PROCESS">Process</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link lang" href="#questions" data-key="QUESTION"
                    >Question</a
                  >
                </li>
                <li className="menu__item">
                  <a className="menu__link lang" href="https://t.me/ntvanee" data-key="CONTACT"
                    >Contact</a
                  >
                </li>
              </ul>
              <p className="footer-disclaimer lang" data-key="LEGAL_DISCLAIMER">
                Legal Disclaimer: Proagency.work reserves the right to refuse any
                project that involves advertising illegal products or services. Clients
                bear full responsibility and liability for ensuring their campaigns
                comply with all applicable laws in Vietnam and any other relevant
                jurisdictions.
              </p>
              <p>&copy;2018 Pro Agency | All Rights Reserved</p>
            </footer>
        
            
        
            
        
            <script
              src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
              defer
            ></script>
            <script src="/assets/js/language.js" defer></script>
            <script src="/assets/js/swiper.js" defer></script>
            <script src="/assets/js/map-animation.js" defer></script>
            <script src="/assets/js/testimonials-carousel.js" defer></script>
            <script src="/assets/js/script.js" defer></script>
        
            <div className="floating-banner" id="floatingBanner">
              <div className="floating-banner-header">
                <h3 className="floating-banner-title lang" data-key="BANNER-TITLE"></h3>
                <button className="floating-banner-close" onClick={handleCloseFloatingBanner}>
                  &times;
                </button>
              </div>
              <div className="floating-banner-content">
                <p className="floating-banner-subtitle lang" data-key="BANNER-SUBTITLE"></p>
                <ul className="floating-banner-benefits">
                  <li className="lang" data-key="BANNER-BENEFIT-1"></li>
                  <li className="lang" data-key="BANNER-BENEFIT-2"></li>
                  <li className="lang" data-key="BANNER-BENEFIT-3"></li>
                </ul>
                <a
                  href="https://t.me/ntvanee"
                  target="_blank"
                  className="floating-banner-cta lang"
                  data-key="BANNER-CTA"
                  onClick={handleTrackTwitterEvent}
                ></a>
              </div>
            </div>
        
            
            <div className="popup-overlay" id="popupOverlay">
              <div className="popup-modal">
                <div className="popup-header">
                  <button className="popup-close" onClick={handleClosePopup}>&times;</button>
                  <h2 className="popup-title lang" data-key="POPUP-TITLE"></h2>
                  <p className="popup-subtitle lang" data-key="POPUP-SUBTITLE"></p>
                </div>
                <div className="popup-content">
                  <div className="popup-highlight">
                    <p className="popup-highlight-text lang" data-key="POPUP-HIGHLIGHT"></p>
                  </div>
                  <ul className="popup-benefits">
                    <li className="lang" data-key="POPUP-BENEFIT-1"></li>
                    <li className="lang" data-key="POPUP-BENEFIT-2"></li>
                    <li className="lang" data-key="POPUP-BENEFIT-3"></li>
                    <li className="lang" data-key="POPUP-BENEFIT-4"></li>
                    <li className="lang" data-key="POPUP-BENEFIT-5"></li>
                    <li className="lang" data-key="POPUP-BENEFIT-6"></li>
                  </ul>
                  <a
                    href="https://t.me/ntvanee"
                    target="_blank"
                    className="popup-cta lang"
                    data-key="POPUP-CTA"
                    onClick={handleTrackAndClosePopup}
                  ></a>
                </div>
              </div>
            </div>
            
      </div>
    </>
  );
}
