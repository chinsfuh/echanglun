import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const ShoesServices = () => {
  return (
    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
         Kasut Servis
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Kasut servis seperti menukang, membaiki, melekat, dan lain-lain lagi.
        </p>

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="4" xl="3" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://lh5.googleusercontent.com/p/AF1QipMWP7RX5-CqzI2e057fL79iR6zxyTxaHlgUdDJt=w408-h544-k-no" 
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="green-text">
                {/* <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon fas icon="chart-line" className="pr-2" />
                  Pusat Service Tayar Pusat Tayar & Bateri Pendang
                </h5> */}
              </a>
              <h4 className="font-weight-bold mb-3">NSH Kasut Servis</h4>
              <p>
                Lokasi: North-South Expy, Kampung Paya Nongmi, 06010 Bukit Kayu Hitam, Kedah</p>
                <p>Operasi: 10am–6pm</p>    
                <p>Jumaat	Tutup</p>
                <p>No. Telefon: 04-759 9654

              </p>
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          {/* <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://scontent.fkul13-1.fna.fbcdn.net/v/t1.0-9/19396714_1565621050146084_7770110782689152776_n.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_ohc=7C2c69PLpiAAX_exsYn&_nc_ht=scontent.fkul13-1.fna&oh=eb882a951f6ccbee0d39eee414d0ff15&oe=5EB9A694"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="eye" className="pr-2" />
                  Kien Auto Repair
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Lokasi: Kien Auto Repair, Changlun, 06010 Changlun, Kedah</p>
                <p>Operasi: 10am-5pm Setiap hari , Jumaat & Sabtu tutup</p>
                <p>No. Telefon: 012-404 6075
              </p>
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://scontent.fkul13-1.fna.fbcdn.net/v/t1.0-9/s960x960/48191346_2169591830024587_6879275815519911936_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=zcCMN5tFv10AX-WyK-I&_nc_ht=scontent.fkul13-1.fna&_nc_tp=7&oh=d8309336ce338e4f90e3af8a52ce05ba&oe=5EB724E0"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="brown-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="camera" className="pr-2" />
                  Laxmi mechanic Sdn. Bhd
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Lokasi: Laxmi mechanic Sdn. Bhd, Changlun, 06010 Changlun, Kedah</p>
                <p>Operasi: 9am-7pm Setiap hari , Jumaat tutup</p>
                <p>Emel: axmimachine75@gmail.com </p>
                <p>No. Telefon: 04-924 2152
              </p>
              <MDBBtn color="success" rounded>
              <a href="www.google.com">View more</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://www.carkaki.my/wp-content/uploads/job-manager-uploads/featured_image/2017/08/Pohleh-Auto-Workshop-Sdn-Bhd.jpg"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="#!" className="cyan-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="phone" className="pr-2" />
                  Workshop, Sawa Auto
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Title of the news</h4>
              <p>
                Lokasi: Kampung Tok Kassim, 06010 Bukit Kayu Hitam, Kedah</p>
                <p>Operasi: 9:30am–6pm Setiap hari</p>
                <p>No. Telefon: 019-450 4467
              </p>
              <MDBBtn color="success" rounded>
                View more
              </MDBBtn> */}
            {/* </MDBCardBody>
          </MDBCol> */}
        </MDBRow>
      </section>
  );
}

export default ShoesServices;