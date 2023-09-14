import Head from 'next/head'
import stylesheet from '../styles/header.module.css'
import { AppBar, Toolbar } from '@mui/material'


export default function CardHeader() {
  return (
    <>
      <AppBar position="static" className={stylesheet.header}>
        <Toolbar className={stylesheet.headerTool}>
          <h1 className={stylesheet.logo}>
            <i>EF</i>
            <span>SET</span>
          </h1>
        </Toolbar>
      </AppBar>
    </>
  )
}
