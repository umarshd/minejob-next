import React from "react";

export default function PendidikanPage() {
  return (
    <>
      <div class="col-md-7 col-lg-9">
        <div class="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" class="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div class="card-right-pendidikan">
          <div class="container">
            <h5>
              <i class="fas fa-user-graduate"></i>Pendidikan
            </h5>
            <hr />
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form>
                  <div class="form-group">
                    <label for="pendidikanTerakhir">Pendidikan Terakhir</label>
                    <select class="custom-select" id="pendidikanTerakhir">
                      <option selected>Pilih Tingkat Pendidikan</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="namaTempatBelajar">
                      Nama Instansi / Sekolah / Universitas
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="namaTempatBelajar"
                      placeholder="Nama Instansi / Sekolah / Universitas"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-lg-6">
                      <div class="form-group">
                        <label for="waktuMulai">Waktu Mulai</label>
                        <select class="custom-select" id="tahunMulai">
                          <option selected>Bulan Mulai</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                      <div class="form-group">
                        <label for="waktuSelesai">
                          Waktu Selesai
                          <span>(Atau perkiraan selesai)</span>
                        </label>
                        <select class="custom-select" id="tahunSelesai">
                          <option selected>Bulan Selesai</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
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
