import { useState } from "react";
import "./App.css";
import UserProfileSection from "./userProfileSection";
import initialUserDetailsList from "./userprofile";

function App() {
  const [searchItem, setSearchItem] = useState("");

  function onChangeSearch(event) {
    setSearchItem(event.target.value);
  }

  const filteredUserItems = initialUserDetailsList.filter((eachUser) =>
    eachUser.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="App">
      <div className="user-profile">
        <h1> User Profiles </h1>
        <input
          type="search"
          placeholder="enter user profile"
          onChange={onChangeSearch}
        />
        <div className="user-profile-section">
          <UserProfileSection initialUserDetailsList={filteredUserItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
