<template><div><p><sub>Go back to <RouteLink to="/">Linux Apps Library</RouteLink></sub></p>
<h1 id="essentials" tabindex="-1"><a class="header-anchor" href="#essentials"><span>Essentials</span></a></h1>
<h2 id="flatseal" tabindex="-1"><a class="header-anchor" href="#flatseal"><span><a href="https://flathub.org/apps/com.github.tchx84.Flatseal" target="_blank" rel="noopener noreferrer">Flatseal</a></span></a></h2>
<p>GUI to modify Flatpak permissions</p>
<p><strong>Flatpak (System)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> flathub com.github.tchx84.Flatseal</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Flatpak (User)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> <span class="token parameter variable">--user</span> flathub com.github.tchx84.Flatseal</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="timeshift" tabindex="-1"><a class="header-anchor" href="#timeshift"><span><a href="https://github.com/linuxmint/timeshift" target="_blank" rel="noopener noreferrer">Timeshift</a></span></a></h2>
<p>Create snapshots of your computer, especially if you use Arch.</p>
<p><strong>SELinux Compatibility</strong></p>
<p>If you want to use Timeshift with SELinux, you might want to set SELinux mode from “enforcing” to “permissive” to enable proper function among kernel versions.</p>
<p><strong>Go to the file <code v-pre>/etc/selinux/config</code>, scroll down and set SELinux to &quot;permissive.&quot;</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># SELINUX=enforcing</span></span>
<span class="line"><span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>permissive</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Debian/Ubuntu</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> timeshift</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Fedora</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> timeshift</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Arch</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> timeshift</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


