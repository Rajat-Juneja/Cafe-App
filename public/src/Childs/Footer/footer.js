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
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp; Pitampura, Delhi, India</p>
                    </div>

                    <div className="col-sm-2 col-2">
                        <p><i class="fa fa-phone" aria-hidden="true"></i> &nbsp; (+91) 9654-623-602</p>
                    </div>

                    <div className="col-sm-7 col-7">
                        <div className="tags">
                            <a href="https://www.facebook.com/rajat.juneja.1998" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                            
                        <div className="tags">
                            <a href="https://github.com/rajat-juneja" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>

                        <div className="tags">
                            <a href="mailto:junejarajat98@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>

                        <div className="tags">
                            <a href="https://www.linkedin.com/in/rajat-juneja/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}