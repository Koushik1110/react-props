const ParentComp = ({ children, isLoggedIn, setIsLoggedIn }) => {
  if (isLoggedIn) {
    return <div>
      <p>Logged in as:{children}</p>
      <button onClick={()=> setIsLoggedIn(false)}>
        Log out
      </button>
      </div>;
  } else {
    return (
      <div>
        <p>User is not logged in:{children}</p>
        <button>Log in</button>
      </div>
    );
  }
};

export default ParentComp;
