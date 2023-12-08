import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
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
		<button><img src="/static/search_icon.png" alt="search icon"/> </button>
		`;
    return this.el;
  }
}
