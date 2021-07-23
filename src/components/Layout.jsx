import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <h1>Layout</h1>
      <Header />
      {children}
      <Footer />
    </>
  )
}
