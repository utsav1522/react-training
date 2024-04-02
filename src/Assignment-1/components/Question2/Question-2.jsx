/**
 * a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data.
 */

const UserCard = (props) => {
  const { name, email, avatarURL } = props;
  return (
    <div className="userCard">
      <div>
        {" "}
        <h1>Hello I am {name} !!</h1>
        <h3>Reach me out at {email}</h3>
      </div>
      <img className="userCardImg" src={avatarURL} alt=" Avatar" />
    </div>
  );
};
export default UserCard;
