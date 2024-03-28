

export default function Home() {
  return (

    <div className="row row-cols-2 hero">
      <div className="col background-img-hero"></div>
      <div className="col d-flex flex-column justify-content-center">
        <div className="row row-cols-3  ">
          <div className="col-2"></div>
          <div className="col-8 ">

            <div className="">
              <div className="d-flex justify-content-center fw-bolder fs-3 border-bottom-parent">
              <div className="">Builder Login</div>
                <div className="border-bottom-child" ></div>
              </div>
              <div className="d-flex justify-content-center mb-4 ">Login to upload your projects</div>
              <div class="mb-3 ">
                <input type="email" class="form-control p-4" id="exampleFormControlInput1" placeholder="Email or username" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control p-4" id="exampleFormControlInput1" placeholder="Password" />
              </div>
              <div class="d-grid gap-2 pb-4">
                <button className="btn btn-dark p-3 fw-semibold" type="button">Login Now</button>
              </div>
              <div className="d-flex justify-content-center pb-2">Don't Have an Account?</div>
              <div class="d-grid gap-2">
                <button className="btn btn-warning p-3 fw-semibold" type="button">Register Now</button>
              </div>

            </div>
          </div>

          <div className="col-2"></div>

        </div>

      </div>
    </div>

    //   <div className="container">
    //   <div className="row row-cols-2 hero">
    //   <div className="col background-img-hero"></div>
    //   <div className="col get-margin">

    //         <div className="">
    //         <div className="d-flex justify-content-center fw-bolder fs-3 builder-bg">Builder Login</div>
    //         <div className="d-flex justify-content-center mb-4">Login to upload your projects</div>
    //         <div class="mb-3 ">
    //           <input type="email" class="form-control p-3" id="exampleFormControlInput1" placeholder="Email or username" />
    //         </div>
    //         <div class="mb-3">
    //           <input type="password" class="form-control p-3" id="exampleFormControlInput1" placeholder="Password" />
    //         </div>
    //         <div class="d-grid gap-2 pb-4">
    //           <button class="btn btn-dark p-3" type="button">Login Now</button>
    //         </div>
    //         <div className="d-flex justify-content-center pb-2">Don't Have an Account?</div>
    //         <div class="d-grid gap-2">
    //           <button class="btn btn-warning p-3" type="button">Register Now</button>
    //         </div>

    //         </div>



    //   </div>
    // </div>
    // </div>
  );
}
