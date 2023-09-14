import React from 'react'
import Footer from './footer'
import { Typography } from '@mui/material'
import Header from './header'
export default function Layout({children}) {
  return (
    <section style={{height:'100vh',width:"100%"}}>
        <Header/>
        {children}
        <Footer/>
    </section>
  )
}
