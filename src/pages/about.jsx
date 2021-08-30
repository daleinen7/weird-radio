import React from 'react'

export default function AboutPage() {
  return (
    <section className="about">
      <div className="copy">
        <h2>About Us</h2>
        <p role="doc-subtitle">AVANTE - GARDE, ECCENTRIC, WEIRD</p>

        <p className="intro">
          You are listening to <span className="purp">Weird Radio</span>, your
          source for the hidden gems of the digital wasteland and the
          intellectual jungle.{' '}
        </p>

        <p>
          We’re bringing you the hottest new jams of the new wave, whatever that
          new wave might be. You’ll hear all the best noise, the most
          fascinating stories, the best drops on new events, and all the weird
          news. Stay WEIRD!
        </p>

        <blockquote>
          <h3>
            <span className="green">Weird Radio</span> saved me.
          </h3>
          <p>
            I got sick of paying to get my music heard. When I founded this
            station, I did so because I knew there was a better way. We’ve
            created a nexus to connect bands, their fanbases and new listeners.
            We’re Weird, and we’re proud of it. <p>-Skylar Meany</p>
          </p>
        </blockquote>
      </div>
      <div className="logo">
        <img src="../LargeLogo.png" alt="Weird Radio" />
      </div>
    </section>
  )
}
