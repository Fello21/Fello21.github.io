const smoothScrollLinks=document.querySelectorAll(".navig__list-item");for(let e of smoothScrollLinks)e.addEventListener("click",e=>{e.preventDefault();e=e.target;document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})});const buttonCheck=document.getElementById("btn_check"),questions=document.getElementsByName("question"),firstTry=localStorage.getItem("tryNumber"),calculateScore=(null==firstTry&&localStorage.setItem("tryNumber",1),()=>{var e=localStorage.getItem("tryNumber");let t=0;for(let e=0;e<questions.length;e++){var l=questions[e].getElementsByTagName("input");for(let e=0;e<l.length;e++){var n=l[e];n.checked&&"true"===n.value&&t++}}result.classList.remove("none"),result.animate([{transform:"scale(0)"},{transform:"scale(1)"}],{duration:300}),document.getElementById("answer").textContent=t+" из 5",document.getElementById("try").textContent=""+e,e++,localStorage.setItem("tryNumber",e)});buttonCheck.addEventListener("click",calculateScore),$(".navig__title").on("click",function(){$(".navig__list").is(":hidden")?$(".navig__list").slideDown("slow"):$(".navig__list").slideUp()});