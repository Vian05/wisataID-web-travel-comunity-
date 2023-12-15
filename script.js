// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// login
const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eyeIcon"),
  links = document.querySelectorAll(".link");
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    });
  });
});

const loginForm = document.querySelector(".form.login");
const signupForm = document.querySelector(".form.signup");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah perilaku default tautan

    if (forms.classList.contains("show-signup")) {
      loginForm.style.display = "none"; // Menyembunyikan formulir login jika signup ditampilkan
      signupForm.style.display = "block"; // Menampilkan formulir signup
    } else {
      signupForm.style.display = "none"; // Menyembunyikan formulir signup jika login ditampilkan
      loginForm.style.display = "block"; // Menampilkan formulir login
    }

    forms.classList.toggle("show-signup");
  });
});

// blog

function showBlog(blogId, cardTitle, cardPerson) {
  window.location.href =
    "blog.html?id=" + blogId + "&title=" + cardTitle + "&person=" + cardPerson;
}

let urlParams = new URLSearchParams(window.location.search);
let blogId = urlParams.get("id");
let title = urlParams.get("title");
let person = urlParams.get("person");

document.querySelector(".title-header").textContent = title;
document.querySelector(".person-header").textContent = person;

let blogContent = document.getElementById(blogId).innerHTML;

document.getElementById("blog-content").innerHTML = blogContent;
