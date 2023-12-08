import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
	}
	
	search() {
		const value = this.el.querySelector('input').value; 
		this.state.searchQuery = value; 
	}

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
		<div class="search__wrapper">
			<input
			type="text"
			placeholder="Find any book..."
			class="search__input"
			value='${this.state.searchQuery ? this.state.searchQuery : ""}'
			/>
			<img src="/static/search.svg" alt="search logo"/>
		</div>
		<button ><img src="/static/search_icon.png" alt="search icon"/> </button>
		`;

    this.el
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));

    this.el.querySelector("input").addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        this.search();
      }
    });
    return this.el;
  }
}
