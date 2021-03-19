const burgerNav = () => {
	const burger = document.querySelector('.burger');
	const itemList = document.querySelector('#item-list');
	const menuList = document.querySelectorAll('.menu-item');
	function showMenu() {
		if (itemList.style.left == '0px' || itemList.style.left == null) {
			itemList.style.left = "-2000px";
		} else {
			itemList.style.left = "0";
		}
		document.body.classList.toggle('lock-scroll');
	}
	burger.addEventListener('click', () => {
		// document.body.classList.toggle('lock-scroll');
		showMenu();
	});
	len = menuList.length;
	for (i = 0; i < len; i++) {
		menuList[i].addEventListener('click', () => {
			console.log(itemList.style.height +"xxx")
			if (itemList.style.left == '0px'){
			showMenu();
			}
		});
	}
	if (window.attachEvent) {
		window.attachEvent('onresize', function() {
		if (window.innerWidth > 980 && (itemList.style.left == '0px' || itemList.style.left == null)) {
			itemList.style.left = "-2000px";
			document.body.classList.toggle('lock-scroll');
			console.log("dupa");
		}
		});
}

window.addEventListener("resize", function() {
	if (window.matchMedia("(min-width: 980px)").matches && (itemList.style.left == '0px' || itemList.style.left == null)) {
	  console.log("Screen width is at least 980")
	  itemList.style.left = "-2000px";
	  document.body.classList.toggle('lock-scroll');
	} else {
	  console.log("Screen less than 980")
	}
  })

}
window.onload = function () {
	burgerNav();
}
