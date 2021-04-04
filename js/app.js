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


//modal productos
const modal = document.getElementById('modal-products');
const modalPayment = document.getElementById('modal-payment-finished');
{
	
	modal.addEventListener('click', e => {
		if(e.target === modal){
			modal.classList.toggle('active');
		}
		
	})

	const radioButtons = modal.querySelectorAll('input[type="radio"]');
	const cardProducts = modal.querySelectorAll('.card-product-selectable');
	const btnSelects = document.querySelectorAll('main .btn-select-reward');
	const btnBackThisProject = document.getElementById('back-this-project');
	const btnsPayment = document.querySelectorAll('#modal-products .btn-cyan')
	const btnCloseModal = document.getElementById('btn-close-modal');
	const btnPaymentModal = document.querySelector('#modal-payment-finished .btn')

	const selectProduct = id =>{
		const card = document.getElementById(id);
		cardProducts.forEach(cardProduct => {
			cardProduct.classList.remove('selected');
		})
		card.classList.add('selected');
		card.querySelector('input[type="radio"]').checked = true;		
		card.scrollIntoView({
			behavior: "smooth"
		})
	}

	btnBackThisProject.addEventListener('click', () =>{
		modal.classList.add('active');
	})

	radioButtons.forEach( radioButton => {
		radioButton.addEventListener('change', e =>{
			const id = e.target.getAttribute('data-targetid');
			selectProduct(id);
		})
	})

	btnSelects.forEach( btn => {
		btn.addEventListener('click', e =>{
			modal.classList.add('active');
			const id = e.target.getAttribute('data-targetid');
			selectProduct(id);

		})
	})

	btnsPayment.forEach( btn => {
		btn.addEventListener('click', e =>{
			modal.classList.remove('active')			
			modalPayment.classList.add('active');

			setTimeout(() => modalPayment.classList.remove('active') ,5000)
		})
	})

	btnCloseModal.addEventListener('click', () => {
		modal.classList.remove('active');
	});

	btnPaymentModal.addEventListener('click', () => {
		modalPayment.classList.remove('active');
	})


}