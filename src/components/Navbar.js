const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <h1>Pokemon Card Search App</h1>
        <input type="text" placeholder="Please enter a card name"/>
        <button>Search for cards!</button>
      </div>
    </header>
  );
};

export default Navbar;
