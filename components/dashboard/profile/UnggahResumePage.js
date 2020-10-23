import React from "react";

export default function UnggahResumePage() {
  return (
    <>
      <div class="col-md-7 col-lg-9">
        <div class="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" class="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div class="card-right-unggahBerkas">
          <div class="container">
            <h5>
              <i class="fas fa-cloud-upload-alt"></i>Unggah Resume
            </h5>
            <hr />
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-file">
                          <label for="berkas">Pilih Berkas</label>
                          <input
                            type="file"
                            class="form-control"
                            id="foto"
                            aria-describedby="berkas"
                            placeholder="Pilih Berkas"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-center">
                      <button type="submit" class="btn btn-primary mb-3 mt-3">
                        Upload Berkas
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
