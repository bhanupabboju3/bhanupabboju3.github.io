/* =========================
   THEME SYSTEM
   ========================= */
const select = document.getElementById("themeSelect");
const measure = document.getElementById("measure");
const backToTop = document.getElementById("backToTop");

function applyTheme(t){
  document.body.setAttribute("data-theme", t);
  if(t === "blue"){
    select.classList.add("blue-selected");
  } else {
    select.classList.remove("blue-selected");
  }
  localStorage.setItem("theme", t);
}

function adjustWidth() {
  if (window.innerWidth <= 768) {
    select.style.width = "100%";
    return;
  }
  const text = select.options[select.selectedIndex].text;
  measure.textContent = text;
  const width = measure.offsetWidth + 40;
  select.style.width = width + "px";
}

const saved = localStorage.getItem("theme") || "dark";
applyTheme(saved);
select.value = saved;
adjustWidth();

select.addEventListener("change", () => {
  applyTheme(select.value);
  adjustWidth();
});




/* =========================
   ACCORDION
   ========================= */
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const icon = header.querySelector("span");

    const isOpen = item.classList.contains("active");

    if (isOpen) {
      item.classList.remove("active");
      content.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});




/* =========================
   BACK TO TOP LOGIC
   ========================= */
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




/* =========================
   SOCIAL SHARE SYSTEM
   ========================= */

const currentPageUrl = window.location.href;
const pageTitle = document.title;

/* WHATSAPP */
document.getElementById("shareWhatsapp").addEventListener("click", (e) => {
  e.preventDefault();

  const url = `https://wa.me/?text=${encodeURIComponent(pageTitle + " - " + currentPageUrl)}`;
  window.open(url, "_blank");
});

/* FACEBOOK */
document.getElementById("shareFacebook").addEventListener("click", (e) => {
  e.preventDefault();

  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl)}`;
  window.open(url, "_blank");
});

/* EMAIL */
document.getElementById("shareEmail").addEventListener("click", (e) => {
  e.preventDefault();

  const url = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(currentPageUrl)}`;
  window.location.href = url;
});

/* COPY LINK */
document.getElementById("copyLink").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentPageUrl);

    const btn = document.getElementById("copyLink");
    const old = btn.getAttribute("data-tooltip");

    btn.setAttribute("data-tooltip", "Copied!");

    setTimeout(() => {
      btn.setAttribute("data-tooltip", old);
    }, 1500);

  } catch {
    alert("Failed to copy link.");
  }
});

/* PRINT */
document.getElementById("printPage").addEventListener("click", () => {
  window.print();
});
