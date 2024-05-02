 document.querySelector(".burger-menu").addEventListener("click", function () {
    document.querySelector(".kontakt-inform-menu").classList.remove("hidden")
  })
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".kontakt-inform-menu").classList.add("hidden")
  })

  const tagsForGold = document.querySelectorAll(".little-theatre p, h3");
  tagsForGold.forEach((tagForGold) => {
    let arr = tagForGold.textContent.split(' ');
    arr[0] = '<span>' + arr[0] + '</span>';
    tagForGold.innerHTML = arr.join(' ');
  });