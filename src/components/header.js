import Head from 'next/head'
import stylesheet from '../styles/header.module.css'
import { AppBar, Toolbar } from '@mui/material'


export default function Header() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
