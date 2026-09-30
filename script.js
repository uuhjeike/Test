const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/uuhjeike/BMT/main/";
const SUBJECTS = [
  { name: "বাংলা-১", tab: "gold", icon: "book" },
  { name: "ইংরেজি-১", tab: "teal", icon: "language" },
  { name: "কম্পিউটার অফিস অ্যাপ্লিকেশন-১", tab: "rust", icon: "computer" },
  { name: "ব্যবসায় গণিত ও পরিসংখ্যান", tab: "gold", icon: "calculator" },
  { name: "হিসাববিজ্ঞান নীতি ও প্রয়োগ-১", tab: "teal", icon: "coins" },
  { name: "অর্থনীতি ও বাণিজ্যিক ভূগোল", tab: "rust", icon: "globe" },
  { name: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১", tab: "gold", icon: "briefcase" },
  { name: "মার্কেটিং নীতি ও প্রয়োগ-১", tab: "teal", icon: "megaphone" },
  { name: "ডিজিটাল টেকনোলজি ইন বিজনেস-১", tab: "rust", icon: "chip" },
  { name: "হিউম্যান রিসোর্স ম্যানেজমেন্ট-১", tab: "gold", icon: "users" }
];
SUBJECTS.forEach(s => { s.slug = s.name; s.file = GITHUB_RAW_BASE + encodeURIComponent(s.name) + ".txt"; });
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
  youtube: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5l5 2.5-5 2.5v-5Z"/>'
};

function icon(name){ return `<svg viewBox="0 0 24 24">${ICONS[name]||ICONS.link}</svg>`; }
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
  else if(host.includes("youtube.com")) id = u.searchParams.get("v") || u.pathname.split("/")[2];
  id = (id||"").split("&")[0].split("?")[0];
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}
function platformInfo(url){
  let host = ""; try{ host = new URL(url).hostname.replace(/^www\./,""); }catch(e){}
  if(/youtube\.com$\vert{}youtu\.be$/.test(host)) return { label:"ইউটিউব", icon:"youtube" };
  return { label:"লিংক", icon:"link" };
}

function thumbUrl(src){
  if(!/^https?:\/\//i.test(src)) return src;
  return "https://wsrv.nl/?url=" + encodeURIComponent(src) + "&w=1200&we&q=80&output=webp";
}

const IMG_EXT_RE = /\.(jpe?g|png|gif|webp|avif|bmp)(\?.*)?$/i;
const VID_EXT_RE = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;
const AUD_EXT_RE = /\.(mp3|wav|m4a|aac|flac|ogg)(\?.*)?$/i;

function parsePosts(raw){
  const blocks = raw.split(/\n-\n/);
  const posts = [];
  for(const block of blocks){
    const lines = block.split("\n").map(l=>l.trim()).filter(l=>l && !l.startsWith("#"));
    if(!lines.length) continue;
    const post = { date:"", text:[], images:[], videos:[], audios:[], links:[], embeds:[] };
    for(const line of lines){
      const m = line.match(/^(DATE|IMG|VID|AUD|DRIVE|LINK)\s*:\s*(.+)$/i);
      if(!m){ post.text.push(line); continue; }
      const tag = m[1].toUpperCase(), val = m[2].trim();
      if(tag === "DATE") post.date = val;
      else if(tag === "IMG") post.images.push(resolveUrl(val));
      else if(tag === "VID"){
        const yt = youTubeEmbedUrl(resolveUrl(val));
        if(yt) post.embeds.push({ platform:"youtube", embedUrl: yt });
        else post.videos.push(resolveUrl(val));
      }
      else if(tag === "AUD") post.audios.push(resolveUrl(val));
      else post.links.push({ url: resolveUrl(val), label: val, kind:"link" });
    }
    post.text = post.text.join("\n");
    posts.push(post);
  }
  return posts;
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

function renderPost(post){
  const media = [...post.images.map(src=>({kind:"img",src})), ...post.videos.map(src=>({kind:"vid",src}))];
  let mediaHtml = "";
  if(media.length > 0){
    const isStack = media.length > 1;
    mediaHtml = `<div class="${isStack ? "post-media is-stack" : "post-media"}">${isStack ? `<div class="photo-stack-badge">📷 ${media.length}টি ছবি</div>` : ""}${media.map((m,i)=>`<div class="media-thumb" data-kind="${m.kind}" data-src="${escapeHtml(m.src)}" role="button" tabindex="0"><img alt="" loading="lazy"></div>`).join("")}</div>`;
  }
  return `<article class="post">
    ${post.date ? `<p class="post-date">${escapeHtml(post.date)}</p>` : ""}
    ${post.text ? `<p class="post-text">${escapeHtml(post.text)}</p>` : ""}
    ${mediaHtml}
  </article>`;
}

const shelf = document.getElementById("shelf");
SUBJECTS.forEach((s, i) => {
  s.domId = `count-${i}`;
  const card = document.createElement("div");
  card.className = "tile folder";
  card.setAttribute("role", "button");
  card.tabIndex = 0;
  card.style.setProperty("--tab", `var(--${s.tab})`);
  card.innerHTML = `<div class="folder-icon">${icon(s.icon)}</div><div class="folder-name">${escapeHtml(s.name)}</div><div class="folder-meta"><span>খুলতে ক্লিক করো</span><span class="folder-count" id="${s.domId}"></span></div>`;
  card.addEventListener("click", () => openSubject(s));
  shelf.appendChild(card);
});

const feedOverlay = document.getElementById("feedOverlay"), feedTitle = document.getElementById("feedTitle"), feedPosts = document.getElementById("feedPosts"), feedLoading = document.getElementById("feedLoading"), feedEmpty = document.getElementById("feedEmpty"), feedBody = document.getElementById("feedBody");
let currentLoadedPosts = [], renderWindowStart = 0, renderWindowEnd = 8;

function renderFeedWindow() {
  feedPosts.innerHTML = currentLoadedPosts.slice(renderWindowStart, renderWindowEnd).map(renderPost).join("");
  feedPosts.querySelectorAll(".media-thumb img").forEach(img => {
    img.src = thumbUrl(img.closest(".media-thumb").dataset.src);
  });
}

feedBody.addEventListener("scroll", () => {
  if(feedBody.scrollTop + feedBody.clientHeight >= feedBody.scrollHeight - 250 && renderWindowEnd < currentLoadedPosts.length){
    renderWindowStart = Math.max(0, renderWindowEnd - 4);
    renderWindowEnd = Math.min(currentLoadedPosts.length, renderWindowEnd + 8);
    renderFeedWindow();
  } else if(feedBody.scrollTop <= 150 && renderWindowStart > 0){
    renderWindowEnd = Math.min(currentLoadedPosts.length, renderWindowEnd - 4);
    renderWindowStart = Math.max(0, renderWindowStart - 8);
    renderFeedWindow();
    feedBody.scrollTop = 250;
  }
}, {passive:true});

async function openSubject(subject){
  feedTitle.textContent = subject.name;
  feedPosts.innerHTML = ""; feedEmpty.hidden = true; feedLoading.hidden = false;
  feedOverlay.classList.add("open"); document.body.style.overflow = "hidden";
  try{
    const res = await fetch(subject.file, {cache:"no-store"});
    if(!res.ok) throw new Error();
    currentLoadedPosts = parsePosts(await res.text());
    feedLoading.hidden = true;
    if(!currentLoadedPosts.length){ feedEmpty.hidden = false; return; }
    renderWindowStart = 0; renderWindowEnd = Math.min(8, currentLoadedPosts.length);
    renderFeedWindow();
  }catch(e){
    feedLoading.hidden = true; feedEmpty.hidden = false;
    feedEmpty.textContent = "ফাইলটি লোড করা যায়নি।";
  }
}

document.getElementById("feedClose").addEventListener("click", () => {
  feedOverlay.classList.remove("open"); document.body.style.overflow = "";
});
document.getElementById("navSocial").addEventListener("click", () => alert("যোগাযোগ প্যানেল"));

const UNSTOPPABLE_START = new Date(2026, 8, 24, 0, 0, 0);
setInterval(() => {
  const diff = Math.max(0, Date.now() - UNSTOPPABLE_START.getTime()), totalSec = Math.floor(diff/1000);
  document.getElementById("pDays").textContent = Math.floor(totalSec/86400);
  document.getElementById("pHours").textContent = String(Math.floor((totalSec%86400)/3600)).padStart(2,"0");
  document.getElementById("pMins").textContent = String(Math.floor((totalSec%3600)/60)).padStart(2,"0");
  document.getElementById("pSecs").textContent = String(totalSec%60).padStart(2,"0");
}, 1000);
