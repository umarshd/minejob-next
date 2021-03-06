import React from "react";

export default function EditProfilePage() {
  return (
    <>
      <div class="col-md-7 col-lg-9">
        <div class="alert alert-custom" role="alert">
          Hai Budi, Silahkan cek email kamu untuk melakukan verifikasi akun
          <a href="#" class="ml-5">
            KIRIM ULANG EMAIL
          </a>
        </div>
        <div class="card-right-edit-profile">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div className="profile card p-3 mb-2 mt-2">
                <div className="row">
                  <div className="col-md-2">
                    <div className="foto-profile">
                      <img
                        src="/bg-home.jpg"
                        className="rounded-circle"
                        height="64"
                        width="64"
                      />
                    </div>
                  </div>
                  <div className="col-md-10 pl-4 mt-auto mb-auto">
                    <div className="profile-detail ">
                      <h5>Budi Gunawan</h5>
                      <p>
                        <i class="fas fa-map-marker-alt pr-2"></i>Jawa Tengah,
                        Semarang
                      </p>
                      <p>
                        <i class="fas fa-envelope pr-2"></i>
                        budigunawan@gmail.com
                      </p>
                      <p>
                        <i class="fas fa-id-card pr-2"></i>+62 8223400993
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-me card p-3 mb-2 mt-2">
                <h5>Tentang Budi</h5>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      Ir. Budi Gunawan Sumadi adalah Menteri Perhubungan
                      Republik Indonesia pada Kabinet Indonesia Maju setelah
                      sebelumnya menjabat posisi yang sama pada Kabinet Kerja
                      sejak 27 Juli 2016 menggantikan Ignasius Jonan
                    </p>
                  </div>
                  <div className="col-md-2 offset-md-4">
                    <a href="#" className="btn btn-secondary">
                      Edit Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="preferensi-pekerjaan card p-3 mb-2 mt-2">
                <h5>Preferensi Pekerjaan</h5>
                <p>Gaji : Rp.4.000.000 - 5.000.000</p>
                <p>Lokasi Kerja : Jakarta Selatan, DKI Jakarta</p>
                <p>Bidang Pekerjaan : Teknologi Informasi, Software Engineer</p>
              </div>
              <div className="pengalaman-pekerjaan card p-3 mb-2 mt-2">
                <h5>Pengalaman Pekerjaan</h5>
                <div className="row">
                  <div className="col-md-4">
                    <div className="years-experience">
                      <p>Sep 2019 - Sekarang</p>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="position">
                      <h5>Full Stack Web Dev (Intern) di Binar Academy</h5>
                      <p>
                        Memperlajari javascript dan penggunaan react framework,
                        Mempelajari penggunaan agile scrum, dalam pengembangan
                        perangkat lunak
                      </p>
                      <h5>Gaji Saat Ini</h5>
                      <p>Rp.1.700.000 per bulan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pendidikan card p-3 mb-2 mt-2">
                <h5>Pendidikan</h5>
                <div className="row">
                  <div className="col-md-4">
                    <p>2016 - Sekarang</p>
                  </div>
                  <div className="col-md-8">
                    <div className="school">
                      <h5>Universitas Dian Nuswantoro</h5>
                      <p>Sarjana Teknik Informatika</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>2013 - 2016</p>
                  </div>
                  <div className="col-md-8">
                    <div className="school">
                      <h5>SMA Negeri 5 Semarang</h5>
                      <p>Sekolah Menengah</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keahlian card p-3 mb-2 mt-2">
                <h5>Keahlian</h5>
                <div className="row">
                  <div className="col-md-4">
                    <p>Video Editing</p>
                  </div>
                  <div className="col-md-8">
                    <div className="tingkatan">
                      <h5>Menengah</h5>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>ReactJs</p>
                  </div>
                  <div className="col-md-8">
                    <div className="tingkatan">
                      <h5>Profesional</h5>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>HTML</p>
                  </div>
                  <div className="col-md-8">
                    <div className="tingkatan">
                      <h5>Pemula</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="curriculum-vitae card p-3 mb-2 mt-2">
                <div className="row">
                  <div className="col-md-4">
                    <h5>Curriculum Vitae (CV)</h5>
                  </div>
                  <div className="col-md-8">
                    <button className="btn btn-secondary mr-2">Ganti CV</button>
                    <button className="btn btn-primary mr-2">Lihat CV</button>
                    <button className="btn btn-danger">Hapus</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
