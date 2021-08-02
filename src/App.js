import "./App.css";
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import NavBar from "./components/NavBar";
import InputSearch from "./components/InputSearch";
import FilterInput from "./components/FilterInput";
import MoreInfo from "./components/MoreInfo";
import { ThemeContext } from "./store/Theme.context";

function App() {
  const { isDark } = useContext(ThemeContext);
  console.log("App Rendered");
  return (
    <div className={`App ${isDark ? "Dark" : ""}`}>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <div className="inputs p">
                <InputSearch />
                <FilterInput />
              </div>
              <CountryList />
            </>
          )}
        />
        <Route
          path="/country/:countryNumber"
          render={(props) => <MoreInfo {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
