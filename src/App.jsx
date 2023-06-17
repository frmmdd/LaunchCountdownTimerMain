import * as React from 'react'
import './App.css'
import Countdown from './Countdown'
import Footer from './Footer'
import Pinperest from './Pinperest'
import Instagram from './Instagram'
import Facebook from './Facebook'

export default function App() {
  return (
    <main>
      <h1>WEE'AR LAUCHING SOON</h1>
      <Countdown />
      <div className="position-relative bottom-0 mt-auto">
        <Footer />
        <div
          className="position-absolute bottom-0 end-50 translate-middle-y d-flex gap-4 pb-4"
        >
          <Pinperest />
          <Instagram />
          <Facebook />
        </div>
      </div>
    </main>
  )
}
