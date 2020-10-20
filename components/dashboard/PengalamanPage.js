import React from "react";

export default function PengalamanPage() {
  return (
    <>
      <div class="col-md-7 col-lg-9">
        <div class="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" class="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div class="card-right-pengalaman">
          <div class="container">
            <h5>
              <i class="fas fa-briefcase"></i>Pengalaman
            </h5>
            <hr />
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form>
                  <div class="form-group">
                    <label for="posisi">Posisi</label>
                    <input
                      type="text"
                      class="form-control"
                      id="posisi"
                      aria-describedby="posisi"
                      placeholder="Posisi"
                    />
                  </div>
                  <div class="form-group">
                    <label for="namePerusahaan">Nama Perusahaan</label>
                    <input
                      type="text"
                      class="form-control"
                      id="namePerusahaan"
                      aria-describedby="namePerusahaan"
                      placeholder="Nama Perusahaan"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-lg-5">
                      <div class="form-group">
                        <label for="waktuMulai">Waktu Mulai</label>
                        <select class="custom-select" id="bulanMulai">
                          <option selected>Bulan Mulai</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <select class="custom-select mt-3" id="tahunMulai">
                          <option selected>Tahun Mulai</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-5 offset-lg-2">
                      <div class="form-group">
                        <label for="waktuSelesai">Waktu Selesai</label>
                        <select class="custom-select" id="bulanSelesai">
                          <option selected>Bulan Selesai</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <select class="custom-select mt-3" id="tahunSelesai">
                          <option selected>Tahun Selesai</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="jabatan">Jabatan</label>
                    <select class="custom-select" id="jabatan">
                      <option selected>Jabatan</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="gajiBulanan">Gaji Bulanan</label>
                    <input
                      type="number"
                      class="form-control"
                      id="gajiBulanan"
                      placeholder="Gaji Bulanan"
                    />
                  </div>
                  <div class="form-group">
                    <label for="deskripsiPekerjaan">Deskripsi Pekerjaan</label>
                    <textarea
                      class="form-control"
                      id="deskripsiPekerjaan"
                      rows="3"
                    ></textarea>
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
