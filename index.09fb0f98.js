document.getElementById("thumbs").addEventListener("click",function(e){if("IMG"===e.target.tagName||"A"===e.target.tagName){e.preventDefault();var t=document.getElementById("largeImg");"IMG"===e.target.tagName?t.src=e.target.parentElement.href:"A"===e.target.tagName&&(t.src=e.target.href)}});
//# sourceMappingURL=index.09fb0f98.js.map
