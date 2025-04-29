<template><div><p><sub>Go back to <RouteLink to="/">Linux Apps Library</RouteLink></sub></p>
<h1 id="editor-s-choice" tabindex="-1"><a class="header-anchor" href="#editor-s-choice"><span>Editor's Choice</span></a></h1>
<h2 id="nautilus-file-manager" tabindex="-1"><a class="header-anchor" href="#nautilus-file-manager"><span><a href="https://apps.gnome.org/Nautilus/" target="_blank" rel="noopener noreferrer">Nautilus (File Manager)</a></span></a></h2>
<p>The clean, functional, and blazing fast file manager by Gnome</p>
<p><strong>Debian/Ubuntu</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nautilus</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Fedora</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> nautilus</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Arch</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> nautilus</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="spotube" tabindex="-1"><a class="header-anchor" href="#spotube"><span><a href="https://flathub.org/apps/com.github.KRTirtho.Spotube" target="_blank" rel="noopener noreferrer">Spotube</a></span></a></h2>
<p>Spotify/Youtube Music client + downloader</p>
<p><strong>Flatpak (System)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> flathub com.github.KRTirtho.Spotube</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Flatpak (User)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> <span class="token parameter variable">--user</span> flathub dev.vencord.Vesktop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="vesktop" tabindex="-1"><a class="header-anchor" href="#vesktop"><span><a href="https://flathub.org/apps/dev.vencord.Vesktop" target="_blank" rel="noopener noreferrer">Vesktop</a></span></a></h2>
<p>Discord with screen sharing and audio support, as well as Vencord inbuilt</p>
<p><strong>Flatpak (System)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> flathub dev.vencord.Vesktop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Flatpak (User)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> <span class="token parameter variable">--user</span> flathub dev.vencord.Vesktop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Note:
If you do not care about Discord Rich Presence (DRP), proceed with the Flatpak installation.</p>
<p>If you do want DRP, check out <a href="https://github.com/Vencord/Vesktop/releases" target="_blank" rel="noopener noreferrer">Vesktop’s Github Releases</a> and download the package for your respective distribution</p>
<h2 id="waydroid" tabindex="-1"><a class="header-anchor" href="#waydroid"><span><a href="https://docs.waydro.id/usage/install-on-desktops" target="_blank" rel="noopener noreferrer">Waydroid</a></span></a></h2>
<p>Run Android on Linux!</p>
<p>Find out about installation details on the link above</p>
<p><strong>Debian/Ubuntu</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> ca-certificates <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token function">curl</span> https://repo.waydro.id <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> waydroid <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Fedora</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> waydroid</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Arch (AUR)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> yay <span class="token parameter variable">-S</span> waydroid</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="zen-browser" tabindex="-1"><a class="header-anchor" href="#zen-browser"><span><a href="https://flathub.org/apps/app.zen_browser.zen" target="_blank" rel="noopener noreferrer">Zen Browser</a></span></a></h2>
<p>From Zen: “Zen is the best way to browse the web. Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data.”</p>
<p><strong>Flatpak (System)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> flathub app.zen_browser.zen</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Flatpak (User)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> <span class="token parameter variable">--user</span> flathub app.zen_browser.zen</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Arch (AUR)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">yay <span class="token parameter variable">-S</span> zen-browser-bin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


