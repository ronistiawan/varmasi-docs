import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span><img src='https://res.cloudinary.com/dmhtdcvan/image/upload/v1725097352/Varmasi/varmasi.png' alt='logo'/></span>,
  
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Varmasi'
      }
    }
  },
  editLink: { text: ''},
  feedback: { content: '', labels: '' },

  footer: {
    text: 'Varmasi @ 2024'
  }
}

export default config