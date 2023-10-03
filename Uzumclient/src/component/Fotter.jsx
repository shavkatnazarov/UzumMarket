import {Link} from "react-router-dom";


export const Fotter =()=>{
    return(
        <div style={{backgroundColor:"white",height:"280px"}} >
            <div>
                <footer className="text-center text-lg-start bg-light text-muted">
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                        </div>
                        <div>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-twitter"/>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-google"/>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-instagram"/>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-linkedin"/>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-github"/>
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"/>Company name
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">Angular</a>
                                    </p>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">Vue</a>
                                    </p>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">Laravel</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="https://t.me/shavkat0801" className="text-reset">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3"/> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"/>

                                    </p>
                                    <p><i className="fas fa-phone me-3"/> +998 90 441 08 01</p>
                                    <p><i className="fas fa-print me-3"/> +998 90 441 08 01</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="text-center p-4 bg-light">
                        © 2023 Copyright:
                        <a class="text-reset fw-bold" href="https://t.me/shavkat0801">SHAVKAT</a>
                    </div>
                </footer>
            </div>
                
        </div>
    )
}