const moreButton = document.getElementById("moreButton");
const moreHidden = document.querySelector(".moreHidden");

moreButton.addEventListener("click", function () {
    if (moreHidden.style.display === "none") {
        moreHidden.style.display = "flex";
    } else {
        moreHidden.style.display = "none";
    }
});


function popUpBannerCopy() {
    const popUp = document.getElementById('bannerCopy');
    popUp.classList.add('bannerCopyVisible');
    setTimeout(() => {
        popUp.classList.remove('bannerCopyVisible');
    }, 4000);
}

const copyDiv = document.getElementById("copyDiv");
copyDiv.addEventListener("click", function () {
    const tempInput = document.createElement("input");
    tempInput.value = document.getElementById('copyNumber').innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    popUpBannerCopy();
});

const openNavButton = document.getElementById("openNavButton");
const nav2 = document.getElementById("nav2");

function swipeContacts() {
    if (nav2.style.bottom === "-1400px") {
        nav2.style.bottom = "-500px";
    } else {
        nav2.style.bottom = "-1400px";
    }

    if (openNavButton.style.display === 'block') {
        openNavButton.classList.add('openNavButtonArrow');
        openNavButton.style.display = 'inline-block';
    } else {
        openNavButton.classList.remove('openNavButtonArrow');
        openNavButton.style.display = 'block';
    }
}
openNavButton.addEventListener("click", function () {
    swipeContacts();
});

function visibilitySwipeButton() {
    if (window.innerWidth > 1292) {
        document.getElementById('openNavButton').style.visibility = 'hidden';
    } else {
        document.getElementById('openNavButton').style.visibility = 'visible';
    }
}



window.addEventListener('load', () => {
    visibilitySwipeButton();
});
window.addEventListener('resize', () => {
    visibilitySwipeButton();
});