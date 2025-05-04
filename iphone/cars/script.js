const wallpapers = [
  {
    thumb: "../../images/pagani-zonda-r-thumb.jpeg",
    full: "../../images/pagani-zonda-r.jpeg",
    alt: "Pagani Zonda R - by W-ilyas"
  },
  {
    thumb: "../../images/porsche-911-front-thumb.jpeg",
    full: "../../images/porsche-911-front.jpeg",
    alt: "Sweet Porsche 911 front side - by W-ilyas"
  },
  {
    thumb: "../../images/supertrofeo-evo2-thumb.jpeg",
    full: "../../images/supertrofeo-evo2.jpeg",
    alt: "Candy SuperTrofeo EVO2 - by W-ilyas"
  },
  {
    thumb: "../../images/porsche-911-left-thumb.jpeg",
    full: "../../images/porsche-911-left.jpeg",
    alt: "Sweet Porsche 911 left side - by W-ilyas"
  },
  {
    thumb: "../../images/koenigsegg-agera-rs-thumb.jpeg",
    full: "../../images/koenigsegg-agera-rs.jpeg",
    alt: "Koenigsegg Agera RS - by W-ilyas"
  },
  {
    thumb: "../../images/lamborghini-svj-front-thumb.jpeg",
    full: "../../images/lamborghini-svj-front.jpeg",
    alt: "White Lamborghini SVJ front side"
  },
  {
    thumb: "../../images/lamborghini-svj-back-thumb.jpeg",
    full: "../../images/lamborghini-svj-back.jpeg",
    alt: "White Lamborghini SVJ back side"
  },
  {
    thumb: "../../images/pagani-zonda-r-back-thumb.jpeg",
    full: "../../images/pagani-zonda-r-back.jpeg",
    alt: "Pagani Zonda R back side"
  },
  {
    thumb: "../../images/bmw-m4-green-thumb.jpeg",
    full: "../../images/bmw-m4-green.jpeg",
    alt: "Green BMW M4"
  },
  {
    thumb: "../../images/bmw-m4-yellow-thumb.jpeg",
    full: "../../images/bmw-m4-yellow.jpeg",
    alt: "Yellow BMW M4"
  },
  {
    thumb: "../../images/black-mercedes-thumb.jpeg",
    full: "../../images/black-mercedes.jpeg",
    alt: "Black Mercedes"
  },
  {
    thumb: "../../images/black-bmw-m8-thumb.jpeg",
    full: "../../images/black-bmw-m8.jpeg",
    alt: "Black Bmw M8"
  },
  {
    thumb: "../../images/m2-white-thumb.jpeg",
    full: "../../images/m2-white.jpeg",
    alt: "White Bmw M2"
  },
  {
    thumb: "../../images/black-bmw-m3-thumb.jpeg",
    full: "../../images/black-bmw-m3.jpeg",
    alt: "Black Bmw M3"
  },
  {
    thumb: "../../images/gray-porsche-back-side-thumb.jpeg",
    full: "../../images/gray-porsche-back-side.jpeg",
    alt: "Gray Porsche From The Back Side"
  },
  {
    thumb: "../../images/gray-porsche-angel-side-thumb.jpeg",
    full: "../../images/gray-porsche-angel-side.jpeg",
    alt: "../../Gray Porsche From The angel Side"

  },
  {
    thumb: "../../images/supra-yellow-mk5-thumb.jpg",
    full: "../../images/supra-yellow-mk5.jpg",
    alt: "Yellow Supra Mk5 Wallpaper - by W-ilyas"
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
  img.title = wallpaper.alt; // تحسين SEO
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