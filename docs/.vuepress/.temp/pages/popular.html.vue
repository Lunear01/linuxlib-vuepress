<template><div><p><sub>Go back to <RouteLink to="/home.html">Linux Apps Library</RouteLink></sub></p>
<h1 id="popular" tabindex="-1"><a class="header-anchor" href="#popular"><span>Popular</span></a></h1>
<h2 id="discord" tabindex="-1"><a class="header-anchor" href="#discord"><span><a href="https://flathub.org/apps/com.discordapp.Discord" target="_blank" rel="noopener noreferrer">Discord</a></span></a></h2>
<p>Discord messenger. Join servers and chat with friends!</p>
<p><strong>Flatpak (System)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> flathub com.discordapp.Discord</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Flatpak (User)</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> <span class="token parameter variable">--user</span> flathub com.discordapp.Discord</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Screen sharing does not work on Wayland because Discord uses an outdated electron version. For that, you may want to check out Vesktop or install Xwayland Video Bridge.</p>
<p><RouteLink to="/editorsChoice.html#vesktop">Vesktop</RouteLink> supports video and audio sharing out of the box and has Vencord tweak integrated. It is the editors’ preferred way to use Discord.</p>
<h3 id="vencord" tabindex="-1"><a class="header-anchor" href="#vencord"><span><a href="https://vencord.dev/download/" target="_blank" rel="noopener noreferrer">Vencord</a></span></a></h3>
<p>A Discord mod (not affiliated with Discord) that allows for theming and cool features.</p>
<p><em>Fun fact: aier loves the 'Fluent Discord' &amp; 'MaterialDiscord&quot; theme found in BetterDiscord's website.</em></p>
<p><strong>Very easy installation. Just paste this line in the terminal to run and set up the installer:</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://raw.githubusercontent.com/Vendicated/VencordInstaller/main/install.sh<span class="token variable">)</span></span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="discord-rich-presence-drp" tabindex="-1"><a class="header-anchor" href="#discord-rich-presence-drp"><span>Discord Rich Presence (DRP)</span></a></h2>
<p>Flatpak is a sandbox, you need a few more steps to set up Discord Rich Presence</p>
<p><strong><sub>Non-Flatpak Apps</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.config/user-tmpfiles.d</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">'L %t/discord-ipc-0 - - - - app/com.discordapp.Discord/discord-ipc-0'</span> <span class="token operator">></span> ~/.config/user-tmpfiles.d/discord-rpc.conf</span>
<span class="line">systemctl <span class="token parameter variable">--user</span> <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> systemd-tmpfiles-setup.service</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Flatpak Apps</strong>
(Not Recommended, find more info in the Github Link)</p>
<h2 id="gparted" tabindex="-1"><a class="header-anchor" href="#gparted"><span><a href="https://gparted.org/download.php" target="_blank" rel="noopener noreferrer">Gparted</a></span></a></h2>
<p><strong><sub>Debian/Ubuntu</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">gparted</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><sub>Fedora</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">gparted</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><sub>Arch</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> <span class="token function">gparted</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="obs-studio" tabindex="-1"><a class="header-anchor" href="#obs-studio"><span><a href="https://flathub.org/apps/com.obsproject.Studio" target="_blank" rel="noopener noreferrer">OBS Studio</a></span></a></h2>
<p><strong><sub>Flatpak(System)</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> flathub com.obsproject.Studio</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><sub>Flatpak(User)</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> <span class="token parameter variable">--user</span> flathub com.obsproject.Studio</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="v4l2loopback-virtual-camera-and-more" tabindex="-1"><a class="header-anchor" href="#v4l2loopback-virtual-camera-and-more"><span><a href="https://github.com/umlaeute/v4l2loopback" target="_blank" rel="noopener noreferrer">v4l2loopback (Virtual Camera and More)</a></span></a></h3>
<p>You would want to install v4l2loopback if you want to use the “virtual camera” function in OBS Studio.</p>
<h4 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies:</span></a></h4>
<p><strong><sub>Debian/Ubuntu</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> dkms</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><sub>Fedora</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> dnf <span class="token function">install</span> gcc kernel-devel dkms</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><sub>Arch (To be updated)</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="install-module-run" tabindex="-1"><a class="header-anchor" href="#install-module-run"><span>Install Module &amp; Run:</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone https://github.com/umlaeute/v4l2loopback</span>
<span class="line"><span class="token builtin class-name">cd</span> v4l2loopback</span>
<span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">sudo</span> depmod <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token function">sudo</span> modprobe v4l2loopback</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="load-module-on-startup" tabindex="-1"><a class="header-anchor" href="#load-module-on-startup"><span>Load module on startup:</span></a></h4>
<p>Create the File <code v-pre>/etc/modules-load.d/v4l2loopback.conf</code> and write:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">v4l2loopback</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>In the case where the “Virtual Camera” button doesn’t show on OBS, the system may not have loaded the module. You can either redo the installation, or try loading the the module manually with:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> modprobe v4l2loopback</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code"><span>VS Code</span></a></h2>
<p><strong><sub>Flatpak (System)</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> flathub com.visualstudio.code</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><sub>Flatpak (User)</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">flatpak <span class="token function">install</span> <span class="token parameter variable">--user</span> flathub com.visualstudio.code</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="vs-code-non-flatpak-download" tabindex="-1"><a class="header-anchor" href="#vs-code-non-flatpak-download"><span><a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">VS Code Non-Flatpak Download</a></span></a></h3>
<p>If you have to avoid limitations imposed by using a Flatpak wrapper of VS Code, check the downloads methods below.</p>
<p><strong><sub>Debian/Ubuntu</sub></strong><br>
Download .deb file from link above</p>
<p><strong><sub>Fedora</sub></strong><br>
Download .rpm file from link above</p>
<p><strong><sub>Arch (AUR)</sub></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">yay <span class="token parameter variable">-S</span> visual-studio-code-bin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


