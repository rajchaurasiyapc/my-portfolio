// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email button
const copyBtn = document.getElementById("copy");
const mail = document.getElementById("mail");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(mail.textContent.trim());
    copyBtn.textContent = "Copied";
  } catch (err) {
    copyBtn.textContent = "Copy failed";
  }
  setTimeout(() => (copyBtn.textContent = "Copy email"), 2000);
});
