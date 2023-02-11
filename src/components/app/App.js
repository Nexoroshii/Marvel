import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";

class App extends Component {
  state = {
    showPandomChar: true,
  };

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showPandomChar: !state.showPandomChar,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          {this.state.showPandomChar ? <RandomChar /> : null}
          <div className="char__content">
            <CharList />
            <CharInfo />
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
