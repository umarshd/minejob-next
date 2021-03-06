const HeaderHomePage = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Mine<span>jobs</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#signupModal"
                >
                  Daftar
                </a>
                <a
                  className="nav-item nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  Masuk
                </a>
                <a
                  className="nav-item nav-link btn btn-warning text-white"
                  href="#"
                >
                  Perusahaan
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Modal Signup*/}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h4>Gabung Sekarang</h4>
                <p>Buat Akun</p>
                <a href="#" className="bg-form-input p-3">
                  <img src="/assets/icon/google.svg" height={32} alt="" />{" "}
                  Daftar Dengan Google
                </a>
                <p className="mt-3">
                  Atau
                  <br />
                  Daftar Dengan Email
                </p>
                <form action className="signupForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          aria-describedby="firstName"
                          placeholder="Nama Depan"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          aria-describedby="lastName"
                          placeholder="Nama Belakang"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          aria-describedby="password"
                          placeholder="Kata Sandi"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row text-left pl-1">
                    <div className="col-md-12">
                      <div className="form-check form-check-inline ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          Saya telah setuju dengan syarat dan ketentuan yang
                          berlaku
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4 mb-4">
                    Daftar Sekarang
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Modal login*/}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h4>Masuk</h4>
                <p>Temukan Pekerjaan Impian</p>
                <a href="#" className="bg-form-input p-3">
                  <img src="/assets/icon/google.svg" height={32} alt="" /> Masuk
                  Dengan Google
                </a>
                <p className="mt-3">
                  Atau
                  <br />
                  Masuk Dengan Email
                </p>
                <form action className="loginForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          aria-describedby="password"
                          placeholder="Kata Sandi"
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4 mb-4">
                    Masuk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <div className="row justify-content-center">
              <h1 className="tagline">
                Temukan Kesempatan Terbaik <br />
                #BangunSuksesAnda
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="bg-white">
                <input
                  type="text"
                  placeholder="Cari Berdasarkan: Posisi, Jenis Pekerjaan, Lokasi"
                />
                <button className="btn btn-warning">cari</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderHomePage;
