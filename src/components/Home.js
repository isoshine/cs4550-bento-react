import React from "react";
import {Link} from "react-router-dom";

const Home = () =>
            <div>
                <h1>Welcome Home</h1>

                <div className="bento-list list-group">

                    <Link className="bento-list-item list-group-item"
                          to="/search">
                        Search
                    </Link>
                    
                    <Link className="bento-list-item list-group-item"
                          to="/profile">
                        Profile
                    </Link>

                    <Link className="bento-list-item list-group-item"
                          to="/signup">
                        Sign-up
                    </Link>

                    <Link className="bento-list-item list-group-item"
                          to="/signin">
                        Sign-in
                    </Link>

                    <Link className="bento-list-item list-group-item"
                          to="/admin">
                        User Admin Page
                    </Link>
                </div>
            </div>;

export default Home;