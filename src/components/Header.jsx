import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="wedding-header" role="banner">
      {/* Floral accent positioned in top right corner */}
      <div className="floral-corner-tr fade-element delay-flower" aria-hidden="true">
        <img
          src="/images/flowers-2-transparent.png"
          alt="Botanical floral accent top right"
          className="flower-accent-img"
          loading="eager"
        />
      </div>

      {/* Floral accent positioned in lower left corner */}
      <div className="floral-corner-bl fade-element delay-rose" aria-hidden="true">
        <img
          src="/images/rose-transparent.png"
          alt="Botanical rose accent lower left"
          className="rose-accent-img"
          loading="eager"
        />
      </div>

      {/* Central Content Area */}
      <div className="header-content">
        <p className="eyebrow fade-element delay-eyebrow">SAVE THE DATE</p>

        <div className="names-container">
          <h1 className="name fade-element delay-groom">UJJWAL</h1>
          <span className="ampersand fade-element delay-ampersand" aria-hidden="true">
            &amp;
          </span>
          <h1 className="name fade-element delay-bride">NITIKA</h1>
        </div>

        <p className="wedding-date fade-element delay-date">4TH DECEMBER 2026</p>
      </div>
    </header>
  )
}
