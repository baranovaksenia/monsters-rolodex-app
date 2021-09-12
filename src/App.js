import CardList from "./components/card-list/card-list.component";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div>
        <CardList monsters={this.state.monsters} />
        <input type="search" placeholder="search monsters" />
      </div>
    );
  }
}

export default App;
