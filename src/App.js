import './App.css'
import React, { useState } from 'react'
import Header from './Header'
import Page from './Page'
function App() {
  const [isRtl] = useState(true)
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [isRtl]);
  return (
    <div dir="rtl">
      <Header />
      <Page />
    </div>
  )
}

export default App
