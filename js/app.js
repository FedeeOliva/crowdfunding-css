//navbar
{

	const btnBars = document.getElementById('btn-bars');
	const navbar = document.getElementById('main-navbar');

	const toggleNavbar = () => {
		navbar.classList.toggle('active');
		const icono = btnBars.querySelector('img');
		if(icono.getAttribute('src') === 'images/icon-hamburger.svg'){
			icono.setAttribute('src', 'images/icon-close-menu.svg');
		}else{
			icono.setAttribute('src', 'images/icon-hamburger.svg');
		}
	}

	btnBars.addEventListener('click', toggleNavbar)
	navbar.addEventListener('click', e => {
		if(e.target === navbar && navbar.classList.contains('active')){
			toggleNavbar();
		}
	})	

}

//button bookmark
{
	const btnBookmark = document.getElementById('btn-bookmark');
	const toggleBoton = () => {
		btnBookmark.classList.toggle('active');
		const icono = btnBookmark.querySelector('img');
		const texto = btnBookmark.querySelector('span');

		if(btnBookmark.classList.contains('active')){
			texto.textContent = 'Bookmarked';
			icono.setAttribute('src', 'images/icon-bookmark-cyan.svg');
		}else{
			texto.textContent = 'Bookmark';
			icono.setAttribute('src', 'images/icon-bookmark.svg');
		}
	}

	btnBookmark.addEventListener('click', toggleBoton)
}


//modal
{
	const modal = document.getElementById('modal');


	modal.addEventListener('click', e => {
		if(e.target === modal){
			modal.classList.toggle('active');
		}
		
	})

}