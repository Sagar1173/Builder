
export default function Admin(){
    return(
        <div className="container admin-getmargin">

            <nav className="shadow-sm py-3 px-3 bg-light mb-5">
                <div className="row row-cols-2">
                    <div className="col d-flex align-items-center">
                        <div className="image-container">
                            <img src="/recption.jpg" alt="vayena" className="circular-image"></img>
                        </div>
                        <div className="mx-3">
                            <div className="mx-1 fs-4 fw-bolder pb-2">Welcome Vishal Dhakal</div>
                            <div>
                            <button type="button" class="btn btn-outline-success mx-1">Edit Profile</button>
                            <button type="button" class="mx-1 peach-button">Logout</button>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center">
                    <button type="button" class="btn btn-success btn-lg mx-2">+ Add New Project</button>

                    </div>
                </div>
            </nav>
            {/* ----------- */}
            <div className="d-flex align-items-center mb-4">
                <div className="fw-bolder fs-4 mx-1">Your Projects</div>
                <div className="mx-3">[20+ Projects Uploaded]</div>
                
                <div className="dropdown mx-3 py-2 dropdown-width form-floating">
                    <label id="city" className=""> Select city</label>
                    <select id="city" name="city" className="form-control " >
                        <option value="all" selected>All </option>
                        
                        <option value="NJ">NJ</option>
                        <option value="NY">NY</option>
                        <option value="NH">NH</option>
                    </select>
                   
                </div>
                
                <div className="dropdown mx-3 py-2 dropdown-width form-floating">
                    <label id="project_type">Select Project Type</label>
                    <select id="project_type" name="city" className="form-control " >
                        <option value="all"  selected>All </option>
                        <option value="Laborlyy">Laborlyy</option>
                        <option value="6 design">6 design</option>
                        <option value="Homebaba">Homebaba</option>
                    </select>
                   
                </div>

                <div className="dropdown mx-3 py-2 dropdown-width form-floating">
                    <label id="project_status" className="text-secondary-emphasis">Select Project Status</label>
                    <select  id="project_status" name="city" className="form-control " >
                        <option value="All" selected>All</option>
                        <option value="saab">Active</option>
                        <option value="fiat">Pending</option>
                        <option value="audi">Running</option>
                    </select>
                   
                </div>

            </div>
            <div className="row row-cols-2 shadow-sm p-2 bg-light mb-4">
                <div className="col d-flex flex-row flex-grow-1 ">
                    <div className="for-rent-container"><img className="for-rent-img" src="/renovated.jpg"></img></div>
                    <div className="d-flex flex-column align-items-start justify-content-center px-4">
                        <div className="fw-semibold fs-5 px-2">Renovated Apartment</div>
                        <div><span ><svg className="svg-readjust" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="location"><g fill="#134563"><path d="m32 55.7-.9-1.1c-.6-.8-15.9-18.7-15.9-29.4 0-9.3 7.6-16.8 16.8-16.8S48.8 16 48.8 25.2c0 10.7-15.3 28.7-15.9 29.4l-.9 1.1zm0-45c-8 0-14.4 6.5-14.4 14.4 0 8.4 11.1 22.7 14.4 26.8 3.3-4.1 14.4-18.3 14.4-26.8 0-7.9-6.4-14.4-14.4-14.4z"></path><path d="M32 31.6c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4zm0-10.4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path></g></svg></span>
                        1421 San Pedro St, Los Angeles, CA 90015</div>
                        <div className="text-peach fs-5 px-2">$13000/mo</div>
                    </div>
                </div>
                <div className="col d-flex justify-content-end align-items-center ">
                <button type="button" className="btn btn-bluegreen-outline mx-2">Preview <span className="bluegreen fw-bolder">
                <svg className="eye-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="eye"><g fill="#134563"><path d="M32 47.4c-16.2 0-23.5-14.3-23.8-14.9-.2-.4-.2-.8 0-1.2.3-.6 7.6-14.9 23.8-14.9s23.5 14.3 23.8 14.9c.2.4.2.8 0 1.2-.3.7-7.6 14.9-23.8 14.9zM10.9 32c1.5 2.6 8.4 12.8 21.1 12.8 12.7 0 19.6-10.2 21.1-12.8-1.5-2.6-8.4-12.8-21.1-12.8-12.7 0-19.6 10.2-21.1 12.8z"></path><path d="M32 44.6c-7 0-12.6-5.7-12.6-12.6S25.1 19.4 32 19.4 44.6 25.1 44.6 32 39 44.6 32 44.6zM32 22c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z"></path><path d="M32 39c-3.8 0-7-3.1-7-7 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3 3.8 0 7 3.1 7 7S35.8 39 32 39"></path></g></svg>
                    </span></button>

                <button type="button" className="btn btn-black-outline mx-2">Update <span className="fw-bolder">
                <svg className="eye-svg px-1" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="edit"><path d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path><path d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path></svg>
                    </span></button>
                    <div className="dustbin-container">
                        <button className="my-btn"><img src="/delete.png" className="dustbin-img"></img></button>
                    </div>
                </div>
            </div>

            <div className="row row-cols-2 shadow-sm p-2 bg-light mb-4">
                <div className="col d-flex flex-row flex-grow-1 ">
                    <div className="for-rent-container"><img className="for-rent-img" src="/renovated.jpg"></img></div>
                    <div className="d-flex flex-column align-items-start justify-content-center px-4">
                        <div className="fw-semibold fs-5 px-2">Renovated Apartment</div>
                        <div><span ><svg className="svg-readjust" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="location"><g fill="#134563"><path d="m32 55.7-.9-1.1c-.6-.8-15.9-18.7-15.9-29.4 0-9.3 7.6-16.8 16.8-16.8S48.8 16 48.8 25.2c0 10.7-15.3 28.7-15.9 29.4l-.9 1.1zm0-45c-8 0-14.4 6.5-14.4 14.4 0 8.4 11.1 22.7 14.4 26.8 3.3-4.1 14.4-18.3 14.4-26.8 0-7.9-6.4-14.4-14.4-14.4z"></path><path d="M32 31.6c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4zm0-10.4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path></g></svg></span>
                        1421 San Pedro St, Los Angeles, CA 90015</div>
                        <div className="text-peach fs-5 px-2">$13000/mo</div>
                    </div>
                </div>
                <div className="col d-flex justify-content-end align-items-center ">
                <button type="button" className="btn btn-bluegreen-outline mx-2">Preview <span className="bluegreen fw-bolder">
                <svg className="eye-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="eye"><g fill="#134563"><path d="M32 47.4c-16.2 0-23.5-14.3-23.8-14.9-.2-.4-.2-.8 0-1.2.3-.6 7.6-14.9 23.8-14.9s23.5 14.3 23.8 14.9c.2.4.2.8 0 1.2-.3.7-7.6 14.9-23.8 14.9zM10.9 32c1.5 2.6 8.4 12.8 21.1 12.8 12.7 0 19.6-10.2 21.1-12.8-1.5-2.6-8.4-12.8-21.1-12.8-12.7 0-19.6 10.2-21.1 12.8z"></path><path d="M32 44.6c-7 0-12.6-5.7-12.6-12.6S25.1 19.4 32 19.4 44.6 25.1 44.6 32 39 44.6 32 44.6zM32 22c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z"></path><path d="M32 39c-3.8 0-7-3.1-7-7 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3 3.8 0 7 3.1 7 7S35.8 39 32 39"></path></g></svg>
                    </span></button>

                <button type="button" className="btn btn-black-outline mx-2">Update <span className="fw-bolder">
                <svg className="eye-svg px-1" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="edit"><path d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path><path d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path></svg>
                    </span></button>
                    <div className="dustbin-container">
                        <button className="my-btn"><img src="/delete.png" className="dustbin-img"></img></button>
                    </div>
                </div>
            </div>


        </div>
    )
}





// const IndexPage = () => {
//     return (
//       <>
//         <div>
//           <title>Real Estate Project Dashboard</title>
//         </div>
//         <div className="container mt-4">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <div className="d-flex align-items-center">
//               <img src="/profile.jpg" alt="Profile Picture" className="rounded-circle mr-2"/>
//               <span>Welcome Vishal Dhakal</span>
//             </div>
//             <button className="btn btn-success">Add New Project</button>
//           </div>
  
//           <div className="mb-4">
//             <h5>Your Projects <span className="badge badge-secondary">20+ Projects (Unsorted)</span></h5>
//             <div className="btn-group btn-group-sm mb-2">
//               <button className="btn btn-outline-secondary">Select City</button>
//               <button className="btn btn-outline-secondary">Select Project Type</button>
//               <button className="btn btn-outline-secondary">Select Status</button>
//             </div>
//           </div>
  
//           <div className="row">
//             <div className="col-md-6 mb-4">
//               <div className="card">
//                 <img src="/project1.jpg" className="card-img-top" alt="Project 1" width={400} height={300} />
//                 <div className="card-body">
//                   <h5 className="card-title">Renovated Apartment</h5>
//                   <p className="card-text">1421 San Pedro St, Los Angeles, CA 90015</p>
//                   <p className="card-text">$13,000/mo</p>
//                   <div className="d-flex justify-content-between">
//                     <button className="btn btn-primary">Preview</button>
//                     <button className="btn btn-secondary">Update</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 mb-4">
//               <div className="card">
//                 <img src="/project2.jpg" className="card-img-top" alt="Project 2" width={400} height={300} />
//                 <div className="card-body">
//                   <h5 className="card-title">Renovated Apartment</h5>
//                   <p className="card-text">1421 San Pedro St, Los Angeles, CA 90015</p>
//                   <p className="card-text">$13,000/mo</p>
//                   <div className="d-flex justify-content-between">
//                     <button className="btn btn-primary">Preview</button>
//                     <button className="btn btn-secondary">Update</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
  
//   export default IndexPage;