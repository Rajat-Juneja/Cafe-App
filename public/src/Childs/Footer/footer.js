import React from 'react';
import './footer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export const Footer  = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-3">
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp; Pitampura, Delhi, India</p>
                    </div>

                    <div className="col-sm-2 col-2">
                        <p><i className="fa fa-phone" aria-hidden="true"></i> &nbsp; (+91) 9654-623-602</p>
                    </div>

                    <div className="col-sm-7 col-7">
                        <div className="tags">
                            <a title="Facebook" href="https://www.facebook.com/rajat.juneja.1998" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                            
                        <div className="tags">
                            <a title="Github" href="https://github.com/rajat-juneja" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </div>

                        <div className="tags">
                            <a title="Mail" href="mailto:junejarajat98@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>

                        <div className="tags">
                            <a title="Linkedin" href="https://www.linkedin.com/in/rajat-juneja/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <hr/>
                <h6>Copyright © 2018. Rajat Juneja. All rights reserved. </h6>
            </div>
        </div>
    )
}