/* =========================================================
   STUDY HUB — script.js (Fortress Mode + Photo Stack)
   ========================================================= */

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/uuhjeike/BMT/main/";

const SUBJECTS = [
  { name: "বাংলা-১",                            tab: "gold", icon: "book" },
  { name: "ইংরেজি-১",                            tab: "teal", icon: "language" },
  { name: "কম্পিউটার অফিস অ্যাপ্লিকেশন-১",        tab: "rust", icon: "computer" },
  { name: "ব্যবসায় গণিত ও পরিসংখ্যান",            tab: "gold", icon: "calculator" },
  { name: "হিসাববিজ্ঞান নীতি ও প্রয়োগ-১",         tab: "teal", icon: "coins" },
  { name: "অর্থনীতি ও বাণিজ্যিক ভূগোল",           tab: "rust", icon: "globe" },
  { name: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১",        tab: "gold", icon: "briefcase" },
  { name: "মার্কেটিং নীতি ও প্রয়োগ-১",            tab: "teal", icon: "megaphone" },
  { name: "ডিজিটাল টেকনোলজি ইন বিজনেস-১",         tab: "rust", icon: "chip" },
  { name: "হিউম্যান রিসোর্স ম্যানেজমেন্ট-১",       tab: "gold", icon: "users" },
];
SUBJECTS.forEach(s => {
  s.slug = s.name;
  s.file = GITHUB_RAW_BASE + encodeURIComponent(s.name) + ".txt";
});

const TEACHERS_FILE = GITHUB_RAW_BASE + "teachers.txt";
const SOCIAL_FILE = GITHUB_RAW_BASE + "social.txt";

const ICONS = {
  book: '<path d="M4 5c3-1.5 6-1.5 8 0v14c-2-1.5-5-1.5-8 0V5Z"/><path d="M20 5c-3-1.5-6-1.5-8 0v14c2-1.5 5-1.5 8 0V5Z"/>',
  language: '<path d="M4 6h9M8 4v2c0 5-2 8-5 10M6 9c1 2 3 4 6 5"/><path d="M13 20l4-9 4 9M14.5 17h5"/>',
  computer: '<rect x="3" y="5" width="18" height="12" rx="1"/><path d="M8 21h8M12 17v4"/>',
  calculator: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  coins: '<ellipse cx="9" cy="8" rx="6" ry="3"/><path d="M3 8v4c0 1.7 2.7 3 6 3s6-1.3 6-3V8"/><path d="M3 12v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"/><ellipse cx="17" cy="13" rx="4" ry="2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z"/>',
  briefcase: '<rect x="3" y="8" width="18" height="12" rx="1"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  megaphone: '<path d="M3 10v4l4 1v4l4-2M3 10l14-6v16L3 14M17 9c1.5 1 1.5 5 0 6"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14c2.6.4 4.5 2.5 4.5 6"/>',
  link: '<path d="M9 15l6-6M10 6l1-1a4 4 0 0 1 5.6 5.6l-1 1M14 18l-1 1A4 4 0 0 1 7.4 13.4l1-1"/>',
  drive: '<path d="M8 3h8l5 9-2.5 4.5h-13L3 12 8 3Z"/><path d="M10.5 8.5h3L16 12H8l2.5-3.5Z"/>',
  phone: '<path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3Z"/>',
  chat: '<path d="M4 4h16v11H8l-4 4V4Z"/>',
  play: '<path d="M9 6l10 6-10 6V6Z"/>',
  whatsapp: '<path d="M7 17l-3 1 1-3a8 8 0 1 1 2 2Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.5 0 1-.7.8-1.2l-.6-1.2a.6.6 0 0 0-.7-.3l-1 .3a4 4 0 0 1-2.6-2.6l.3-1a.6.6 0 0 0-.3-.7L9.2 8.2c-.5-.2-1.2.3-1.2.8Z"/>',
  facebook: '<path d="M14 21v-7h2.3l.4-3H14V9c0-.9.2-1.5 1.5-1.5H17V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H8.5v3H11v7h3Z"/>',
  youtube: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5l5 2.5-5 2.5v-5Z"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M16.2 7.6h.01"/>',
  tiktok: '<path d="M13.5 3.5v10.8a3 3 0 1 1-2.6-2.97"/><path d="M13.5 3.5c.35 2.4 2.05 4.1 4.3 4.4"/>',
  "chevron-left": '<path d="M15 6l-6 6 6 6"/>',
  "chevron-right": '<path d="M9 6l6 6-6 6"/>',
};

function icon(name){ return `<svg viewBox="0 0 24 24">${ICONS[name]||ICONS.link}</svg>`; }
function toBn(n){ return String(n).replace(/[0-9]/g, d => "০১২৩৪৫৬৭৮৯"[+d]); }

/* ---------- URL helpers ---------- */
function resolveUrl(url){
  const m = url.match(/^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^?#]+?)\/?(\?.*)?$/i);
  if(m) return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}`;
  return url;
}
function youTubeEmbedUrl(url){
  let u; try{ u = new URL(url); }catch(e){ return null; }
  const host = u.hostname.replace(/^www\.|^m\./,"");
  let id = "";
  if(host === "youtu.be") id = u.pathname.slice(1);
  else if(host === "youtube.com" || host === "youtube-nocookie.com"){
    if(u.pathname === "/watch") id = u.searchParams.get("v") || "";
    else if(u.pathname.startsWith("/shorts/")) id = u.pathname.split("/")[2] || "";
    else if(u.pathname.startsWith("/embed/")) id = u.pathname.split("/")[2] || "";
  } else return null;
  id = (id || "").split("&")[0].split("?")[0];
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}
function platformInfo(url){
  let host = ""; try{ host = new URL(url).hostname.replace(/^www\./,""); }catch(e){}
  if(/youtube\.com$|youtu\.be$/.test(host)) return { label:"ইউটিউব", icon:"youtube" };
  if(/facebook\.com$|fb\.watch$/.test(host)) return { label:"ফেসবুক", icon:"facebook" };
  if(/instagram\.com$/.test(host)) return { label:"ইনস্টাগ্রাম", icon:"instagram" };
  if(/tiktok\.com$/.test(host)) return { label:"টিকটক", icon:"tiktok" };
  if(/t\.me$|telegram\.org$/.test(host)) return { label:"টেলিগ্রাম", icon:"chat" };
  if(/wa\.me$|whatsapp\.com$/.test(host)) return { label:"হোয়াটসঅ্যাপ", icon:"whatsapp" };
  if(/drive\.google\.com$/.test(host)) return { label:"ড্রাইভ ফাইল", icon:"drive" };
  return { label:"লিংক", icon:"link" };
}

/* ---------- Photo resizer ---------- */
const PHOTO_RESIZER = true;
const THUMB_WIDTH = 1200;
function thumbUrl(src){
  if(!PHOTO_RESIZER || !/^https?:\/\//i.test(src) || /\.gif(\?.*)?$/i.test(src)) return src;
  return "https://wsrv.nl/?url=" + encodeURIComponent(src) + "&w=" + THUMB_WIDTH + "&we&q=80&output=webp";
}

const IMG_EXT_RE = /\.(jpe?g|png|gif|webp|avif|bmp)(\?.*)?$/i;
const VID_EXT_RE = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;
const AUD_EXT_RE = /\.(mp3|wav|m4a|aac|flac|ogg)(\?.*)?$/i;

function classifyBareUrl(post, rawUrl){
  const url = resolveUrl(rawUrl.trim());
  const yt = youTubeEmbedUrl(url);
  if(yt){ post.embeds.push({ platform:"youtube", embedUrl: yt }); return; }
  if(IMG_EXT_RE.test(url)){ post.images.push(url); return; }
  if(VID_EXT_RE.test(url)){ post.videos.push(url); return; }
  if(AUD_EXT_RE.test(url)){ post.audios.push(url); return; }
  const info = platformInfo(url);
  post.links.push({ url, label: info.label, kind: info.icon });
}

/* ---------- Date parsing ---------- */
const BN_MONTHS = { "জানুয়ারি":0,"ফেব্রুয়ারি":1,"মার্চ":2,"এপ্রিল":3,"মে":4,"জুন":5,"জুলাই":6,"আগস্ট":7,"সেপ্টেম্বর":8,"অক্টোবর":9,"নভেম্বর":10,"ডিসেম্বর":11 };
function parseFlexibleDate(str){
  if(!str) return null;
  const bnDigits = "০১২৩৪৫৬৭৮৯";
  const normalized = str.replace(/[০-৯]/g, d => bnDigits.indexOf(d));
  const bnMatch = normalized.match(/^(\d{1,2})\s+([^\s\d]+)\s+(\d{4})$/);
  if(bnMatch && BN_MONTHS.hasOwnProperty(bnMatch[2])){
    return new Date(Number(bnMatch[3]), BN_MONTHS[bnMatch[2]], Number(bnMatch[1])).getTime();
  }
  const d = new Date(normalized);
  return isNaN(d.getTime()) ? null : d.getTime();
}
function sortPostsLatestFirst(posts){
  return posts
    .map((post, i) => ({ post, i, ts: parseFlexibleDate(post.date) }))
    .sort((a, b) => {
      if(a.ts != null && b.ts != null) return b.ts - a.ts;
      if(a.ts != null) return -1;
      if(b.ts != null) return 1;
      return a.i - b.i;
    })
    .map(x => x.post);
}

/* ---------- Post parser (with STACK support) ---------- */
function parsePosts(raw){
  const rawLines = raw.split("\n");
  const blocks = [];
  let current = [];
  for(const line of rawLines){
    if(line.trim() === "-"){ blocks.push(current); current = []; }
    else current.push(line);
  }
  blocks.push(current);

  const urlLineRe = /^https?:\/\/\S+$/i;
  const posts = [];
  for(const block of blocks){
    const lines = block.map(l=>l.trim()).filter(l=>l.length && !l.startsWith("#"));
    if(!lines.length) continue;
    const post = { date:"", text:[], images:[], stacks:[], videos:[], audios:[], links:[], embeds:[] };
    let currentStack = null;

    for(const line of lines){
      const m = line.match(/^(DATE|IMG|VID|AUD|DRIVE|LINK|STACK|ALBUM)\s*:\s*(.+)$/i);
      if(!m){
        if(urlLineRe.test(line)){ classifyBareUrl(post, line); continue; }
        post.text.push(line);
        continue;
      }
      const tag = m[1].toUpperCase();
      const val = m[2].trim();
      if(tag === "DATE"){ post.date = val; currentStack = null; }
      else if(tag === "STACK" || tag === "ALBUM"){ currentStack = { name: val, images: [] }; post.stacks.push(currentStack); }
      else if(tag === "IMG"){ const url = resolveUrl(val); if(currentStack) currentStack.images.push(url); else post.images.push(url); }
      else if(tag === "VID"){
        currentStack = null;
        const yt = youTubeEmbedUrl(resolveUrl(val));
        if(yt) post.embeds.push({ platform:"youtube", embedUrl: yt });
        else post.videos.push(resolveUrl(val));
      }
      else if(tag === "AUD"){ currentStack = null; post.audios.push(resolveUrl(val)); }
      else if(tag === "DRIVE" || tag === "LINK"){
        currentStack = null;
        const lm = val.match(/^(\S+)\s*\((.+)\)\s*$/);
        const url = resolveUrl(lm ? lm[1] : val);
        const info = platformInfo(url);
        post.links.push({ url, label: lm ? lm[2] : (tag === "DRIVE" ? "ড্রাইভ ফাইল" : info.label), kind: tag === "DRIVE" ? "drive" : info.icon });
      }
    }
    post.stacks = post.stacks.filter(s => s.images.length);
    post.text = post.text.join("\n");
    if(post.text || post.images.length || post.stacks.length || post.videos.length || post.audios.length || post.links.length || post.embeds.length){
      posts.push(post);
    }
  }
  return posts;
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ---------- Rendering ---------- */
function mediaThumbHtml(kind, src, index){
  const s = escapeHtml(src);
  if(kind === "img"){
    return `<div class="media-thumb is-img" data-kind="img" data-src="${s}" role="button" tabindex="0"><img alt="" decoding="async"></div>`;
  }
  return `<div class="media-thumb is-vid" data-kind="vid" data-src="${s}" role="button" tabindex="0"><video muted playsinline preload="metadata"></video><div class="media-play">${icon("play")}</div></div>`;
}
function embedHtml(e){
  const id = (e.embedUrl.split("/embed/")[1] || "").replace(/[^\w-]/g, "");
  const cover = id ? `<img src="https://i.ytimg.com/vi/${escapeHtml(id)}/hqdefault.jpg" alt="" decoding="async" loading="lazy">` : "";
  return `<div class="post-embed" data-embed="${escapeHtml(e.embedUrl)}" role="button" tabindex="0">${cover}<div class="media-play">${icon("play")}</div></div>`;
}
function renderStack(stack){
  const images = stack.images;
  if(!images.length) return "";
  if(images.length === 1) return `<div class="post-media">${mediaThumbHtml("img", images[0], 0)}</div>`;
  const thumbs = images.map((src, i) => `<span class="stack-data" data-src="${escapeHtml(src)}" data-index="${i}"></span>`).join("");
  return `<div class="photo-stack" data-count="${images.length}">
    <div class="stack-visual">
      <div class="stack-back back-1"></div>
      <div class="stack-back back-2"></div>
      <div class="stack-frame" data-index="0">
        <img class="stack-current" alt="" decoding="async" src="${escapeHtml(thumbUrl(images[0]))}" data-src="${escapeHtml(images[0])}">
        <span class="stack-badge start">শুরু</span>
        <span class="stack-badge end" hidden>শেষ</span>
      </div>
    </div>
    <div class="stack-bar">
      <button class="stack-btn stack-prev" type="button" disabled>${icon("chevron-left")}</button>
      <span class="stack-counter">১ / ${toBn(images.length)}</span>
      <button class="stack-btn stack-next" type="button">${icon("chevron-right")}</button>
    </div>
    <div class="stack-progress"><div class="stack-progress-fill" style="width:${100/images.length}%"></div></div>
    ${stack.name ? `<p class="stack-name">${escapeHtml(stack.name)}</p>` : ""}
    ${thumbs}
  </div>`;
}
function renderPost(post){
  const mediaParts = [];
  (post.stacks || []).forEach(stack => mediaParts.push(renderStack(stack)));
  if(post.images.length === 1) mediaParts.push(`<div class="post-media">${mediaThumbHtml("img", post.images[0], 0)}</div>`);
  else if(post.images.length > 1) mediaParts.push(renderStack({ name:"", images: post.images }));
  if(post.videos.length) mediaParts.push(`<div class="post-media">${post.videos.map((src, i) => mediaThumbHtml("vid", src, i)).join("")}</div>`);
  const embedsHtml = (post.embeds || []).map(embedHtml).join("");
  const audioHtml = post.audios.map(src => `<div class="post-audio" data-src="${escapeHtml(src)}" role="button" tabindex="0"><span class="post-audio-icon">${icon("play")}</span><span class="post-audio-label">অডিও শুনতে ক্লিক করো</span></div>`).join("");
  const linksHtml = post.links.length ? `<div class="post-links">${post.links.map(l => `<a class="post-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${icon(l.kind)}${escapeHtml(l.label)}</a>`).join("")}</div>` : "";
  return `<article class="post">
    ${post.date ? `<p class="post-date">${escapeHtml(post.date)}</p>` : ""}
    ${post.text ? `<p class="post-text">${escapeHtml(post.text)}</p>` : ""}
    ${mediaParts.join("")}${embedsHtml}${audioHtml}${linksHtml}
  </article>`;
}

/* ---------- Lazy media observer ---------- */
let mediaObserver = null;
function sizeThumbToMedia(thumb, w, h){
  if(!w || !h) return;
  thumb.style.aspectRatio = w + " / " + h;
  if(thumb.dataset.kind === "img") thumb.style.maxWidth = w + "px";
}
function loadThumbMedia(thumb){
  const media = thumb.querySelector("img, video");
  if(!media || media.dataset.started) return;
  media.dataset.started = "1";
  const src = thumb.dataset.src;
  if(media.tagName === "IMG"){
    const fast = thumbUrl(src);
    let usedOriginal = (fast === src);
    let timer = 0;
    const useOriginal = () => { if(usedOriginal) return false; usedOriginal = true; clearTimeout(timer); media.src = src; return true; };
    media.addEventListener("load", () => { clearTimeout(timer); sizeThumbToMedia(thumb, media.naturalWidth, media.naturalHeight); });
    media.addEventListener("error", () => { if(!useOriginal()) thumb.classList.add("failed"); });
    if(!usedOriginal) timer = setTimeout(() => { if(!media.naturalWidth) useOriginal(); }, 9000);
    media.src = fast;
  } else {
    media.addEventListener("loadedmetadata", () => sizeThumbToMedia(thumb, media.videoWidth, media.videoHeight), { once:true });
    media.addEventListener("error", () => thumb.classList.add("failed"), { once:true });
    media.src = src + "#t=0.1";
  }
}
function ensureMediaObserver(){
  if(mediaObserver) return;
  mediaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      mediaObserver.unobserve(entry.target);
      loadThumbMedia(entry.target);
    });
  }, { root: null, rootMargin: "700px 0px" });
}
function observeMediaIn(rootEl){
  ensureMediaObserver();
  rootEl.querySelectorAll(".media-thumb").forEach(t => mediaObserver.observe(t));
}

/* ---------- Virtual scroll (Fortress Mode) ---------- */
const FeedWindow = {
  container: null, posts: [], slots: [], heights: [], rendered: new Set(), buffer: 1500, active: false,
  estimate(post){
    let h = 80;
    if(post.text) h += Math.min(post.text.length * 0.55, 600);
    h += post.images.length * 300;
    h += (post.stacks || []).reduce((s, st) => s + 340 + (st.images.length > 1 ? 90 : 0), 0);
    h += post.videos.length * 300;
    h += (post.embeds || []).length * 220;
    h += post.audios.length * 70;
    h += post.links.length * 55;
    return Math.max(h, 120);
  },
  init(container, posts){
    this.container = container; this.posts = posts;
    this.rendered.clear(); this.slots = []; this.heights = [];
    container.innerHTML = "";
    const frag = document.createDocumentFragment();
    posts.forEach((post, i) => {
      const slot = document.createElement("div");
      slot.className = "post-slot";
      slot.dataset.index = i;
      const est = this.estimate(post);
      slot.innerHTML = `<div class="post-placeholder" style="height:${est}px"></div>`;
      this.heights[i] = est;
      frag.appendChild(slot);
      this.slots.push(slot);
    });
    container.appendChild(frag);
    this.active = true;
    this.update();
  },
  update(){
    if(!this.active || !this.container) return;
    const scrollTop = this.container.scrollTop;
    const vh = this.container.clientHeight;
    const top = scrollTop - this.buffer;
    const bottom = scrollTop + vh + this.buffer;
    let offset = 0;
    for(let i = 0; i < this.slots.length; i++){
      const h = this.heights[i];
      const inWindow = (offset + h > top) && (offset < bottom);
      if(inWindow) this.renderSlot(i);
      else this.unrenderSlot(i);
      offset += h;
    }
  },
  renderSlot(i){
    if(this.rendered.has(i)) return;
    const slot = this.slots[i];
    slot.innerHTML = renderPost(this.posts[i]);
    this.rendered.add(i);
    requestAnimationFrame(() => { if(this.rendered.has(i)) this.heights[i] = slot.offsetHeight; });
    observeMediaIn(slot);
  },
  unrenderSlot(i){
    if(!this.rendered.has(i)) return;
    const slot = this.slots[i];
    const h = slot.offsetHeight;
    this.heights[i] = h;
    slot.innerHTML = `<div class="post-placeholder" style="height:${h}px"></div>`;
    this.rendered.delete(i);
  },
  destroy(){ this.active = false; this.container = null; this.slots = []; this.rendered.clear(); }
};

const feedBodyEl = document.getElementById("feedBody");
let scrollTicking = false;
feedBodyEl.addEventListener("scroll", () => {
  if(!FeedWindow.active) return;
  if(scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => { scrollTicking = false; FeedWindow.update(); });
}, { passive: true });

/* ---------- Shelf ---------- */
const shelf = document.getElementById("shelf");
const postCache = {};
SUBJECTS.forEach((s, i) => {
  s.domId = `count-${i}`;
  const card = document.createElement("div");
  card.className = "tile folder";
  card.setAttribute("role", "button");
  card.tabIndex = 0;
  card.style.setProperty("--tab", `var(--${s.tab})`);
  card.innerHTML = `<div class="folder-icon">${icon(s.icon)}</div><div class="folder-name">${escapeHtml(s.name)}</div><div class="folder-meta"><span>খুলতে ক্লিক করো</span><span class="folder-count" id="${s.domId}"></span></div>`;
  card.addEventListener("click", () => openSubject(s));
  card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openSubject(s); } });
  shelf.appendChild(card);
});

/* ---------- Feed panel ---------- */
const feedOverlay = document.getElementById("feedOverlay");
const feedTitle = document.getElementById("feedTitle");
const feedKicker = document.getElementById("feedKicker");
const feedPosts = document.getElementById("feedPosts");
const feedLoading = document.getElementById("feedLoading");
const feedEmpty = document.getElementById("feedEmpty");
const feedBody = document.getElementById("feedBody");

let feedToken = 0;
async function openFeed({kicker, title, emptyText, loader}){
  const token = ++feedToken;
  feedKicker.textContent = kicker;
  feedTitle.textContent = title;
  feedPosts.innerHTML = "";
  feedEmpty.hidden = true;
  feedLoading.hidden = false;
  feedOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  feedBody.scrollTop = 0;
  FeedWindow.destroy();
  try{
    const loaded = await loader();
    if(token !== feedToken) return;
    const posts = sortPostsLatestFirst(loaded);
    feedLoading.hidden = true;
    if(!posts.length){
      feedEmpty.hidden = false;
      feedEmpty.textContent = emptyText || "এখনো কোনো পোস্ট নেই।";
      return;
    }
    FeedWindow.init(feedPosts, posts);
  }catch(err){
    if(token !== feedToken) return;
    feedLoading.hidden = true;
    feedEmpty.hidden = false;
    feedEmpty.textContent = (err instanceof TypeError) ? "ইন্টারনেট সংযোগে সমস্যা হচ্ছে।" : (err.message || emptyText || "লোড করা যায়নি।");
  }
}
function openSubject(subject){
  openFeed({
    kicker: "বিষয়", title: subject.name,
    async loader(){
      let posts = postCache[subject.name];
      if(!posts){
        const res = await fetch(subject.file, {cache:"no-store"});
        if(!res.ok) throw new Error("GitHub রিপোতে এই বিষয়ের ফাইল পাওয়া যাচ্ছে না।");
        const raw = await res.text();
        posts = parsePosts(raw);
        postCache[subject.name] = posts;
        const countEl = document.getElementById(subject.domId);
        if(countEl) countEl.textContent = posts.length ? `${posts.length} পোস্ট` : "";
      }
      return posts;
    }
  });
}
let socialCache = null;
function openSocialFeed(){
  openFeed({
    kicker: "যোগাযোগ", title: "সবার সাথে যুক্ত থাকো",
    async loader(){
      if(!socialCache){
        const res = await fetch(SOCIAL_FILE, {cache:"no-store"});
        if(!res.ok) throw new Error("social.txt পাওয়া যাচ্ছে না।");
        socialCache = parsePosts(await res.text());
      }
      return socialCache;
    }
  });
}
document.getElementById("navSocial").addEventListener("click", openSocialFeed);

function closeFeed(){
  feedToken++;
  FeedWindow.destroy();
  if(mediaObserver){ mediaObserver.disconnect(); mediaObserver = null; }
  feedOverlay.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => { if(!feedOverlay.classList.contains("open")) feedPosts.innerHTML = ""; }, 350);
}
document.getElementById("feedClose").addEventListener("click", closeFeed);
feedOverlay.addEventListener("click", e => { if(e.target === feedOverlay) closeFeed(); });

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxStage = document.getElementById("lightboxStage");
let lightboxToken = 0;
function openLightbox(kind, src, preview){
  const s = escapeHtml(src);
  const token = ++lightboxToken;
  if(kind === "img"){
    const first = (preview && preview !== src) ? preview : src;
    lightboxStage.innerHTML = `<img src="${escapeHtml(first)}" alt="" decoding="async"><a class="lightbox-original" href="${s}" target="_blank" rel="noopener">মূল ছবি নতুন ট্যাবে দেখো</a>`;
    const im = lightboxStage.querySelector("img");
    let triedOriginal = (first === src);
    im.addEventListener("error", () => {
      if(token !== lightboxToken) return;
      if(!triedOriginal){ triedOriginal = true; im.src = src; return; }
      im.outerHTML = `<p class="lightbox-msg">ছবিটা লোড করা যায়নি।</p>`;
    });
    if(first !== src){ const hi = new Image(); hi.onload = () => { if(token !== lightboxToken) return; const cur = lightboxStage.querySelector("img"); if(cur) cur.src = src; }; hi.src = src; }
  }
  else if(kind === "vid") lightboxStage.innerHTML = `<video src="${s}" controls autoplay playsinline></video>`;
  else if(kind === "aud") lightboxStage.innerHTML = `<audio src="${s}" controls autoplay></audio>`;
  else return;
  lightbox.classList.add("open");
}
function closeLightbox(){
  lightboxToken++;
  const playing = lightboxStage.querySelector("video, audio");
  if(playing){ try{ playing.pause(); }catch(e){} }
  lightbox.classList.remove("open");
  lightboxStage.innerHTML = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox || e.target === lightboxStage) closeLightbox(); });
document.addEventListener("keydown", e => {
  if(e.key !== "Escape") return;
  if(lightbox.classList.contains("open")) closeLightbox();
  else if(feedOverlay.classList.contains("open")) closeFeed();
});

/* ---------- Stack navigation ---------- */
function handleStackNav(btn){
  const stack = btn.closest(".photo-stack");
  if(!stack) return;
  const data = [...stack.querySelectorAll(".stack-data")].map(el => el.dataset.src);
  const frame = stack.querySelector(".stack-frame");
  const img = frame.querySelector(".stack-current");
  let index = parseInt(frame.dataset.index, 10) || 0;
  if(btn.classList.contains("stack-next")) index = Math.min(index + 1, data.length - 1);
  else index = Math.max(index - 1, 0);
  frame.dataset.index = index;
  img.src = thumbUrl(data[index]);
  img.dataset.src = data[index];
  stack.querySelector(".stack-counter").textContent = `${toBn(index + 1)} / ${toBn(data.length)}`;
  stack.querySelector(".stack-prev").disabled = index === 0;
  stack.querySelector(".stack-next").disabled = index === data.length - 1;
  stack.querySelector(".stack-progress-fill").style.width = `${((index + 1) / data.length) * 100}%`;
  const startBadge = frame.querySelector(".stack-badge.start");
  const endBadge = frame.querySelector(".stack-badge.end");
  if(startBadge) startBadge.hidden = index !== 0;
  if(endBadge) endBadge.hidden = index !== data.length - 1;
  stack.querySelectorAll(".stack-back").forEach(b => { b.style.opacity = index < data.length - 1 ? "1" : "0"; });
}

/* ---------- Feed click handling ---------- */
function playEmbed(el){
  const url = el.dataset.embed;
  if(!url) return;
  el.removeAttribute("data-embed"); el.removeAttribute("role"); el.removeAttribute("tabindex");
  el.innerHTML = `<iframe src="${escapeHtml(url)}?autoplay=1&rel=0&playsinline=1" title="ভিডিও" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
feedPosts.addEventListener("click", e => {
  const stackBtn = e.target.closest(".stack-btn");
  if(stackBtn){ handleStackNav(stackBtn); return; }
  const stackFrame = e.target.closest(".stack-frame");
  if(stackFrame){ const img = stackFrame.querySelector(".stack-current"); openLightbox("img", img.dataset.src, img.src); return; }
  const thumb = e.target.closest(".media-thumb");
  if(thumb){ const im = thumb.querySelector("img"); const preview = (im && im.naturalWidth) ? (im.currentSrc || im.src) : ""; openLightbox(thumb.dataset.kind, thumb.dataset.src, preview); return; }
  const aud = e.target.closest(".post-audio");
  if(aud){ openLightbox("aud", aud.dataset.src); return; }
  const emb = e.target.closest(".post-embed[data-embed]");
  if(emb){ playEmbed(emb); }
});
feedPosts.addEventListener("keydown", e => {
  if(e.key !== "Enter" && e.key !== " ") return;
  const t = e.target;
  if(t && t.getAttribute && t.getAttribute("role") === "button"){ e.preventDefault(); t.click(); }
});

/* ---------- Teachers ---------- */
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
function bnToEn(str){ return str.replace(/[০-৯]/g, d => BN_DIGITS.indexOf(d)); }
function parseTeacherRow(row){
  if(row.includes("|")){
    const [name="", subject="", phone="", role=""] = row.split("|").map(p=>p.trim());
    return { name, subject, phone: bnToEn(phone), role };
  }
  const flat = bnToEn(row);
  const pm = flat.match(/\+?\d[\d\s().-]{6,}\d/);
  const phone = pm ? pm[0].trim() : "";
  const name = (pm ? flat.replace(pm[0], "") : row).replace(/[\s\-–—:,;|()]+$/, "").replace(/^[\s\-–—:,;|]+/, "").trim();
  const origName = pm ? row.slice(0, flat.indexOf(pm[0])).replace(/[\s\-–—:,;|()]+$/, "").trim() : name;
  return { name: origName || name, subject:"", phone, role:"" };
}
function waLink(phone){
  const digits = phone.replace(/[^\d]/g, "");
  const local = digits.startsWith("880") ? digits : digits.startsWith("0") ? "88"+digits : "880"+digits;
  return `https://wa.me/${local}`;
}
async function loadTeachers(){
  const grid = document.getElementById("teacherGrid");
  const tabs = ["gold","teal","rust"];
  try{
    const res = await fetch(TEACHERS_FILE, {cache:"no-store"});
    if(!res.ok) throw new Error();
    const raw = await res.text();
    const rows = raw.split("\n").map(l=>l.trim()).filter(l=>l && !l.startsWith("#"));
    if(!rows.length) throw new Error();
    grid.innerHTML = rows.map((row,i)=>{
      const { name, subject, phone, role } = parseTeacherRow(row);
      const tab = tabs[i % tabs.length];
      const tel = phone.replace(/[^\d+]/g, "");
      const inner = `<div class="folder-icon">${icon("users")}</div><div class="folder-name">${escapeHtml(name)}</div><div class="folder-meta"><span>${escapeHtml(subject || role || "যোগাযোগ")}</span>${role ? `<span class="folder-count">${escapeHtml(role)}</span>` : ""}</div>`;
      const main = tel ? `<a class="tile-main" href="tel:${escapeHtml(tel)}">${inner}</a>` : `<div class="tile-main">${inner}</div>`;
      const actions = tel ? `<div class="tile-actions"><a href="tel:${escapeHtml(tel)}">${icon("phone")}</a><a href="${waLink(phone)}" target="_blank" rel="noopener">${icon("whatsapp")}</a></div>` : "";
      return `<div class="tile teacher-tile" style="--tab:var(--${tab})">${main}${actions}</div>`;
    }).join("");
  }catch(err){
    grid.innerHTML = `<a class="tile tile-ghost" href="https://github.com/uuhjeike/BMT/edit/main/teachers.txt" target="_blank" rel="noopener"><div class="folder-icon">${icon("users")}</div><div class="folder-name">teachers.txt-এ নাম | বিষয় | নম্বর | Sir/Madam লিখো</div></a>`;
  }
}
loadTeachers();

/* ---------- Unstoppable ---------- */
const UNSTOPPABLE_START = new Date(2026, 8, 24, 0, 0, 0);
const pDays = document.getElementById("pDays");
const pHours = document.getElementById("pHours");
const pMins = document.getElementById("pMins");
const pSecs = document.getElementById("pSecs");
function pad(n){ return String(n).padStart(2,"0"); }
function setText(el, v){ if(el.textContent !== v) el.textContent = v; }
function updatePulse(){
  const diff = Math.max(0, Date.now() - UNSTOPPABLE_START.getTime());
  const totalSec = Math.floor(diff/1000);
  setText(pDays, String(Math.floor(totalSec/86400)));
  setText(pHours, pad(Math.floor((totalSec%86400)/3600)));
  setText(pMins, pad(Math.floor((totalSec%3600)/60)));
  setText(pSecs, pad(totalSec%60));
}
if(pDays){ updatePulse(); setInterval(updatePulse, 1000); }