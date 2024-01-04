import React from "react"

export default function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 mt-2 text-left pb-2 pb-md-0">
                    <a href="/" className="sans-serif nounderline logo-top">
                        <span className="logo-text-1"> VPN</span>
                        <span className="ml-1 yellow">Review</span>
                    </a>
                </div>
                <div className="col-12 col-md-8 pl-rtl-0 d-none d-md-block">
                    <div className="text-right float-right">
                        <nav className="navbar navbar-expand-lg pl-rtl-0">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
