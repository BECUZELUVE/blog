import { defineConfig } from 'vitepress'

export default defineConfig({
  // ⚠️重要：仓库是 你的名字.github.io 就写 '/'；普通仓库填 '/仓库名/'
  base: '/',
  title: "AI应用开发笔记",
  description: "记录大模型、RAG、Python、LLM应用开发学习与踩坑",
  lang: 'zh-CN',

  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI笔记', link: '/ai-notes/rag-note' },
      { text: '项目复盘', link: '/projects/ollama-rag-demo' },
      { text: '踩坑日志', link: '/bugs/docker-oom' },
      { text: '关于我', link: '/about' }
    ],
    sidebar: {
      '/ai-notes/': [
        { text: 'RAG基础学习', link: '/ai-notes/rag-note' }
      ],
      '/projects/': [
        { text: 'Ollama本地RAG实践', link: '/projects/ollama-rag-demo' }
      ],
      '/bugs/': [
        { text: 'Docker大模型OOM排查', link: '/bugs/docker-oom' }
      ]
    },
    footer: {
      copyright: '© 2026 个人技术博客 | Powered by VitePress'
    }
  }
})
