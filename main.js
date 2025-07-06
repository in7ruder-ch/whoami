function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

const form = document.querySelector("form");
const thankYou = document.getElementById("thank-you");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  if (formData.get("_gotcha")) return; // bot trap

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    form.style.display = "none";
    thankYou.style.display = "block";
  } else {
    alert("There was a problem submitting your form. Please try again.");
  }
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});