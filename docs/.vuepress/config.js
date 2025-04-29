import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Linux App Library',
  description: 'A list of very useful or very cool apps!',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    
    // Navbar configuration
    navbar: [
      { text: 'Home', link: '/' },
      { text: "Editor's Choice", link: 'editorsChoice.md' },
      { text: "Essentials", link: 'essentials.md' },
      { text: "Popular", link: 'popular.md' },
      { text: "Gnomie", link: 'gnomie.md' }
    ],
    
    // Sidebar configuration
    sidebar: {
      '/editorsChoice.md/': [
        {
          text: "Editor's Choice",
          children: [
            '/editorsChoice.md',
          ]
        }
      
      ]
    }
  }),

  bundler: viteBundler(),
})