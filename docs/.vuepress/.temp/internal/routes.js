export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/lunear/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/editorsChoice.html", { loader: () => import(/* webpackChunkName: "editorsChoice.html" */"/home/lunear/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/editorsChoice.html.js"), meta: {"title":"Editor's Choice"} }],
  ["/essentials.html", { loader: () => import(/* webpackChunkName: "essentials.html" */"/home/lunear/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/essentials.html.js"), meta: {"title":"Essentials"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/lunear/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/gnomie.html", { loader: () => import(/* webpackChunkName: "gnomie.html" */"/home/lunear/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/gnomie.html.js"), meta: {"title":"Gnomie"} }],
  ["/popular.html", { loader: () => import(/* webpackChunkName: "popular.html" */"/home/lunear/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/popular.html.js"), meta: {"title":"Popular"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/lunear/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
