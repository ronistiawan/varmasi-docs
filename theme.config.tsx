import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span><img src='https://res.cloudinary.com/dmhtdcvan/image/upload/v1725097352/Varmasi/varmasi.png' alt='logo'/></span>,
  
  head: function useHead() {
    const config = useConfig()
    const { asPath } = useRouter()
    let path = asPath === "/" ? "" : asPath
  
    const description = config.frontMatter.description || 'Aplikasi Apotek terlengkap dan termurah'
  
    const title = config.title || 'Varmasi'
  
    return (
      <>
      <html lang={"en"} />
      <link rel="shortcut icon" href="/docs/images/favicon.ico" />
      <title>{title} | Varmasi</title>
      <meta name="description" content={`${description}`} />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta httpEquiv="Content-Language" content="id" />
  
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://varmasi.com`} />
      <meta property="og:title" content={`Varmasi: ${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content="https://varmasi.com/.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      </>
    )
  },
  feedback: { content: '', labels: '' },

  footer: {
    content: 'Varmasi @ 2024'
  }
}

export default config