
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
                <div className="fw-bolder fs-3 mx-1">Your Projects</div>
                <div className="mx-3">[20+ Projects Uploaded]</div>
                
                <div className="dropdown mx-3 py-2 dropdown-width">
                    <select id="city" name="city" className="form-control " >
                    <label>sagar</label>
                        <option value="" disabled selected>Select City </option>
                        <option value="All" >All</option>
                        <option value="saab">NJ</option>
                        <option value="fiat">NY</option>
                        <option value="audi">NH</option>
                    </select>
                   
                </div>
                <div className="dropdown mx-3 dropdown-width">
                    <select id="city" name="city" className="form-control py-2">
                        <option value="" disabled selected>Select Project Type</option>
                        <option value="All">All</option>
                        <option value="saab">Labourlyy</option>
                        <option value="fiat">6 designs</option>
                        <option value="audi">and so on</option>
                    </select>
                </div>
                <div className="dropdown mx-3 dropdown-width">
                    <select id="city" name="city" className="form-control py-2">
                        <option value="" disabled selected>Select Status</option>
                        <option value="All">All</option>
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
                <button type="button" className="btn btn-bluegreen-outline mx-2">Preview <span className="bluegreen fw-bolder">&gt;</span></button>

                <button type="button" className="btn btn-black-outline mx-2">Update <span className="fw-bolder">&gt;</span></button>
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
                <button type="button" className="btn btn-bluegreen-outline mx-2">Preview <span className="bluegreen fw-bolder">&gt;</span></button>

                <button type="button" className="btn btn-black-outline mx-2">Update <span className="fw-bolder">&gt;</span></button>
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