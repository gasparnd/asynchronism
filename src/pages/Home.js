import getXml from '../data/getXml'

const Home = () => {

	const view = `
		<section class="call-backs">
			<h2>Call Backs</h2>
			<div class="data-carrusel-callback">
				${function () {
					alert(3)
				}}
			</div>
		</section>
		<section class="promise">
			<h2>Promise</h2>
			<div class="characters">
				<div class="character"></div>
			</div>
		</section>
		<section class="asyn-await">
			<h2>Asyn Await</h2>
			<div class="characters">
				<div class="character"></div>
			</div>
		</section>
		<section class="fetch">
			<h2>Fetch</h2>
			<div class="characters">
				<div class="character"></div>
			</div>
		</section>
	`
	return view
}

export default Home