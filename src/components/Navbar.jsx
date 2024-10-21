const Navbar = () =>{
    return(
      <nav id="navbar">

      <h2>
        <Link to="/"> MoviesLib </Link>
      </h2>
      <Link to="/movies/1"> Movie </Link>
      <Link to="/search"> Search </Link>

      </nav>
    );
};


export default Navbar;