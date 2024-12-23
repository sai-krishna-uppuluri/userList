import initialUserDetailsList from "../userprofile";
import "./index.css";

const UserProfileSection = ({ initialUserDetailsList }) => {
  return (
    <div className="user-profile-cards">
      {initialUserDetailsList.map((users) => (
        <div className="user-list-container" key={users.uniqueNo}>
          <div className="image-container">
            <img src={users.imageUrl} />
          </div>
          <div className="user-details-container">
            <h1> {users.name}</h1>
            <h2> {users.role}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserProfileSection;
