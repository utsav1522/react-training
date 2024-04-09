/**
 * a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data.
 */

const UserCard = ({ data }) => {
  return (
    <div
      className="userCard"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.map((ele) => {
        return (
          <div key={ele + 6152311}>
            <div>
              <h1>Hello I am {ele.name} !!</h1>
              <h3>Reach me out at {ele.email}</h3>
            </div>
            <img className="userCardImg" src={ele.avatarURL} alt=" Avatar" />
          </div>
        );
      })}
    </div>
  );
};
export default UserCard;
