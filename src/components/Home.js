import React from "react";
import {Link} from "react-router-dom";

const Home = () =>
            <div>
                <h1>Welcome Home</h1>

                <div className="bento-list list-group">

                    <Link className="bento-list-item list-group-item"
                          to="/keyword">
                        Search by Keyword
                    </Link>

                    <Link className="bento-list-item list-group-item"
                          to="/ingredient">
                        Search by Ingredient
                    </Link>
                </div>
            </div>;

export default Home;