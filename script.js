/* SVG/XHTML compatibility */
function __vantaSetBodyHTML(markup) {
  const target = document.body || document.querySelector("foreignObject > html > body");
  if (!target) throw new Error("Vanta SVG body was not initialized");
  const parsed = new DOMParser().parseFromString(markup, "text/html");
  while (target.firstChild) target.removeChild(target.firstChild);
  for (const node of Array.from(parsed.body.childNodes)) {
    target.appendChild(document.importNode(node, true));
  }
}


(() => {
  "use strict";
  __vantaSetBodyHTML("\n<aside class=\"w-[60px] h-full bg-black border-r border-[#1a1a1a] flex flex-col justify-between items-center py-4 flex-shrink-0 z-50\">\n<div class=\"flex flex-col gap-4 w-full px-2\" id=\"sidebar-top\">\n</div>\n<div class=\"flex flex-col gap-4 w-full px-2\" id=\"sidebar-bottom\">\n<button id=\"settings-btn\" class=\"w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-white icon-transition group mx-auto\" title=\"Settings\">\n<i class=\"fa-solid fa-gear w-5 h-5 group-hover:rotate-45 transition-transform duration-300\"></i>\n</button>\n</div>\n</aside>\n<main class=\"flex-1 flex flex-col min-w-0 bg-black relative\">\n<header class=\"h-[40px] flex items-center pl-2 pr-2 border-b border-[#1a1a1a] bg-[#000] z-50 w-full overflow-x-auto scroll-smooth gap-1\" id=\"tab-bar\">\n<button id=\"new-tab-btn\" class=\"w-8 h-8 rounded-md flex items-center justify-center text-gray-400 hover:bg-[#1a1a1a] hover:text-white flex-shrink-0 icon-transition ml-1\" title=\"New Tab\">\n<i class=\"fa-solid fa-plus w-4 h-4\"></i>\n</button>\n</header>\n<nav class=\"h-[48px] flex items-center px-4 gap-3 bg-black border-b border-[#0f0f0f] z-50 w-full shrink-0\">\n<div class=\"flex items-center gap-1 text-gray-400\">\n<button id=\"back\" class=\"w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white icon-transition\">\n<i class=\"fa-solid fa-arrow-left w-4 h-4\"></i>\n</button>\n<button id=\"forward\" class=\"w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white icon-transition\">\n<i class=\"fa-solid fa-arrow-right w-4 h-4\"></i>\n</button>\n<button id=\"reload\" class=\"w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white icon-transition\">\n<i class=\"fa-solid fa-rotate-right w-4 h-4\"></i>\n</button>\n</div>\n<div id=\"address-shell\" class=\"flex-1 max-w-3xl flex items-center h-[36px] bg-[#0d0d0d] rounded-full px-3 border border-[#252525] hover:border-[#333] focus-within:border-[#555] focus-within:bg-[#111] transition-all mx-auto shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015),0_4px_18px_rgba(0,0,0,0.25)]\">\n<div id=\"address-icon\" class=\"w-7 h-7 rounded-full flex items-center justify-center text-gray-500 shrink-0\">\n<i class=\"fa-solid fa-magnifying-glass w-3.5 h-3.5\"></i>\n</div>\n<input type=\"text\" id=\"url-input\" class=\"bg-transparent text-sm text-gray-200 w-full h-full px-2 placeholder-gray-600 selection:bg-gray-600/50\" value=\"home\" placeholder=\"Search or enter a web address\" autocomplete=\"off\" spellcheck=\"false\">\n<button id=\"clear-url\" type=\"button\" class=\"w-7 h-7 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1c1c1c] transition-colors shrink-0\" title=\"Clear address\">\n<i class=\"fa-solid fa-xmark w-3.5 h-3.5\"></i>\n</button>\n</div>\n<div class=\"flex items-center justify-end w-auto shrink-0 relative\">\n<button id=\"translate-btn\" type=\"button\" class=\"w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#1a1a1a] hover:text-white border border-transparent hover:border-[#292929] transition-all\" title=\"Google Translate\" aria-label=\"Google Translate\" aria-expanded=\"false\">\n<i class=\"fa-solid fa-language w-4 h-4\"></i>\n</button>\n<div id=\"translate-panel\" class=\"hidden absolute right-0 top-11 z-[80] w-[280px] rounded-2xl border border-[#292929] bg-[#090909]/95 backdrop-blur-xl shadow-2xl p-3\">\n<div class=\"flex items-center justify-between mb-2\">\n<span class=\"text-xs font-semibold text-white\">Google Translate</span>\n<button id=\"translate-close\" type=\"button\" class=\"w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#1a1a1a]\" title=\"Close\">\n<i class=\"fa-solid fa-xmark w-3.5 h-3.5\"></i>\n</button>\n</div>\n<div id=\"google_translate_element\" class=\"min-h-[40px] text-sm\"></div>\n<div id=\"translate-status\" class=\"mt-2 text-[10px] text-gray-600\">Choose a language to translate the current tab.</div>\n</div>\n</div>\n</nav>\n<div class=\"flex-1 relative overflow-hidden bg-black w-full h-full\" id=\"content-container\">\n<canvas id=\"background-canvas\" class=\"absolute inset-0 w-full h-full z-0 pointer-events-none\"></canvas>\n<div id=\"home-view\" class=\"absolute inset-0 z-10 flex flex-col items-center justify-center p-8 transition-opacity duration-300\">\n<h1 class=\"text-6xl md:text-7xl font-bold mb-12 tracking-tight title-font text-white\">Vanta.</h1>\n<div class=\"home-subtitle\">Private browser · simple by design</div>\n<div class=\"flex items-center gap-4\">\n<button type=\"button\" data-home-app=\"g\" class=\"shortcut-card w-[52px] h-[52px] rounded-2xl border border-[#222] bg-[#050505] hover:bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white icon-transition group\">\n<i class=\"fa-solid fa-gamepad w-5 h-5 group-hover:scale-110 transition-transform\"></i>\n</button>\n<button type=\"button\" data-home-app=\"cloud\" class=\"shortcut-card w-[52px] h-[52px] rounded-2xl border border-[#222] bg-[#050505] hover:bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white icon-transition group\">\n<i class=\"fa-solid fa-microchip w-5 h-5 group-hover:scale-110 transition-transform\"></i>\n</button>\n<button type=\"button\" data-home-app=\"home\" class=\"shortcut-card w-[52px] h-[52px] rounded-2xl border border-[#222] bg-[#050505] hover:bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white icon-transition group\">\n<i class=\"fa-solid fa-message w-5 h-5 group-hover:scale-110 transition-transform\"></i>\n</button>\n<button type=\"button\" data-home-app=\"movies\" class=\"shortcut-card w-[52px] h-[52px] rounded-2xl border border-[#222] bg-[#050505] hover:bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white icon-transition group\">\n<i class=\"fa-solid fa-clapperboard w-5 h-5 group-hover:scale-110 transition-transform\"></i>\n</button>\n<button type=\"button\" data-home-app=\"cloud\" class=\"shortcut-card w-[52px] h-[52px] rounded-2xl border border-[#222] bg-[#050505] hover:bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white icon-transition group\">\n<i class=\"fa-solid fa-display w-5 h-5 group-hover:scale-110 transition-transform\"></i>\n</button>\n</div>\n</div>\n<section id=\"settings-view\" class=\"absolute inset-0\">\n<div class=\"settings-wrap\">\n<div class=\"settings-hero\">\n<div>\n<div class=\"settings-kicker\">VANTA</div>\n<h2 class=\"settings-title\">Settings</h2>\n<p class=\"settings-subtitle\">Manage the browser connection, search, tabs, appearance, and backend from one place.</p>\n</div>\n</div>\n<div class=\"settings-layout\">\n<nav class=\"settings-nav\" aria-label=\"Settings sections\">\n<button class=\"active\" data-settings-section=\"connection\"><i class=\"fa-solid fa-radio\"></i><span>Connection</span></button>\n<button data-settings-section=\"search\"><i class=\"fa-solid fa-magnifying-glass\"></i><span>Search</span></button>\n<button data-settings-section=\"tabs\"><i class=\"fa-solid fa-table-columns\"></i><span>Tabs</span></button>\n<button data-settings-section=\"appearance\"><i class=\"fa-solid fa-wand-magic-sparkles\"></i><span>Appearance</span></button>\n<button data-settings-section=\"backend\"><i class=\"fa-solid fa-server\"></i><span>Backend</span></button>\n</nav>\n<div class=\"settings-main\">\n<div class=\"settings-card\" data-settings-card=\"connection\">\n<div class=\"settings-card-head\"><strong>Connection</strong><span>WISP / NETWORK</span></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">WISP endpoint</div><div class=\"setting-desc\">WebSocket endpoint used by proxied tabs.</div></div><div class=\"setting-control\"><input id=\"setting-wisp\" class=\"settings-input\" placeholder=\"wss://.../wisp/\"></div></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Test connection</div><div id=\"relay-status\" class=\"setting-desc\">Not tested</div></div><div class=\"setting-control\"><button id=\"test-relay\" class=\"settings-button\">Run test</button></div></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">User agent</div><div class=\"setting-desc\">Preference for newly opened proxied tabs.</div></div><div class=\"setting-control\"><select id=\"setting-agent\" class=\"settings-select\"><option>Default</option><option>Chrome</option><option>Firefox</option><option>Safari</option></select></div></div>\n</div>\n<div class=\"settings-card\" data-settings-card=\"search\">\n<div class=\"settings-card-head\"><strong>Search</strong><span>ADDRESS BAR</span></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Search engine</div><div class=\"setting-desc\">Used when text is entered into the address bar.</div></div><div class=\"setting-control\"><select id=\"setting-search\" class=\"settings-select\"><option value=\"brave\">Brave</option><option value=\"duckduckgo\">DuckDuckGo</option><option value=\"google\">Google</option><option value=\"bing\">Bing</option></select></div></div>\n</div>\n<div class=\"settings-card\" data-settings-card=\"tabs\">\n<div class=\"settings-card-head\"><strong>Tabs</strong><span>BROWSER IDENTITY</span></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Current tab URL</div><div class=\"setting-desc\">Change the URL for the selected tab only.</div></div><div class=\"setting-control tab-url-control\"><input id=\"setting-tab-url\" class=\"settings-input\" placeholder=\"https://example.com\"></div></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Apply URL</div><div class=\"setting-desc\">Updates only the active tab.</div></div><div class=\"setting-control\"><button id=\"apply-tab-url\" class=\"settings-button\">Apply to this tab</button></div></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Tab cover</div><div class=\"setting-desc\">Use the Google icon and Google name for the browser tab.</div></div><div class=\"setting-control\"><button id=\"tab-cover-toggle\" class=\"settings-switch\" aria-label=\"Enable tab cover\"><span></span></button></div></div>\n</div>\n<div class=\"settings-card\" data-settings-card=\"appearance\">\n<div class=\"settings-card-head\"><strong>Appearance</strong><span>INTERFACE</span></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">WebGL home background</div><div class=\"setting-desc\">Keep the animated contour background behind Home and Settings.</div></div><div class=\"setting-control\"><button id=\"home-bg-toggle\" class=\"settings-switch on\"><span></span></button></div></div>\n</div>\n<div class=\"settings-card\" data-settings-card=\"backend\">\n<div class=\"settings-card-head\"><strong>Backend</strong><span>SERVICE WORKER</span></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Proxy engine</div><div class=\"setting-desc\">Choose which proxy backend Vanta uses for proxied tabs. Only the selected engine is registered.</div></div><div class=\"setting-control\"><select id=\"setting-engine\" class=\"settings-select\"><option value=\"scramjet-v2\">Scramjet v2</option><option value=\"two-jet\">Two Jet</option></select></div></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Service worker</div><div id=\"sw-status\" class=\"setting-desc\">Checking status…</div></div><div class=\"setting-control\"><button id=\"unregister-sw\" class=\"settings-button danger\">Unregister active SW</button></div></div>\n<div class=\"setting-row\"><div class=\"setting-copy\"><div class=\"setting-name\">Full backend reset</div><div class=\"setting-desc\">Clear site data, caches, and unregister every service worker.</div></div><div class=\"setting-control\"><button id=\"reset-backend\" class=\"settings-button danger\">Reset backend</button></div></div>\n</div>\n<div class=\"settings-actions\">\n<button id=\"reset-settings\" class=\"settings-button settings-action\"><i class=\"fa-solid fa-rotate-left\"></i><span>Reset settings<small>Restore Vanta preferences</small></span></button>\n<button id=\"clear-site-data\" class=\"settings-button settings-action\"><i class=\"fa-solid fa-trash\"></i><span>Clear site data<small>Clear local browser data</small></span></button>\n</div>\n<div id=\"settings-statusbar\" class=\"settings-statusbar\">Vanta control center ready.</div>\n</div>\n</div>\n</div>\n</section>\n<div id=\"web-view\" class=\"absolute inset-0 z-20 p-2 opacity-0 pointer-events-none transition-opacity duration-300 bg-black flex\">\n<div class=\"w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden relative\">\n<div id=\"iframe-loading-bar\" aria-hidden=\"true\"><span></span></div>\n<div id=\"browser-loading\" class=\"absolute inset-0 hidden items-center justify-center bg-black text-white z-50\">\n<div class=\"h-7 w-7 rounded-full border-2 border-white/10 border-t-[#ff7a00] animate-spin\"></div>\n</div>\n<div id=\"proxy-error\" class=\"absolute inset-0 hidden items-center justify-center bg-[#050505]/95 backdrop-blur-xl text-white z-[60]\">\n<div class=\"w-full max-w-md px-6 text-center\">\n<div class=\"mx-auto mb-5 h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center\"><i class=\"fa-solid fa-triangle-exclamation w-6 h-6 text-white/80\"></i></div>\n<h2 class=\"text-lg font-semibold\">This site couldn't load</h2>\n<p id=\"proxy-error-message\" class=\"mt-2 text-sm text-white/45 leading-6\">The proxy connection stopped unexpectedly.</p>\n<button id=\"proxy-error-retry\" class=\"mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition\"><i class=\"fa-solid fa-rotate-right w-4 h-4\"></i>Retry</button>\n</div>\n</div>\n</div>\n</div>\n</div>\n</main>");
})();


(()=>{
        'use strict';
        const DEFAULT_WISP='wss://cdn.kcchallengevbc.com/adblock/';
        const WISP_FALLBACKS=[
            'wss://cdn.kcchallengevbc.com/adblock/',
            'wss://cdn.northstreetumc.org/adblock/',
            'wss://cdn.vipersfutbol.com/adblock/',
            'wss://cdn.pcesc.org/adblock/',
            'wss://cdn.slcbmooc.org/adblock/',
        ];
        const getSavedWisp=()=>{try{return JSON.parse(localStorage.getItem('vanta.settings.v1')||'{}').wisp?.trim()||''}catch{return ''}};
        const validWisp=u=>/^wss:\/\/[^\s/]+(?:\/[^\s]*)?$/i.test(String(u||'').trim());
        const getWisp=()=>getSavedWisp()||DEFAULT_WISP;
        let workingWispPromise=null;
        async function getWorkingWisp(){
            if(workingWispPromise)return workingWispPromise;
            workingWispPromise=(async()=>{
                const saved=getSavedWisp();
                const remembered=(()=>{try{return localStorage.getItem('vanta.lastWorkingWisp')||''}catch{return ''}})();
                const candidates=[saved,remembered,...WISP_FALLBACKS].filter(validWisp);
                const unique=[...new Set(candidates)];
                const api=window.EpoxyTransport || (await loadScriptOnce(EPOXY_CDN,'vanta-epoxy'));
                const Transport=api?.default || api;
                if(typeof Transport!=='function')throw new Error('Epoxy transport is unavailable');
                let lastError=null;
                for(const wisp of unique){
                    try{
                        const transport=new Transport({wisp});
                        await Promise.race([
                            Promise.resolve(transport.init()),
                            new Promise((_,reject)=>setTimeout(()=>reject(new Error('WISP connection timed out')),7000))
                        ]);
                        try{localStorage.setItem('vanta.lastWorkingWisp',wisp)}catch{}
                        return wisp;
                    }catch(e){
                        lastError=e;
                        console.warn('[Vanta] WISP failed:',wisp,e);
                    }
                }
                throw new Error('No WISP server could be initialized'+(lastError?.message?': '+lastError.message:''));
            })().finally(()=>{workingWispPromise=null});
            return workingWispPromise;
        }
        const $=id=>document.getElementById(id);
        const sidebarTop=$('sidebar-top'), tabBar=$('tab-bar'), urlInput=$('url-input');
        const homeView=$('home-view'), webView=$('web-view'), browserLoading=$('browser-loading'), proxyError=$('proxy-error'), proxyErrorMessage=$('proxy-error-message'), proxyErrorRetry=$('proxy-error-retry');
        const backBtn=$('back'), forwardBtn=$('forward'), reloadBtn=$('reload');
        function showSiteLoading(tab,message='Loading site'){
            browserLoading.classList.remove('hidden'); browserLoading.classList.add('flex');
            $('iframe-loading-bar')?.classList.add('active');
        }
        function hideSiteLoading(){
            browserLoading.classList.add('hidden'); browserLoading.classList.remove('flex');
            $('iframe-loading-bar')?.classList.remove('active');
        }
        function hideProxyError(){
            proxyError.classList.add('hidden'); proxyError.classList.remove('flex');
        }
        function showProxyError(message){
            hideSiteLoading();
            const text=String(message||'');
            proxyErrorMessage.textContent=text && text.length<220 ? text : 'The proxy connection stopped unexpectedly. Click Retry to reconnect.';
            proxyError.classList.remove('hidden'); proxyError.classList.add('flex');
        }
        async function retryProxyConnection(){
            const active=tabs.find(t=>t.id===activeTabId);
            if(!active || active.type!=='proxy')return;
            hideProxyError(); showSiteLoading(active);
            clearTimeout(backendRetryTimer); backendRetryTimer=null;
            ready=false; controller=null; resetProxyFrames();
            try{
                await recoverBackend('manual retry: re-inject service worker and WISP');
                if(!ready || !controller)throw new Error('Backend is still unavailable');
                const current=tabs.find(t=>t.id===activeTabId);
                if(!current || current.type!=='proxy')return;
                try{ current.proxyFrame?.destroy?.(); }catch{}
                current.proxyFrame=null;
                current.userNavigatingUntil=performance.now()+1800;
                current.proxyFrame=controller.createFrame(current.iframe);
                await Promise.resolve(current.proxyFrame.go(current.target||current.url));
            }catch(error){
                console.error('[Vanta] Manual proxy retry failed:',error);
                showProxyError(String(error?.message||error));
            }
        }
        proxyErrorRetry.onclick=retryProxyConnection;
        const AppMap={
            home:{id:'home',icon:'home',title:'Vanta.',url:'vanta://home',target:'/home.html',type:'direct'},
            movies:{id:'movies',icon:'clapperboard',title:'cineby.rocks',url:'https://cdn.jsdelivr.net/~/sj/hev4hlj5/8lcue6xg/https%3A%2F%2Fcineby.rocks%2F',type:'proxy'},
            g:{id:'g',icon:'gamepad-2',title:'Games',url:'vanta://g',target:'/g.html',type:'direct'},
            cloud:{id:'cloud',icon:'cloud',title:'Vanta Cloud',url:'vanta://cloud',target:'https://vanta-git.github.io/Cloud-G-Release/',type:'proxy'}
        };
        const sidebarOrder=['home','movies','g','cloud'];
        let controller=null, ready=false, tabCounter=0, activeTabId=null;
        const tabs=[];
        function setStatus(text){ document.title='Vanta Browser'; }
        function normalize(value){
            value=String(value??'').trim();
            if(!value || value.toLowerCase()==='home' || value==='/VW/home') return 'vanta://home';
            const decodedProxy=extractOriginalUrl(value);
            if(decodedProxy) value=decodedProxy;
            try{
                const local=new URL(value,location.href);
                if(local.origin===location.origin){
                    if(local.pathname==='/home.html' || local.pathname==='/' || local.pathname==='/index.html') return 'vanta://home';
                    if(local.pathname==='/g.html') return 'vanta://g';
                    if(local.pathname==='/embed.html') return 'vanta://cloud';
                    if(local.pathname.startsWith('/~/') || local.pathname.includes('/sj/')){
                        const original=extractOriginalUrl(local.href);
                        if(original) value=original;
                        else return 'vanta://home';
                    }
                }
            }catch{}
            if(value.toLowerCase()==='vanta://settings' || value.toLowerCase()==='vanta://settings') return 'vanta://settings';
            if(!/^[a-z][a-z\d+.-]*:/i.test(value)){
                if(value.includes('.')) value='https://'+value;
                else {
                    let engine='brave'; try{engine=JSON.parse(localStorage.getItem('vanta.settings.v1')||'{}').search||'brave'}catch{}
                    const engines={brave:'https://search.brave.com/search?q=',duckduckgo:'https://duckduckgo.com/?q=',google:'https://www.google.com/search?q=',bing:'https://www.bing.com/search?q='};
                    value=(engines[engine]||engines.brave)+encodeURIComponent(value);
                }
            }
            if(/^vanta:\/\//i.test(value)) {
                const key=value.slice(8).split('/')[0].toLowerCase();
                if(key==='games') return 'vanta://g';
                 if(key==='settings') return 'vanta://settings';
                 if(AppMap[key]) return 'vanta://'+key;
                throw new Error('Unknown Vanta app');
            }
            const parsed=new URL(value);
            if(!['http:','https:'].includes(parsed.protocol)) throw new Error('Only HTTP and HTTPS URLs are supported');
            return parsed.href;
        }
        const iconMap={globe:'fa-globe',settings:'fa-gear',plus:'fa-plus','arrow-left':'fa-arrow-left','arrow-right':'fa-arrow-right','rotate-cw':'fa-rotate-right',search:'fa-magnifying-glass',x:'fa-xmark',languages:'fa-language','gamepad-2':'fa-gamepad',cpu:'fa-microchip','message-square':'fa-message',clapperboard:'fa-clapperboard',monitor:'fa-display',radio:'fa-radio','panel-top':'fa-table-columns',sparkles:'fa-wand-magic-sparkles','server-cog':'fa-server','rotate-ccw':'fa-rotate-left','trash-2':'fa-trash','triangle-alert':'fa-triangle-exclamation',cloud:'fa-cloud',home:'fa-house'};
        function iconMarkup(name,extra=''){ return '<i class="fa-solid '+(iconMap[name]||'fa-circle')+' '+extra+'"></i>'; }
        function domainFromUrl(url){
            try{return new URL(url).hostname.replace(/^www\./,'')}catch{return ''}
        }
        function faviconUrl(url){
            const host=domainFromUrl(url);
            return host ? 'https://www.google.com/s2/favicons?domain='+encodeURIComponent(host)+'&sz=64' : '';
        }
        function titleFromUrl(url){
            const host=domainFromUrl(url);
            if(!host)return '';
            const names={
                'search.brave.com':'Brave Search',
                'brave.com':'Brave',
                'google.com':'Google',
                'www.google.com':'Google',
                'youtube.com':'YouTube',
                'www.youtube.com':'YouTube',
                'discord.com':'Discord',
                'www.discord.com':'Discord',
                'twitch.tv':'Twitch',
                'www.twitch.tv':'Twitch',
                'spotify.com':'Spotify',
                'www.spotify.com':'Spotify',
                'facebook.com':'Facebook',
                'www.facebook.com':'Facebook'
            };
            return names[host] || host;
        }
        function tabIconNode(tab){
            const box=document.createElement('span'); box.className='vanta-tab-icon';
            const domain=domainFromUrl(tab.url);
            if(domain && /^https?:\/\//i.test(tab.url||'')){
                const img=document.createElement('img');
                img.src=faviconUrl(tab.url); img.alt=''; img.referrerPolicy='no-referrer'; img.decoding='async';
                img.onload=()=>{ if(img.naturalWidth<8 || img.naturalHeight<8){img.remove(); box.insertAdjacentHTML('beforeend',iconMarkup(tab.icon));} };
                img.onerror=()=>{img.remove(); if(!box.querySelector('i')) box.insertAdjacentHTML('beforeend',iconMarkup(tab.icon));};
                box.appendChild(img);
            }else box.insertAdjacentHTML('beforeend',iconMarkup(tab.icon));
            return box;
        }
        function renderSidebar(){
            sidebarTop.innerHTML='';
            sidebarOrder.forEach(appId=>{
                const app=AppMap[appId], btn=document.createElement('button');
                btn.className=`w-11 h-11 rounded-xl flex items-center justify-center icon-transition group mx-auto sidebar-btn-${appId}`;
                btn.innerHTML=iconMarkup(app.icon,'w-[22px] h-[22px] transition-transform group-hover:scale-110');
                btn.onclick=()=>openApp(appId); sidebarTop.appendChild(btn);
            });
        }
        function updateSidebar(){
            const active=tabs.find(t=>t.id===activeTabId);
            sidebarOrder.forEach(id=>{const b=document.querySelector(`.sidebar-btn-${id}`); if(!b)return; const on=active&&active.appId===id; b.classList.toggle('bg-white',on);b.classList.toggle('text-black',on);b.classList.toggle('shadow-md',on);b.classList.toggle('text-gray-400',!on);});
        }
        function createTab(appId='home'){
            const app=AppMap[appId]||AppMap.home, id='tab-'+tabCounter++;
            const iframe=document.createElement('iframe');
            iframe.className='w-full h-full border-0 bg-white';
            iframe.title='Vanta browser content';
            iframe.referrerPolicy='no-referrer';
            iframe.style.display='none';
            const frameHost=webView.querySelector(':scope > div');
            if(!frameHost) throw new Error('Vanta web view frame host is missing');
            frameHost.insertBefore(iframe, browserLoading);
            const tab={id,appId:app.id,title:app.title,icon:app.icon,url:app.url,type:app.type,target:app.target||app.url,proxyFrame:null,iframe,lastFrameUrl:'',urlWatcher:null,proxyOpening:null,navSeq:0,userNavigatingUntil:0};
            iframe.src=(app.id==='home') ? new URL('./home.html',location.href).href : 'about:blank';
            tabs.push(tab);
            iframe.addEventListener('load',()=>{if(activeTabId===id)hideSiteLoading(); updateTabAddressFromFrame(tab);});
            renderTabs(); switchTab(id);
            return tab;
        }
        function openApp(appId){
            const app=AppMap[appId]; if(!app)return;
            let t=tabs.find(x=>x.appId===appId);
            if(!t)t=createTab(appId);
            t.appId=app.id; t.title=app.title; t.icon=app.icon; t.url=app.url; t.type=app.type; t.target=app.target||app.url;
            if(t.proxyFrame){ try{t.proxyFrame.destroy?.()}catch{}; t.proxyFrame=null; }
            switchTab(t.id);
            navigate(app.url).catch(e=>console.error('[Vanta] App navigation failed:',e));
        }
        function renderTabs(){
            const plus=document.getElementById('new-tab-btn');
            tabBar.innerHTML='';
            tabs.forEach(tab=>{
                const active=tab.id===activeTabId;
                const el=document.createElement('div');
                el.className=`group vanta-tab shrink-0 cursor-pointer tab-transition border ${active?'bg-[#151515] text-white border-[#ff7a00]':'bg-transparent text-gray-500 border-transparent hover:bg-[#0f0f0f] hover:text-gray-300'}`;
                el.onclick=()=>switchTab(tab.id);
                const icon=tabIconNode(tab);
                const title=document.createElement('span'); title.className='vanta-tab-title text-xs truncate font-medium select-none'; title.textContent=tab.title||domainFromUrl(tab.url)||'New Tab';
                const close=document.createElement('button'); close.type='button'; close.className='w-5 h-5 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 shrink-0 transition-opacity'; close.title='Close Tab'; close.innerHTML='<i class="fa-solid fa-xmark"></i>'; close.onclick=e=>window.closeVantaTab(tab.id,e);
                el.append(icon,title,close); tabBar.appendChild(el);
            });
            if(plus) tabBar.appendChild(plus);
        }
        function decodeProxyUrl(raw){
            let value=String(raw||'').trim();
            if(!value || value==='about:blank') return '';
            for(let i=0;i<12;i++){
                let next=value;
                try{next=decodeURIComponent(value)}catch{}
                if(next===value) break;
                value=next;
            }
            return value;
        }
        function extractOriginalUrl(raw){
            let u=decodeProxyUrl(raw);
            if(!u)return null;

            // Scramjet/SJ wrapped URLs are only navigation hints. Never fetch the
            // wrapper itself. Extract its encoded destination and send that
            // destination through Vanta's own proxy controller below.
            const sj=/\/~\/sj\/[^/]+\/[^/]+\/(.+)$/i.exec(u);
            if(sj){
                const destination=decodeProxyUrl(sj[1]).replace(/^[\/]+/,'');
                try{
                    const parsed=new URL(destination);
                    if(/^https?:$/i.test(parsed.protocol) &&
                       !/^127\.0\.0\.1$|^localhost$/i.test(parsed.hostname)){
                        return parsed.href;
                    }
                }catch{}
            }

            // Never treat Vanta's own origin/proxy transport URL as the destination.
            // Pull the real http(s) URL from the end of Scramjet/SJ-style paths.
            const matches=[];
            const re=/https?:\/\//ig;
            let m;
            while((m=re.exec(u))!==null){
                const candidate=decodeProxyUrl(u.slice(m.index)).replace(/[\s"'<>]+$/g,'').replace(/[)]+$/g,'');
                try{
                    const parsed=new URL(candidate);
                    if(/^https?:$/i.test(parsed.protocol) && !/^127\.0\.0\.1$|^localhost$/i.test(parsed.hostname)) matches.push(parsed.href);
                }catch{}
            }
            if(matches.length) return matches[matches.length-1];
            try{
                const direct=new URL(u);
                if(/^https?:$/i.test(direct.protocol) && !/^127\.0\.0\.1$|^localhost$/i.test(direct.hostname)) return direct.href;
            }catch{}
            return null;
        }
        function cleanBrowserUrl(raw,fallback=''){
            const original=extractOriginalUrl(raw);
            if(original)return original;
            const value=String(raw||'').trim();
            if(/^vanta:\/\//i.test(value))return value;
            return fallback||value;
        }
        function updateTabAddressFromFrame(tab){
            if(!tab || tab.id!==activeTabId || tab.type!=='proxy')return false;
            let candidates=[];
            try{candidates.push(tab.proxyFrame?.url||'',tab.proxyFrame?.currentUrl||'')}catch{}
            try{candidates.push(tab.iframe.src||'')}catch{}
            try{candidates.push(tab.iframe.contentWindow?.location?.href||'')}catch{}
            let original=null;
            for(const candidate of candidates){
                const found=extractOriginalUrl(candidate);
                if(found){original=found;break;}
            }
            if(!original) original=extractOriginalUrl(tab.target)||cleanBrowserUrl(tab.url);
            if(!original || !/^https?:\/\//i.test(original))return false;
            let pageTitle='';
            try{pageTitle=String(tab.iframe.contentDocument?.title||'').trim()}catch{}
            const nextTitle=pageTitle && !/^Vanta(?: Browser)?$/i.test(pageTitle) ? pageTitle : (titleFromUrl(original)||tab.title);
            const changedUrl=original!==tab.url, changedTitle=nextTitle!==tab.title;
            if(changedUrl){tab.url=original;tab.target=original;}
            if(changedTitle)tab.title=nextTitle;
            if(changedUrl || changedTitle){
                tab.lastFrameUrl=original;
                const editing=document.activeElement===urlInput || document.activeElement===$('setting-tab-url');
                if(!editing && performance.now()>Number(tab.userNavigatingUntil||0)) urlInput.value=original;
                const settingInput=$('setting-tab-url');
                if(settingInput && activeTabId===tab.id && document.activeElement!==settingInput) settingInput.value=original;
                renderTabs();
                return true;
            }
            if(document.activeElement!==urlInput && performance.now()>Number(tab.userNavigatingUntil||0) && urlInput.value!==original) urlInput.value=original;
            return false;
        }
        function startFrameUrlWatcher(tab){
            if(tab.urlWatcher)clearInterval(tab.urlWatcher);
            tab.urlWatcher=setInterval(()=>{ if(performance.now()<Number(tab.userNavigatingUntil||0)) return; updateTabAddressFromFrame(tab); },1200);
        }
        function switchTab(id){
            const tab=tabs.find(t=>t.id===id); if(!tab)return; activeTabId=id; urlInput.value=tab.url==='vanta://home'?'home':(tab.url||'home');
            const settingsOpen=tab.url==='vanta://settings';
            tabs.forEach(t=>{if(t.iframe)t.iframe.style.display=(t.id===id&&!settingsOpen)?'block':'none';});
            homeView.classList.add('opacity-0','pointer-events-none');
            webView.classList.toggle('opacity-0',settingsOpen);
            webView.classList.toggle('pointer-events-none',settingsOpen);
            $('settings-view').classList.toggle('settings-open',settingsOpen);
            renderTabs(); updateSidebar(); const tabUrlInput=$('setting-tab-url'); if(tabUrlInput) tabUrlInput.value=tab.url==='vanta://home'?'home':(tab.url||'');
        }
        
        window.closeVantaTab = (id, e) => {
            e.stopPropagation();
            const i = tabs.findIndex(t => t.id === id);
            if (i < 0) return;
            const tab = tabs[i];
            
            if(tab.urlWatcher) clearInterval(tab.urlWatcher);
            try { tab.proxyFrame?.destroy?.(); } catch(err) {}
            
            if (tab.iframe) tab.iframe.remove();
            tabs.splice(i, 1);
            
            if (!tabs.length) {
                createTab('home');
                return;
            }
            if (activeTabId === id) {
                switchTab(tabs[Math.max(0, Math.min(i, tabs.length - 1))].id);
            } else {
                renderTabs();
            }
        };
        async function openProxyTab(tab,target){
            if(!tab) throw new Error('Tab no longer exists');
            if(tab.type!=='proxy') throw new Error('This tab is not a proxy tab');
            target=extractOriginalUrl(target)||normalize(target);
            if(/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::|\/|$)/i.test(target)) throw new Error('Blocked local proxy URL');
            if(tab.proxyOpening)return tab.proxyOpening;
            tab.proxyOpening=(async()=>{
                if(!ready || !controller) await recoverBackend('proxy backend unavailable for '+(tab.appId||'tab'));
                if(!ready || !controller) throw new Error('Proxy backend is unavailable');
                if(!tab.iframe || !tab.iframe.isConnected) throw new Error('Proxy iframe is unavailable');
                const seq=++tab.navSeq;
                tab.userNavigatingUntil=performance.now()+1800;
                hideProxyError();
                try{
                    let frame=tab.proxyFrame;
                    if(!frame || typeof frame.go!=='function'){
                        frame=controller.createFrame(tab.iframe);
                        if(!frame || typeof frame.go!=='function')throw new Error('Proxy frame could not be created');
                        tab.proxyFrame=frame;
                    }
                    tab.target=target; tab.url=target; tab.lastFrameUrl=target;
                    startFrameUrlWatcher(tab);
                    if(activeTabId===tab.id) urlInput.value=target;
                    renderTabs();
                    await Promise.resolve(frame.go(target));
                    if(seq!==tab.navSeq || tab.proxyFrame!==frame)return;
                }catch(error){
                    console.warn('[Vanta] Proxy navigation failed:',error);
                    throw error;
                }
            })().finally(()=>{tab.proxyOpening=null; tab.userNavigatingUntil=performance.now()+700;});
            return tab.proxyOpening;
        }
        async function navigate(value){
            const active=tabs.find(t=>t.id===activeTabId); if(!active)return; let target; try{target=normalize(value);}catch(e){return;}
            target=extractOriginalUrl(target)||target;
            if(/^https?:\/\/(?:127\.0\.0\.1|localhost)/i.test(target)) return;
            active.url=target;
            if(target==='vanta://settings'){
                active.appId='settings'; active.title='Settings'; active.icon='settings'; active.type='settings'; active.target=target; active.url=target;
                urlInput.value='vanta://settings'; switchTab(active.id); loadSettings(); return;
            }
            const app=target.startsWith('vanta://') ? AppMap[target.slice(8).split('/')[0].toLowerCase()] : null;
            if(app){
                active.appId=app.id;
                active.title=app.title;
                active.type=app.type;
                active.target=app.target||app.url||target;
            } else {
                active.appId=null;
                active.type='proxy';
                active.target=target;
                active.title=titleFromUrl(target)||new URL(target).hostname;
                active.icon='globe';
            }
            urlInput.value=target==='vanta://home'?'home':target;
            hideProxyError();
            homeView.classList.add('opacity-0','pointer-events-none');webView.classList.remove('opacity-0','pointer-events-none');showSiteLoading(active);renderTabs();
            try{
                if(active.type==='direct'){
                    active.iframe.src=active.target;
                } else {
                    try{
                        await openProxyTab(active,active.target||target);
                    }catch(e){
                        if(!isWispMuxTaskEnded(e)) throw e;
                        lastBackendError=String(e?.message||e);
                        await recoverBackend(lastBackendError);
                        if(!ready||!controller) throw e;
                        await openProxyTab(active,active.target||target);
                    }
                }
            }catch(e){
                if(active.type==='proxy'){
                    ready=false; controller=null; resetProxyFrames();
                    clearTimeout(backendRetryTimer); backendRetryTimer=null;
                    showProxyError(String(e?.message||e));
                }
                console.error('[Vanta] Navigation failed:',e);
            } finally { if(activeTabId===active.id && active.iframe.contentWindow) setTimeout(()=>{ if(activeTabId===active.id) hideSiteLoading(); },8000); }
        }
        backBtn.onclick=()=>{const t=tabs.find(x=>x.id===activeTabId);if(t?.proxyFrame)t.proxyFrame.back();};
        forwardBtn.onclick=()=>{const t=tabs.find(x=>x.id===activeTabId);if(t?.proxyFrame)t.proxyFrame.forward();};
        reloadBtn.onclick=()=>{const t=tabs.find(x=>x.id===activeTabId);if(t?.proxyFrame)t.proxyFrame.reload();};
        urlInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();const clean=cleanBrowserUrl(urlInput.value);const active=tabs.find(t=>t.id===activeTabId);if(active)active.userNavigatingUntil=performance.now()+2200;urlInput.value=clean;navigate(clean);urlInput.blur();}});
        urlInput.addEventListener('focus',()=>urlInput.select());
        urlInput.addEventListener('input',()=>{
            const clear=$('clear-url');
            if(clear) clear.style.opacity=urlInput.value ? '1' : '0';
        });
        $('clear-url').onclick=()=>{urlInput.value='';urlInput.focus();};
        let googleTranslateLoaded=false;
        let googleTranslateLoading=null;
        let translateComboObserver=null;
        let translateInjectToken=0;
        function setTranslateStatus(text,ok=false){
            const status=$('translate-status');
            if(status){status.textContent=text;status.classList.toggle('text-gray-400',ok);}
        }
        function getActiveContentDocument(){
            const tab=tabs.find(t=>t.id===activeTabId);
            if(!tab?.iframe)return null;
            try{return tab.iframe.contentDocument||tab.iframe.contentWindow?.document||null}catch{return null;}
        }
        async function injectTranslateIntoActiveFrame(lang){
            const tab=tabs.find(t=>t.id===activeTabId);
            if(!tab?.iframe){setTranslateStatus('Open a page first.');return;}
            const doc=getActiveContentDocument();
            if(!doc){setTranslateStatus('This page does not allow iframe translation.');return;}
            const win=tab.iframe.contentWindow;
            if(!win)return;
            const token=++translateInjectToken;
            try{
                let host=doc.getElementById('__vanta_google_translate');
                if(!host){
                    host=doc.createElement('div');
                    host.id='__vanta_google_translate';
                    host.style.cssText='position:fixed;left:-99999px;top:-99999px;width:1px;height:1px;overflow:hidden;z-index:2147483647;';
                    (doc.body||doc.documentElement).appendChild(host);
                }
                const callback='__vantaGoogleTranslateInit_'+token;
                win[callback]=()=>{
                    try{
                        if(win.google?.translate?.TranslateElement){
                            host.innerHTML='';
                            new win.google.translate.TranslateElement({pageLanguage:'auto',autoDisplay:false,layout:win.google.translate.TranslateElement.InlineLayout.SIMPLE},host.id);
                            setTimeout(()=>{
                                const select=doc.querySelector('.goog-te-combo');
                                if(select){select.value=lang;select.dispatchEvent(new win.Event('change',{bubbles:true}));setTranslateStatus('Translated this tab to '+lang+'.',true);}
                                else setTranslateStatus('Translate loaded for this tab.',true);
                            },350);
                        }
                    }finally{try{delete win[callback]}catch{}}
                };
                let script=doc.getElementById('__vanta_google_translate_script');
                if(!script){
                    script=doc.createElement('script');
                    script.id='__vanta_google_translate_script';
                    script.async=true;
                    script.src='https://translate.google.com/translate_a/element.js?cb='+encodeURIComponent(callback);
                    (doc.head||doc.documentElement).appendChild(script);
                }else if(win.google?.translate?.TranslateElement){
                    win[callback]();
                }
                setTranslateStatus('Applying translation…');
                setTimeout(()=>{if(token===translateInjectToken){const select=doc.querySelector('.goog-te-combo');if(select){select.value=lang;select.dispatchEvent(new win.Event('change',{bubbles:true}));}}},1200);
            }catch(error){
                console.warn('[Vanta] iframe Google Translate injection failed:',error);
                setTranslateStatus('This tab cannot be translated from the browser.');
            }
        }
        function watchTranslateSelector(){
            if(translateComboObserver)translateComboObserver.disconnect();
            const root=$('google_translate_element');
            if(!root)return;
            const bind=()=>{
                const combo=root.querySelector('.goog-te-combo');
                if(!combo||combo.dataset.vantaBound==='1')return;
                combo.dataset.vantaBound='1';
                combo.addEventListener('change',()=>{
                    if(combo.value)injectTranslateIntoActiveFrame(combo.value);
                });
            };
            bind();
            translateComboObserver=new MutationObserver(bind);
            translateComboObserver.observe(root,{childList:true,subtree:true});
        }
        window.googleTranslateElementInit=()=>{
            if(!window.google?.translate?.TranslateElement)return;
            const root=$('google_translate_element');
            if(!root)return;
            root.innerHTML='';
            new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false,layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element');
            googleTranslateLoaded=true;
            setTranslateStatus('Choose a language to translate the current tab.');
            setTimeout(watchTranslateSelector,50);
        };
        function loadGoogleTranslate(){
            if(googleTranslateLoaded||window.google?.translate?.TranslateElement)return Promise.resolve();
            if(googleTranslateLoading)return googleTranslateLoading;
            googleTranslateLoading=new Promise((resolve,reject)=>{
                const script=document.createElement('script');
                script.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                script.async=true;
                script.onload=()=>setTimeout(resolve,0);
                script.onerror=()=>reject(new Error('Google Translate failed to load'));
                document.head.appendChild(script);
            });
            return googleTranslateLoading;
        }
        const translateBtn=$('translate-btn'), translatePanel=$('translate-panel'), translateClose=$('translate-close');
        translateBtn.onclick=async()=>{
            const open=translatePanel.classList.toggle('hidden');
            translateBtn.setAttribute('aria-expanded',String(!open));
            if(!open){
                try{
                    const status=$('translate-status');
                    if(status)status.textContent='Loading Google Translate…';
                    await loadGoogleTranslate();
                    if(!googleTranslateLoaded&&window.google?.translate?.TranslateElement)window.googleTranslateElementInit();
                    setTimeout(watchTranslateSelector,100);
                }catch(e){
                    const status=$('translate-status');
                    if(status)status.textContent='Google Translate could not be loaded.';
                }
            }
        };
        translateClose.onclick=()=>{translatePanel.classList.add('hidden');translateBtn.setAttribute('aria-expanded','false');};
        document.addEventListener('click',e=>{
            if(translatePanel.classList.contains('hidden'))return;
            if(!translatePanel.contains(e.target)&&!translateBtn.contains(e.target)){
                translatePanel.classList.add('hidden');
                translateBtn.setAttribute('aria-expanded','false');
            }
        });
        
        const newTabBtn = document.getElementById('new-tab-btn');
        if (newTabBtn) newTabBtn.onclick = () => createTab('home');
        let backendStarting=false;
        let backendRetryTimer=null;
        let backendRetryDelay=1500;
        let backendGeneration=0;
        let backendRecoveryPromise=null;
        let lastBackendError='';
        function isWispMuxTaskEnded(error){
            const text=String(error?.stack||error?.message||error||'');
            return /MuxTaskEnded|Multiplexor task ended|Internal Service Worker Error/i.test(text);
        }
        function resetProxyFrames(){
            tabs.forEach(t=>{ t.proxyFrame=null; });
        }
        const ENGINE_KEY='vanta.proxy.engine';
        const TWO_JET_CDN='https://cdn.jsdelivr.net/gh/Vanta-git/Two-jet-Storage@main';
        const EPOXY_CDN='https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport@3.0.1/dist/index.js';
        const getEngine=()=>localStorage.getItem(ENGINE_KEY)==='two-jet'?'two-jet':'scramjet-v2';
        const setEngine=engine=>localStorage.setItem(ENGINE_KEY,engine==='two-jet'?'two-jet':'scramjet-v2');
        function loadScriptOnce(src,id){
            return new Promise((resolve,reject)=>{
                const existing=id&&document.getElementById(id);
                if(existing){
                    if(existing.dataset.loaded==='1') return resolve();
                    existing.addEventListener('load',()=>resolve(),{once:true});
                    existing.addEventListener('error',()=>reject(new Error('Failed to load '+src)),{once:true});
                    return;
                }
                const script=document.createElement('script');
                if(id)script.id=id;
                script.src=src;
                script.async=false;
                script.onload=()=>{script.dataset.loaded='1';resolve()};
                script.onerror=()=>reject(new Error('Failed to load '+src));
                document.head.appendChild(script);
            });
        }
        async function unregisterAllServiceWorkers(){
            if(!('serviceWorker' in navigator))return;
            const regs=await navigator.serviceWorker.getRegistrations();
            await Promise.all(regs.map(reg=>reg.unregister().catch(()=>false)));
        }
        async function waitForControllerControl(registration,timeout=8000){
            if(navigator.serviceWorker.controller){
                sessionStorage.removeItem('vanta.sw.control.reload');
                return navigator.serviceWorker.controller;
            }
            const worker=registration.waiting||registration.installing||registration.active;
            try{worker?.postMessage({type:'SKIP_WAITING'});}catch{}
            const started=Date.now();
            while(Date.now()-started<timeout){
                if(navigator.serviceWorker.controller){
                    sessionStorage.removeItem('vanta.sw.control.reload');
                    return navigator.serviceWorker.controller;
                }
                await new Promise(r=>setTimeout(r,100));
            }
            const key='vanta.sw.control.reload';
            if(!sessionStorage.getItem(key)){
                sessionStorage.setItem(key,'1');
                location.reload();
                await new Promise(()=>{});
            }
            throw new Error('Service worker did not take control of Vanta');
        }
        async function registerFreshServiceWorker(){
            if(!('serviceWorker' in navigator))throw new Error('Service workers are not supported');
            const swPath=getEngine()==='two-jet'?'./sw2.js':'./sw.js';
            const registration=await navigator.serviceWorker.register(swPath,{scope:'./',updateViaCache:'none'});
            await navigator.serviceWorker.ready;
            const worker=navigator.serviceWorker.controller || registration.active || (await navigator.serviceWorker.ready).active;
            if(!worker)throw new Error('Selected service worker is not available');
            return {registration,worker};
        }
        async function buildScramjetBackend(serviceworker){
            const CDN=TWO_JET_CDN;
            await loadScriptOnce(CDN+'/scramjet/scramjet.js','vanta-scramjet-runtime');
            await loadScriptOnce(CDN+'/controller/controller.api.js','vanta-controller-api');
            const api=window.EpoxyTransport || (await loadScriptOnce(EPOXY_CDN,'vanta-epoxy'),window.EpoxyTransport);
            const Transport=api?.default || api;
            if(typeof Transport!=='function')throw new Error('Epoxy transport is unavailable');
            if(!window.$scramjetController?.Controller)throw new Error('Scramjet controller is unavailable');
            if(!window.$scramjet)throw new Error('Scramjet runtime is unavailable');
            const wisp=await getWorkingWisp();
            const transport=new Transport({wisp});
            await transport.init();
            const instance=new window.$scramjetController.Controller({
                serviceworker,transport,
                config:{scramjetPath:CDN+'/scramjet/scramjet.js',wasmPath:CDN+'/scramjet/scramjet.wasm',injectPath:CDN+'/controller/controller.inject.js'},
                scramjetConfig:window.$scramjet.defaultConfig
            });
            await instance.wait();
            return instance;
        }
        async function buildTwoJetBackend(serviceworker){
            const CDN=TWO_JET_CDN;
            await loadScriptOnce(CDN+'/scramjet/scramjet.js','vanta-scramjet-runtime');
            await loadScriptOnce(CDN+'/controller/controller.api.js','vanta-controller-api');
            const api=window.EpoxyTransport || (await loadScriptOnce(EPOXY_CDN,'vanta-epoxy'),window.EpoxyTransport);
            const Transport=api?.default || api;
            if(typeof Transport!=='function')throw new Error('Epoxy transport is unavailable');
            if(!window.$scramjetController?.Controller)throw new Error('Two Jet controller is unavailable');
            if(!window.$scramjet)throw new Error('Two Jet Scramjet runtime is unavailable');
            const wisp=await getWorkingWisp();
            const transport=new Transport({wisp});
            await transport.init();
            const instance=new window.$scramjetController.Controller({
                serviceworker,transport,
                config:{scramjetPath:CDN+'/scramjet/scramjet.js',wasmPath:CDN+'/scramjet/scramjet.wasm',injectPath:CDN+'/controller/controller.inject.js'},
                scramjetConfig:window.$scramjet.defaultConfig
            });
            await instance.wait();
            return instance;
        }
        async function buildBackend(serviceworker){
            return getEngine()==='two-jet'
                ?buildTwoJetBackend(serviceworker)
                :buildScramjetBackend(serviceworker);
        }
        function backendName(){return getEngine()==='two-jet'?'Two Jet':'Scramjet v2'}
        async function rebuildProxyFrames(){
            if(!controller)return;
            for(const t of tabs){
                if(t.type!=='proxy'||!t.iframe)continue;
                try{
                    try{t.proxyFrame?.destroy?.()}catch{}
                    t.proxyFrame=null;
                    try{t.iframe.src='about:blank'}catch{}
                    const frame=controller.createFrame(t.iframe);
                    if(!frame||typeof frame.go!=='function')throw new Error('Proxy frame could not be created');
                    t.proxyFrame=frame;
                    const target=(t.target||t.url);
                    if(target&&/^https?:\/\//i.test(target)) await Promise.resolve(frame.go(target));
                }catch(e){
                    t.proxyFrame=null;
                    console.warn('[Vanta] Frame rebuild failed:',e);
                }
            }
        }
        async function recoverBackend(reason){
            if(backendRecoveryPromise)return backendRecoveryPromise;
            backendRecoveryPromise=(async()=>{
                console.warn('[Vanta] Recovering '+backendName()+':',reason);
                ready=false;
                controller=null;
                resetProxyFrames();
                browserLoading.classList.remove('hidden');
                browserLoading.classList.add('flex');
                try{
                    const result=await registerFreshServiceWorker();
                    controller=await buildBackend(result.worker);
                    ready=true; window.vantaLoading?.hide();
                    backendRetryDelay=1500;
                    const activeAfterRecovery=tabs.find(t=>t.id===activeTabId);
                    if(activeAfterRecovery&&activeAfterRecovery.type==='proxy'&&activeAfterRecovery.target&&/^https?:\/\//i.test(activeAfterRecovery.target)){
                        try{ await openProxyTab(activeAfterRecovery,activeAfterRecovery.target); }
                        catch(navError){ console.warn('[Vanta] Recovered tab navigation failed:',navError); }
                    }
                    console.info('[Vanta] '+backendName()+' recovered');
                    return true;
                }catch(e){
                    ready=false;
                    controller=null;
                    resetProxyFrames();
                    console.error('[Vanta] '+backendName()+' recovery failed:',e);
                    clearTimeout(backendRetryTimer); backendRetryTimer=null;
                    const active=tabs.find(t=>t.id===activeTabId);
                    if(active?.type==='proxy')showProxyError(String(e?.message||e));
                    return false;
                }finally{
                    browserLoading.classList.add('hidden');
                    browserLoading.classList.remove('flex');
                    backendRecoveryPromise=null;
                }
            })();
            return backendRecoveryPromise;
        }
        async function initBackend(){
            if(backendStarting||ready)return;
            backendStarting=true;
            try{
                const {worker}=await registerFreshServiceWorker();
                controller=await buildBackend(worker);
                ready=true;
                backendRetryDelay=1500;
                console.info('[Vanta] '+backendName()+' ready');
            }catch(e){
                ready=false;
                controller=null;
                console.error('[Vanta] '+backendName()+' startup failed:',e);
                clearTimeout(backendRetryTimer);
                backendRetryTimer=setTimeout(()=>{
                    backendRetryDelay=Math.min(backendRetryDelay*2,15000);
                    initBackend();
                },backendRetryDelay);
            }finally{backendStarting=false;}
        }
        window.addEventListener('unhandledrejection',e=>{
            if(isWispMuxTaskEnded(e.reason)){
                ready=false; controller=null; resetProxyFrames();
                clearTimeout(backendRetryTimer); backendRetryTimer=null;
                const active=tabs.find(t=>t.id===activeTabId);
                if(active?.type==='proxy')showProxyError(String(e.reason?.message||e.reason));
            }
        });
        window.addEventListener('error',e=>{
            if(isWispMuxTaskEnded(e.error||e.message)){
                ready=false; controller=null; resetProxyFrames();
                clearTimeout(backendRetryTimer); backendRetryTimer=null;
                const active=tabs.find(t=>t.id===activeTabId);
                if(active?.type==='proxy')showProxyError(String(e.message||e.error));
            }
        });
        navigator.serviceWorker?.addEventListener('message',event=>{
            if(event.data?.$controller$swrevive)recoverBackend('service worker restarted');
        });
        navigator.serviceWorker?.addEventListener('controllerchange',()=>{
            if(!ready)return;
            clearTimeout(backendRetryTimer);
            backendRetryTimer=setTimeout(()=>{
                if(navigator.serviceWorker.controller) recoverBackend('service worker controller changed');
            },500);
        });
        const SETTINGS_KEY='vanta.settings.v1';
        function settingsStatus(text,ok=false){const el=$('settings-statusbar');if(el){el.textContent=text;el.classList.toggle('ok',ok);}}
        function loadSettings(){
            let s={}; try{s=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')}catch{}
            const w=$('setting-wisp'); if(w) w.value=validWisp(s.wisp)?s.wisp:(validWisp(localStorage.getItem('vanta.lastWorkingWisp'))?localStorage.getItem('vanta.lastWorkingWisp'):DEFAULT_WISP);
            const agent=$('setting-agent'); if(agent) agent.value=s.agent||'Default';
            const search=$('setting-search'); if(search) search.value=s.search||'brave'; const eng=$('setting-engine'); if(eng) eng.value=s.engine||getEngine(); setEngine(eng?.value||getEngine());
            setSwitch($('tab-cover-toggle'),!!s.tabCover); setSwitch($('home-bg-toggle'),s.homeBg!==false); const activeForSettings=tabs.find(x=>x.id===activeTabId); const tabUrlInput=$('setting-tab-url'); if(tabUrlInput) tabUrlInput.value=activeForSettings ? (activeForSettings.url==='vanta://home'?'home':(activeForSettings.url||'')) : '';
            applyHomeBackground(s.homeBg!==false); applyTabCover(!!s.tabCover); updateSWStatus();
        }
        function saveSettings(){
            const s={wisp:$('setting-wisp').value.trim(),agent:$('setting-agent').value,search:$('setting-search').value,engine:$('setting-engine')?.value||getEngine(),tabCover:$('tab-cover-toggle').classList.contains('on'),homeBg:$('home-bg-toggle').classList.contains('on')}; setEngine(s.engine);
            localStorage.setItem(SETTINGS_KEY,JSON.stringify(s)); return s;
        }
        function setSwitch(el,on){if(el)el.classList.toggle('on',!!on)}
        function applyHomeBackground(on){const canvas=$('background-canvas');if(canvas)canvas.style.opacity=on?'1':'0';}
        function applyTabCover(on){
            let icon=document.querySelector('link[data-vanta-tab-cover]');
            if(on){if(!icon){icon=document.createElement('link');icon.rel='icon';icon.setAttribute('data-vanta-tab-cover','1');document.head.appendChild(icon);}icon.href='https://www.google.com/s2/favicons?domain=google.com&sz=64';document.title='Google';}
            else{if(icon)icon.remove();document.title='Vanta Browser';}
        }
        async function updateSWStatus(){
            const el=$('sw-status'); if(!el||!('serviceWorker' in navigator)) return;
            try{const regs=await navigator.serviceWorker.getRegistrations();const active=regs.find(r=>r.active||r.waiting||r.installing); el.textContent=active?(getEngine()==='two-jet'?'sw2.js is registered':'sw.js is registered'):'No service worker registered';}catch{el.textContent='Unable to read service worker status';}
        }
        async function unregisterSW(){
            const btn=$('unregister-sw');btn.disabled=true;btn.textContent='Unregistering…';
            try{let count=0;if('serviceWorker' in navigator){const regs=await navigator.serviceWorker.getRegistrations();for(const r of regs){if(await r.unregister())count++;}}
                ready=false;controller=null;resetProxyFrames();settingsStatus(count?`Unregistered ${count} service worker${count===1?'':'s'}. Reload Vanta to start it again.`:'No service workers were registered.',true);
                await updateSWStatus();
            }catch(e){settingsStatus('Could not unregister the active service worker.');console.error('[Vanta] Unregister SW:',e)}
            btn.disabled=false;btn.textContent='Unregister active SW';
        }
        function openSettings(){
            let t=tabs.find(x=>x.url==='vanta://settings');
            if(!t){t=createTab('home');t.appId='settings';t.title='Settings';t.icon='settings';t.type='settings';t.url='vanta://settings';t.target=t.url;}
            switchTab(t.id);loadSettings();
        }
        $('apply-tab-url').onclick=async()=>{
            const active=tabs.find(x=>x.id===activeTabId); const input=$('setting-tab-url'); if(!active||!input)return;
            const value=input.value.trim()||'home';
            try{await navigate(value); settingsStatus('URL applied to this tab.',true);}catch(e){settingsStatus('Invalid URL.');}
        };
        $('settings-btn').onclick=openSettings;
        $('test-relay').onclick=async()=>{
            const status=$('relay-status'), input=$('setting-wisp'), btn=$('test-relay');
            if(!status||!input||!btn)return;
            const u=input.value.trim();
            if(!validWisp(u)){status.textContent='Enter a valid wss:// endpoint';return;}
            btn.disabled=true; status.textContent='Testing…';
            let ws=null, settled=false, timer=null;
            const finish=(ok,msg)=>{if(settled)return;settled=true;clearTimeout(timer);try{ws?.close()}catch{}btn.disabled=false;status.textContent=msg;};
            try{
                ws=new WebSocket(u);
                timer=setTimeout(()=>finish(false,'Connection timed out'),6000);
                ws.onopen=()=>finish(true,'Connection opened');
                ws.onerror=()=>finish(false,'Connection failed');
                ws.onclose=()=>{if(!settled)finish(false,'Connection closed')};
            }catch(e){finish(false,'Connection failed');}
        };
        ['tab-cover-toggle','home-bg-toggle'].forEach(id=>$(id).onclick=()=>{const el=$(id);setSwitch(el,!el.classList.contains('on'));const st=saveSettings();if(id==='home-bg-toggle')applyHomeBackground(st.homeBg);if(id==='tab-cover-toggle')applyTabCover(st.tabCover);});$('setting-agent')?.addEventListener('change',saveSettings);
        $('setting-search')?.addEventListener('change',saveSettings);$('setting-wisp')?.addEventListener('change',()=>{
            const input=$('setting-wisp');
            if(!input)return;
            const value=input.value.trim();
            if(value && !validWisp(value)){settingsStatus('Use a valid wss:// endpoint.');return;}
            saveSettings();
            workingWispPromise=null;
            try{localStorage.removeItem('vanta.lastWorkingWisp')}catch{}
            settingsStatus('WISP endpoint saved. New proxy sessions will use it first.',true);
        });
        $('setting-engine')?.addEventListener('change',()=>{
            const next=$('setting-engine').value;
            setEngine(next); saveSettings();
            ready=false; controller=null; resetProxyFrames();
            settingsStatus((next==='two-jet'?'Two Jet':'Scramjet v2')+' selected. Reload Vanta to apply the backend.',true);
        });
        $('reset-settings').onclick=()=>{localStorage.removeItem(SETTINGS_KEY);workingWispPromise=null;loadSettings();settingsStatus('Vanta preferences restored.',true);};
        $('clear-site-data').onclick=async()=>{try{localStorage.clear();sessionStorage.clear();if('caches'in window){const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));}}catch(e){console.warn(e)}loadSettings();settingsStatus('Local storage and caches cleared.',true);};$('unregister-sw').onclick=unregisterSW;
        $('reset-backend').onclick=async()=>{const btn=$('reset-backend');btn.disabled=true;btn.textContent='Resetting…';try{try{localStorage.clear();sessionStorage.clear()}catch{}if('caches'in window){const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)))}if('serviceWorker'in navigator){const regs=await navigator.serviceWorker.getRegistrations();await Promise.all(regs.map(r=>r.unregister()))}}catch(e){console.warn('[Vanta] Backend reset:',e)}location.reload();};
        document.querySelectorAll('[data-settings-section]').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('[data-settings-section]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const target=btn.dataset.settingsSection;document.querySelectorAll('[data-settings-card]').forEach(card=>{card.style.display=card.dataset.settingsCard===target?'block':'none';});});
        const initialSettingsSection=document.querySelector('[data-settings-section].active')?.dataset.settingsSection||'connection';
        document.querySelectorAll('[data-settings-card]').forEach(card=>{card.style.display=card.dataset.settingsCard===initialSettingsSection?'block':'none';});
        document.querySelectorAll('[data-home-app]').forEach(btn=>btn.addEventListener('click',()=>openApp(btn.dataset.homeApp)));
        renderSidebar(); const initialHome=createTab('home'); navigate('vanta://home'); loadSettings(); initBackend();
        const canvas=document.getElementById('background-canvas'),gl=canvas.getContext('webgl',{antialias:true,powerPreference:'high-performance'});
        if(gl){
            const vs=`attribute vec2 position;void main(){gl_Position=vec4(position,0.0,1.0);}`;
            const fs=`precision highp float;uniform vec2 r;uniform float t;float hash21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);float a=hash21(i),b=hash21(i+vec2(1.0,0.0)),c=hash21(i+vec2(0.0,1.0)),d=hash21(i+vec2(1.0,1.0));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}float fbm(vec2 p){float v=0.0,a=0.5;v+=noise(p)*a;p=p*2.02+17.13;a*=0.5;v+=noise(p)*a;p=p*2.03+11.71;a*=0.5;v+=noise(p)*a;p=p*2.01+23.17;a*=0.5;v+=noise(p)*a;p=p*2.04+7.31;a*=0.5;v+=noise(p)*a;return v;}float field(vec2 p){float n1=fbm(p*.85+vec2(t*.018,-t*.014)),n2=fbm(p*1.7-vec2(t*.011,t*.017)),n3=fbm(p*3.1+vec2(-t*.009,t*.013));float d=n1*1.35+n2*.45+n3*.16;return d+sin(p.x*2.3+d*5.5+t*.025)*.09;}void main(){vec2 uv=gl_FragCoord.xy/r.xy,p=uv-.5;p.x*=r.x/r.y;p*=2.5;float f=field(p),scaled=f*26.0;float line=1.0-smoothstep(.015,.065,abs(fract(scaled)-.5)),soft=1.0-smoothstep(.04,.16,abs(fract(scaled)-.5));vec3 bg=vec3(.004),lc=vec3(.30),color=mix(bg,lc,line*.86+soft*.055);float v=1.0-smoothstep(.25,1.35,length(p*.42));gl_FragColor=vec4(color*(.80+v*.20),1.0);}`;
            const program=gl.createProgram(),vsShader=gl.createShader(gl.VERTEX_SHADER),fsShader=gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(vsShader,vs);gl.compileShader(vsShader);gl.attachShader(program,vsShader);
            gl.shaderSource(fsShader,fs);gl.compileShader(fsShader);gl.attachShader(program,fsShader);
            gl.linkProgram(program);gl.useProgram(program);
            const positionLocation=gl.getAttribLocation(program,'position'),buffer=gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
            gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation,2,gl.FLOAT,false,0,0);
            const rLocation=gl.getUniformLocation(program,'r'),tLocation=gl.getUniformLocation(program,'t');
            const resize=()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;gl.viewport(0,0,canvas.width,canvas.height);gl.uniform2f(rLocation,canvas.width,canvas.height);};
            window.addEventListener('resize',resize);resize();
            const render=time=>{gl.uniform1f(tLocation,time*0.001);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);requestAnimationFrame(render);};
            requestAnimationFrame(render);
        }
    })();

(() => {
    const threshold = 160;
    function checkDevTools() {
        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;
        if (widthDiff > threshold || heightDiff > threshold) {
            window.location.replace("https://www.google.com/");
        }
    }
    setInterval(checkDevTools, 500);
})();

// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>