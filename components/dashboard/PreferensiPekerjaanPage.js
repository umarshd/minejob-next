import React from "react";

export default function PreferensiPekerjaanPage() {
  return (
    <>
      <div class="col-md-7 col-lg-9">
        <div class="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" class="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div class="card-right-preferensi">
          <div class="container">
            <h5>
              <i class="fas fa-clone"></i>Preferensi Pekerjaan
            </h5>
            <hr />
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form>
                  <div class="form-group">
                    <label for="posisi">Gaji yang diharapkan</label>
                    <input
                      type="number"
                      class="form-control"
                      id="gaji"
                      aria-describedby="gaji"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="lokasi">Lokasi yang diharapkan</label>
                    <select class="custom-select" id="lokasi">
                      <option selected>Pilih Provinsi</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
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
