import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Linux App Library',
  description: 'A list of very useful or very cool apps!',
  base: 'linuxlib-vuepress', // GitHub repo name - must be at the root level
  
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    
    // Navbar configuration
    navbar: [
      { text: 'Home', link: '/' },
      { text: "Editor's Choice", link: '/editorsChoice.md' }, // Added leading slash
      { text: "Essentials", link: '/essentials.md' }, // Added leading slash
      { text: "Popular", link: '/popular.md' }, // Added leading slash
      { text: "Gnomie", link: '/gnomie.md' } // Added leading slash
    ],
    
    // Sidebar configuration
    sidebar: {
      '/': [ // Changed to match all paths
        {
          text: "Categories",
          children: [
            '/editorsChoice.md',
            '/essentials.md',
            '/popular.md',
            '/gnomie.md'
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
  dest: 'docs/public' // Output directory
})