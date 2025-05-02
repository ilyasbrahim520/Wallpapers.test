document.getElementById("toggle-mode").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    // تغيير الأيقونة بين القمر والشمس
    const icon = document.querySelector("#toggle-mode .mode-icon");
    const span = document.querySelector("#toggle-mode span");

    if (document.body.classList.contains("light-mode")) {
        icon.src = "images/sun.svg"; // استبدال الأيقونة إلى الشمس في الوضع الفاتح
        span.textContent = "Switch to Dark Mode"; // تغيير النص عند التبديل
    } else {
        icon.src = "images/moon.svg"; // العودة إلى أيقونة القمر في الوضع الداكن
        span.textContent = "Switch to Light Mode"; // تغيير النص عند التبديل
    }
});

document.getElementById("browse-btn").addEventListener("click", function () {
    this.style.display = "none"; // إخفاء زر الاستعراض
    document.getElementById("choice-buttons").style.display = "flex"; // إظهار الزرين الجديدين
});