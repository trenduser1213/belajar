import React from 'react';

function Navbar(){
  return(
    <nav className="navbar navbar-light navbar-expand-sm fixed-top portfolio-navbar navbar-kustom">
            <div className="container"><a className="navbar-brand text-light logo dim" href="{#}">Neal_Amstrong</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto underline dim">
                        <li className="nav-item item" role="presentation"><a className="nav-link active text-light" href="{#}" style={{ marginTop: '16px' }}>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}
export default Navbar;