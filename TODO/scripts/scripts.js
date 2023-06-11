import {category} from "./../assets/list_category/class.js";

export default function scripts () {
	function card_adder(category, description, color) {

		return {
			category: category || "Work",
			id: Date.now(),
			description: description || "new task",
			isDone: false,
			color: color || "white"
		}
	}

	let card_list = [
		card_adder("Work", "first task", "red"),
		// card_adder("Work","second task","red"),


	]

	function del_card(id) {
		let newcard_list = card_list.filter((el) => {
			return el.id !== id;
		})
		card_list = newcard_list

		document.querySelector(".main_cards").innerHTML = "";
		cardsRender();

	}

	function cardsRender() {
		card_list.forEach((el) => {
			let category_name = document.createElement("li");
			let description = document.createElement("p")
			description.textContent = el.description;
			let del_btn = document.createElement("img")
			del_btn.setAttribute("src", "./../TODO/assets/delete.png")
			del_btn.setAttribute("alt", "del-png")
			del_btn.setAttribute("height", "30")
			del_btn.setAttribute("width", "30")
			del_btn.addEventListener("click", () => {
				del_card(el.id)
			})

			category_name.appendChild(description)
			category_name.appendChild(del_btn)


			document.querySelector(".main_cards").appendChild(category_name);
			category_name.classList.add("cards");
			category_name.classList.add(el.category);
			category_name.setAttribute("id", `${el.id}`)
		})
	}


	function categoryRender() {
		category.forEach((el) => {
			let category_name = document.createElement("li");
			category_name.textContent = el.Name;
			document.querySelector(".category_list").appendChild(category_name);
			category_name.classList.add(el.Name);
		})
	}

	categoryRender();
	cardsRender();
	document.querySelector(".add_btn_cards").addEventListener("click", showtextarea)
	document.querySelector(".done_btn_cards").addEventListener("click", add_new_card)


	function add_new_card() {

		card_list.push(
			card_adder('', document.querySelector(".new_task_name").value, '')
		)
		console.log(card_list)

		document.querySelector(".main_cards").innerHTML = "";
		document.querySelector(".new_task_name").classList.remove("isactive");
		document.querySelector(".add_btn_cards").classList.remove("hide");
		document.querySelector(".done_btn_cards").classList.add("hide");


		cardsRender();

		document.querySelector(".new_task_name").value = "";
	}

	function showtextarea() {
		console.log('showtextarea',showtextarea)
		document.querySelector(".new_task_name").classList.add("isactive");
		document.querySelector(".add_btn_cards").classList.add("hide");
		document.querySelector(".done_btn_cards").classList.remove("hide");
	}

}


