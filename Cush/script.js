
// Close button for article
document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".closeArticle");
    closeButton.addEventListener("click", function () {
        const article = document.querySelector(".aboutCush");
        if (article) {
            article.classList.toggle("hidden");
        }
    });
});

// Rotating Box Animation
const { animate } = window.Motion;
animate(".box", { rotate: 360 }, { duration: 2, repeat: Infinity });

const box = document.querySelector(".box");
box.addEventListener("click", () => {
    animate(".box",
        { borderRadius: "50%", scale: 15 },
        { duration: 1, easing: "ease-in-out" }
    ).finished.then(() => {
        window.location.href = "index.html";
    });
});

// Log-in button
function popupFn() {
    document.getElementById("loginPopup").style.display = "block";}
function popupSubmitFn() {
    // document.getElementById("loginPopup").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
}
function popupClFn() {
    document.getElementById("loginPopup").style.display = "none";}


//Landing Page for Expenditure
function expenditurePage() {
    window.location.href = 'expendituresPage.html';
}

//Expenditure Sumup
function updateSummary() {
    const rows = document.querySelectorAll('.dataTable_b .amount');
    let total = 0;

    rows.forEach(row => {
        total += parseFloat(row.textContent);
    });

    const summaryBar = document.getElementById('output');
    summaryBar.textContent = `$${total.toFixed(2)}`; // Fixed to two decimal places
}

// Call the function to update the summary
updateSummary();
