const moreButton = document.getElementById("moreButton");
const moreHidden = document.querySelector(".moreHidden");

moreButton.addEventListener("click", function () {
    if (moreHidden.style.visibility === "hidden") {
        moreHidden.style.visibility = "visible";
    } else {
        moreHidden.style.visibility = "hidden";
    }
});


function popUpBannerCopy() {
    const popUp = document.getElementById('bannerCopy');
    popUp.classList.add('bannerCopyVisible');
    setTimeout(() => {
        popUp.classList.remove('bannerCopyVisible');
    }, 2000);
}




const copyDiv = document.getElementById("copyDiv");
copyDiv.addEventListener("click", function() {
    const tempInput = document.createElement("input");
    tempInput.value = document.getElementById('copyNumber').innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    popUpBannerCopy();
});