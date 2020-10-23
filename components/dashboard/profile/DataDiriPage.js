import React from "react";

export default function DataDiriPage() {
  return (
    <>
      <div class="col-md-7 col-lg-9">
        <div class="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#">KIRIM ULANG EMAIL</a>
        </div>
        <div class="card-right-datadiri">
          <div class="container">
            <h5>
              <i class="fas fa-address-card"></i>Data Diri
            </h5>
            <hr />
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form>
                  <div class="row">
                    <div class="col-md-12 col-lg-6">
                      <div class="form-group">
                        <label for="firstName">Nama Depan</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          aria-describedby="firstName"
                          placeholder="Nama Depan"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                      <div class="form-group">
                        <label for="lastName">Nama Belakang</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          aria-describedby="lastName"
                          placeholder="Nama Belakang"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="phoneNumber">Nomer Telepon</label>
                        <input
                          type="number"
                          class="form-control"
                          id="phoneNumber"
                          aria-describedby="phoneNumber"
                          placeholder="Nomer Telepon"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          aria-describedby="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="domisili">Domisili</label>
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-lg-6">
                      <select class="custom-select" id="provisi">
                        <option selected>Provinsi</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-12 col-lg-6">
                      <select class="custom-select" id="kota">
                        <option selected>Kota</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-file">
                          <label for="foto">Unggah Foto Profile</label>
                          <input
                            type="file"
                            class="form-control"
                            id="foto"
                            aria-describedby="foto"
                            placeholder="Pilih Berkas"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="tentang">Tentang Anda</label>
                        <textarea
                          class="form-control"
                          id="tentang"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-center">
                      <button type="submit" class="btn btn-primary mb-3 mt-3">
                        Simpan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
