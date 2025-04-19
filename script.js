const wallpapers = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    alt: "خلفية 1"
  },
  {
    url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=500&q=80",
    alt: "خلفية 2"
  },
  {
    url: "https://images.unsplash.com/photo-1495563381401-ecfbcaaa67bd?auto=format&fit=crop&w=500&q=80",
    alt: "خلفية 3"
  }
  // أضف المزيد هنا
];

const gallery = document.getElementById("wallpaperGallery");

wallpapers.forEach(wallpaper => {
  const a = document.createElement("a");
  a.href = wallpaper.url;
  a.download = "";
  a.className = "wallpaper";

  const img = document.createElement("img");
  img.src = wallpaper.url;
  img.alt = wallpaper.alt;

  a.appendChild(img);
  gallery.appendChild(a);
});
