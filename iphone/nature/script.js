const wallpapers = [
  {
    thumb: "../../images/green-beach-thumb.jpg",
    full: "../../images/green-beach.jpg",
    alt: "Green Beach - by W-ilyas"

  },
  {
    thumb: "../../images/swimming-pool-thumb.jpg",
    full: "../../images/swimming-pool.jpg",
    alt: "Swimming pool among palm trees Wallpaper - by W-ilyas"

  },
  {
    thumb: "../../images/ice-lake-thumb.jpg",
    full: "../../images/ice-lake.jpg",
    alt: "Ice Lake Wallpaper - by W-ilyas"

  },
  {
    thumb: "../../images/autumn-tree-mountains-thumb.jpg",
    full: "../../images/autumn-tree-mountains.jpg",
    alt: "Autumn tree between the mountains Wallpaper - by W-ilyas"

  },
  {
    thumb: "../../images/iceland-mountains-thumb.jpg",
    full: "../../images/iceland-mountains.jpg",
    alt: "Iceland Mountains Wallpaper - by W-ilyas"

  },
  {
    thumb: "../../images/rocks-sea-purple-sky-thumb.jpg",
    full: "../../images/rocks-sea-purple-sky.jpg",
    alt: "Rocks in the sea under a purple sky Wallpaper - by W-ilyas"

  },
  {
    thumb: "../../images/blue-lake-mountains-thumb.jpg",
    full: "../../images/blue-lake-mountains.jpg",
    alt: "Blue lake between two mountains Wallpaper - by W-ilyas"

  },
  {
    thumb: "../../images/path-green-trees-thumb.jpg",
    full: "../../images/path-green-trees.jpg",
    alt: "A path between green trees Wallpaper - by W-ilyas"

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