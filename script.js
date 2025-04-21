const wallpapers = [
  {
    thumb: "images/pagani-zonda-r-thumb.jpeg",
    full: "images/pagani-zonda-r.jpeg",
    alt: "Pagani Zonda R"
  },
  {
    thumb: "images/porsche-911-front-thumb.jpeg",
    full: "images/porsche-911-front.jpeg",
    alt: "Sweet Porsche 911 front side"
  },
  {
    thumb: "images/supertrofeo-evo2-thumb.jpeg",
    full: "images/supertrofeo-evo2.jpeg",
    alt: "Candy SuperTrofeo EVO2"
  },
  {
    thumb: "images/porsche-911-left-thumb.jpeg",
    full: "images/porsche-911-left.jpeg",
    alt: "Sweet Porsche 911 left side"
  },
  {
    thumb: "images/koenigsegg-agera-rs-thumb.jpeg",
    full: "images/koenigsegg-agera-rs.jpeg",
    alt: "Koenigsegg Agera RS"
  }
];

const gallery = document.getElementById("wallpaperGallery");

// إنشاء عناصر الصور المصغرة
wallpapers.forEach(wallpaper => {
  const a = document.createElement("a");
  a.href = wallpaper.full;
  a.download = "";
  a.className = "wallpaper";

  const img = document.createElement("img");
  img.src = wallpaper.thumb;
  img.alt = wallpaper.alt;
  img.title = wallpaper.alt; // هذا السطر تمت إضافته لتحسين SEO
  img.loading = "lazy";

  a.appendChild(img);
  gallery.appendChild(a);
});

const toggleButton = document.getElementById("toggleMode");

// الوضع الافتراضي بناءً على تفضيل المستخدم
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
  toggleButton.textContent = "Light Mode";
} else {
  document.body.classList.add("light");
  toggleButton.textContent = "Dark Mode";
}

// تبديل الوضع عند الضغط على الزر
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    toggleButton.textContent = "Dark Mode";
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    toggleButton.textContent = "Light Mode";
  }
});

// إخفاء زر الوضع عند التمرير لأسفل وإظهاره عند التمرير لأعلى
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > 50) {
    toggleButton.style.opacity = "0";
    toggleButton.style.pointerEvents = "none";
  } else {
    toggleButton.style.opacity = "1";
    toggleButton.style.pointerEvents = "auto";
  }
  lastScroll = currentScroll;
});