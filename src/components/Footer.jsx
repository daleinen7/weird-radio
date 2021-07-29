import React from 'react'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import insta from '../images/insta.svg'

export default function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div className="footer-logo"></div>
        <p>
          Weird Radio is your source for the hidden gems of the digital
          wasteland and the intellectual jungle.
        </p>
        <div className="social-media">
          <h2>Connect</h2>
          <ul>
            <li>
              <a href="https://facebook.com">
                <img src={facebook} alt="Weird Radio on facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src={twitter} alt="Weird Radio on Twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={insta} alt="Weird Radio on Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <h2>Never Miss A Beat</h2>
        <p>Signup to receive exclusive news and updates.</p>
        <form action="#">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="EMAIL ADDRESS"
            />
            <input type="submit" value="Sign Up" />
          </label>
        </form>
        <div className="boiler-plate">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
