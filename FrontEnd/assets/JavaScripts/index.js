Works()
getCategory()

function Works(){
	const worksGET = "http://localhost:5678/api/works"
	const gallery = document.getElementsByClassName("gallery")[0]

	fetch(worksGET, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
		}
	})
	.then((response) => response.json())
	.then((data) => {
		data.forEach((work) => {
			//console.log(work)
			gallery.innerHTML += `<figure>
									<img src="${work.imageUrl}" alt="${work.title}">
									<figcaption>${work.title}</figcaption>
								</figure>`
		})
	})
}























function getCategory(){
	const catGET = "http://localhost:5678/api/categories"
	const categorys = document.querySelectorAll("#category")[0]
	fetch(catGET, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
		}
	})
	.then((response) => response.json())
	.then((data) => {
		data.forEach((category) => {
			// Ajouter les catégories
			console.log(category)
			categorys.innerHTML += `<a>${category.name}</a> `
			categorys.onclick = function (){
				console.log("click")
			}
		})
	})
}