// THEME SYSTEM
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

// ACCORDION
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

// BACK TO TOP LOGIC
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



// SOCIAL SHARE
const shareButtons = document.querySelectorAll(".share-btn");
const pageUrl = window.location.href;
const pageTitle = document.title;

shareButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    switch(action) {
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle + " " + pageUrl)}`,
          "_blank"
        );
        break;

      case "facebook":
		const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;

		const popup = window.open(fbShareUrl, "_blank", "width=600,height=500");

		// fallback if popup blocked
		if (!popup) {
			window.location.href = fbShareUrl;
		}
		break;

      case "email":
        window.location.href =
          `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(pageUrl)}`;
        break;

      case "copy":
        navigator.clipboard.writeText(pageUrl).then(() => {
          btn.style.background = "var(--primary)";
          btn.style.color = "#fff";
          setTimeout(() => {
            btn.style.background = "";
            btn.style.color = "";
          }, 900);
        });
        break;

      case "print":
        window.print();
        break;
    }
  });
});
