import React from "react";

export default function KeahlianPage() {
  return (
    <>
      <div class="col-md-7 col-lg-9">
        <div class="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" class="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div class="card-right-keahlian">
          <div class="container">
            <h5>
              <i class="fas fa-poll-h"></i>Keahlian
            </h5>
            <hr />
            <div class="row justify-content-center">
              <div class="col-md-10">
                <form>
                  <div class="row">
                    <div class="col-md-12 col-lg-5">
                      <div class="form-group">
                        <label for="keahlian">Keahlian</label>
                        <input
                          type="text"
                          class="form-control"
                          id="namaTempatBelajar"
                          placeholder="Input text"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-5">
                      <div class="form-group">
                        <label for="tingkatan">Tingkatan</label>
                        <select class="custom-select" id="tingkatan">
                          <option selected>Select item...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-1">
                      <a href="#">
                        <i class="fas fa-plus-circle"></i>
                      </a>
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
