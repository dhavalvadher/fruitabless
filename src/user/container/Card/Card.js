// import React from 'react';

// function Card(props) {
//     return (
//         <div>
//            <div>
//   {/* Single Page Header start */}
//   <div className="container-fluid page-header py-5">
//     <h1 className="text-center text-white display-6">Cart</h1>
//     <ol className="breadcrumb justify-content-center mb-0">
//       <li className="breadcrumb-item"><a href="#">Home</a></li>
//       <li className="breadcrumb-item"><a href="#">Pages</a></li>
//       <li className="breadcrumb-item active text-white">Cart</li>
//     </ol>
//   </div>
//   {/* Single Page Header End */}
//   {/* Cart Page Start */}
//   <div className="container-fluid py-5">
//     <div className="container py-5">
//       <div className="table-responsive">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Products</th>
//               <th scope="col">Name</th>
//               <th scope="col">Price</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Total</th>
//               <th scope="col">Handle</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">
//                 <div className="d-flex align-items-center">
//                   <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
//                 </div>
//               </th>
//               <td>
//                 <p className="mb-0 mt-4">Big Banana</p>
//               </td>
//               <td>
//                 <p className="mb-0 mt-4">2.99 $</p>
//               </td>
//               <td>
//                 <div className="input-group quantity mt-4" style={{width: 100}}>
//                   <div className="input-group-btn">
//                     <button className="btn btn-sm btn-minus rounded-circle bg-light border">
//                       <i className="fa fa-minus" />
//                     </button>
//                   </div>
//                   <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
//                   <div className="input-group-btn">
//                     <button className="btn btn-sm btn-plus rounded-circle bg-light border">
//                       <i className="fa fa-plus" />
//                     </button>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <p className="mb-0 mt-4">2.99 $</p>
//               </td>
//               <td>
//                 <button className="btn btn-md rounded-circle bg-light border mt-4">
//                   <i className="fa fa-times text-danger" />
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <th scope="row">
//                 <div className="d-flex align-items-center">
//                   <img src="img/vegetable-item-5.jpg" className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
//                 </div>
//               </th>
//               <td>
//                 <p className="mb-0 mt-4">Potatoes</p>
//               </td>
//               <td>
//                 <p className="mb-0 mt-4">2.99 $</p>
//               </td>
//               <td>
//                 <div className="input-group quantity mt-4" style={{width: 100}}>
//                   <div className="input-group-btn">
//                     <button className="btn btn-sm btn-minus rounded-circle bg-light border">
//                       <i className="fa fa-minus" />
//                     </button>
//                   </div>
//                   <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
//                   <div className="input-group-btn">
//                     <button className="btn btn-sm btn-plus rounded-circle bg-light border">
//                       <i className="fa fa-plus" />
//                     </button>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <p className="mb-0 mt-4">2.99 $</p>
//               </td>
//               <td>
//                 <button className="btn btn-md rounded-circle bg-light border mt-4">
//                   <i className="fa fa-times text-danger" />
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <th scope="row">
//                 <div className="d-flex align-items-center">
//                   <img src="img/vegetable-item-2.jpg" className="img-fluid me-5 rounded-circle" style={{width: 80, height: 80}} alt />
//                 </div>
//               </th>
//               <td>
//                 <p className="mb-0 mt-4">Awesome Brocoli</p>
//               </td>
//               <td>
//                 <p className="mb-0 mt-4">2.99 $</p>
//               </td>
//               <td>
//                 <div className="input-group quantity mt-4" style={{width: 100}}>
//                   <div className="input-group-btn">
//                     <button className="btn btn-sm btn-minus rounded-circle bg-light border">
//                       <i className="fa fa-minus" />
//                     </button>
//                   </div>
//                   <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
//                   <div className="input-group-btn">
//                     <button className="btn btn-sm btn-plus rounded-circle bg-light border">
//                       <i className="fa fa-plus" />
//                     </button>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <p className="mb-0 mt-4">2.99 $</p>
//               </td>
//               <td>
//                 <button className="btn btn-md rounded-circle bg-light border mt-4">
//                   <i className="fa fa-times text-danger" />
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-5">
//         <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
//         <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
//       </div>
//       <div className="row g-4 justify-content-end">
//         <div className="col-8" />
//         <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
//           <div className="bg-light rounded">
//             <div className="p-4">
//               <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
//               <div className="d-flex justify-content-between mb-4">
//                 <h5 className="mb-0 me-4">Subtotal:</h5>
//                 <p className="mb-0">$96.00</p>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <h5 className="mb-0 me-4">Shipping</h5>
//                 <div className>
//                   <p className="mb-0">Flat rate: $3.00</p>
//                 </div>
//               </div>
//               <p className="mb-0 text-end">Shipping to Ukraine.</p>
//             </div>
//             <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
//               <h5 className="mb-0 ps-4 me-4">Total</h5>
//               <p className="mb-0 pe-4">$99.00</p>
//             </div>
//             <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Cart Page End */}
// </div>

            
//         </div>
//     );
// }

// export default Card;






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Shop(props) {

//     const [fruitsData, setFruitsData] = useState([]);
//     const [price, setPrice] = useState("");
//     const [type, settype] = useState("");


//     const getData = async () => {
//         try {
//             const response = await fetch("http://localhost:8000/fruits");
//             const data = await response.json();

//             let filteredData = data;
//             console.log(filteredData);
//             if (price !== "") {
//                 filteredData = filteredData.filter((v) => v.price < parseInt(price));
//             }
//             if (type !== "") {
//                 filteredData = filteredData.filter((v) => v.type === type);
//             }

//             console.log(type);
//             setFruitsData(filteredData);
//         } catch (error) {
//             console.log(error.message);
//         }
//     }

//     useEffect(() => {
//         getData();
//     }, [price, type])

    
//     // const handleData = () => {

//     //     const filteredDatas = fruitsData;

//     //     if (type !== "") {
//     //         filteredDatas = filteredDatas.filter((v) => v.type === type);
//     //     }

//     //     return filteredDatas;
//     // }

//     // const fruiteDatas = handleData();
//     return (
//         <div>

//             {/* Fruits Shop Start*/}
//             <div className="container-fluid fruite py-5">
//                 <div className="container py-5">
//                     <h1 className="mb-4">Fresh fruits shop</h1>
//                     <div className="row g-4">
//                         <div className="col-lg-12">
//                             <div className="row g-4">
//                                 <div className="col-xl-3">
//                                     <div className="input-group w-100 mx-auto d-flex">
//                                         <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
//                                         <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
//                                     </div>
//                                 </div>
//                                 <div className="col-6" />
//                                 <div className="col-xl-3">
//                                     <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
//                                         <label htmlFor="fruits">Default Sorting:</label>
//                                         <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
//                                             <option value="volvo">Nothing</option>
//                                             <option value="saab">Popularity</option>
//                                             <option value="opel">Organic</option>
//                                             <option value="audi">Fantastic</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row g-4">
//                                 <div className="col-lg-3">
//                                     <div className="row g-4">
//                                         <div className="col-lg-12">
//                                             <div className="mb-3">
//                                                 <h4>Categories</h4>
//                                                 <ul className="list-unstyled fruite-categorie">
//                                                     <li>
//                                                         <div className="d-flex justify-content-between fruite-name">
//                                                             <a href="#"><i className="fas fa-apple-alt me-2" />Apples</a>
//                                                             <span>(3)</span>
//                                                         </div>
//                                                     </li>
//                                                     <li>
//                                                         <div className="d-flex justify-content-between fruite-name">
//                                                             <a href="#"><i className="fas fa-apple-alt me-2" />Oranges</a>
//                                                             <span>(5)</span>
//                                                         </div>
//                                                     </li>
//                                                     <li>
//                                                         <div className="d-flex justify-content-between fruite-name">
//                                                             <a href="#"><i className="fas fa-apple-alt me-2" />Strawbery</a>
//                                                             <span>(2)</span>
//                                                         </div>
//                                                     </li>
//                                                     <li>
//                                                         <div className="d-flex justify-content-between fruite-name">
//                                                             <a href="#"><i className="fas fa-apple-alt me-2" />Banana</a>
//                                                             <span>(8)</span>
//                                                         </div>
//                                                     </li>
//                                                     <li>
//                                                         <div className="d-flex justify-content-between fruite-name">
//                                                             <a href="#"><i className="fas fa-apple-alt me-2" />Pumpkin</a>
//                                                             <span>(5)</span>
//                                                         </div>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <div className="mb-3">
//                                                 <h4 className="mb-2">Price</h4>
//                                                 <input type="range" onChange={(event) => setPrice(event.target.value)} className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={10} defaultValue={0} oninput="amount.value=rangeInput.value" />
//                                                 <output id="amount" name="amount" min-velue={0} max-value={10} htmlFor="rangeInput">0</output>
                                                
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <div className="mb-3">
//                                                 <h4>Additional</h4>

//                                                 <div></div>
//                                                 <div className="mb-2">
//                                                     <input type="radio" onChange={(event) => settype(event.target.value)} className="me-2" id="Categories-1" name="Categories-1" defaultValue="Beverages" />
//                                                     <label htmlFor="Categories-1"> Organic</label>
//                                                 </div>
//                                                 <div className="mb-2">
//                                                     <input type="radio"onChange={(event) => settype(event.target.value)} className="me-2" id="Categories-2" name="Categories-1" defaultValue="Beverages" />
//                                                     <label htmlFor="Categories-2"> Fresh</label>
//                                                 </div>
//                                                 <div className="mb-2">
//                                                     <input type="radio"onChange={(event) => settype(event.target.value)} className="me-2" id="Categories-3" name="Categories-1" defaultValue="Beverages" />
//                                                     <label htmlFor="Categories-3"> Sales</label>
//                                                 </div>
//                                                 <div className="mb-2">
//                                                     <input type="radio"onChange={(event) => settype(event.target.value)} className="me-2" id="Categories-4" name="Categories-1" defaultValue="Beverages" />
//                                                     <label htmlFor="Categories-4"> Discount</label>
//                                                 </div>
//                                                 <div className="mb-2">
//                                                     <input type="radio" onChange={(event) => settype(event.target.value)}className="me-2" id="Categories-5" name="Categories-1" defaultValue="Beverages" />
//                                                     <label htmlFor="Categories-5"> Expired</label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <h4 className="mb-3">Featured products</h4>
//                                             <div className="d-flex align-items-center justify-content-start">
//                                                 <div className="rounded me-4" style={{ width: 100, height: 100 }}>
//                                                     <img src="img/featur-1.jpg" className="img-fluid rounded" alt />
//                                                 </div>
//                                                 <div>
//                                                     <h6 className="mb-2">Big Banana</h6>
//                                                     <div className="d-flex mb-2">
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star" />
//                                                     </div>
//                                                     <div className="d-flex mb-2">
//                                                         <h5 className="fw-bold me-2">2.99 $</h5>
//                                                         <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="d-flex align-items-center justify-content-start">
//                                                 <div className="rounded me-4" style={{ width: 100, height: 100 }}>
//                                                     <img src="img/featur-2.jpg" className="img-fluid rounded" alt />
//                                                 </div>
//                                                 <div>
//                                                     <h6 className="mb-2">Big Banana</h6>
//                                                     <div className="d-flex mb-2">
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star" />
//                                                     </div>
//                                                     <div className="d-flex mb-2">
//                                                         <h5 className="fw-bold me-2">2.99 $</h5>
//                                                         <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="d-flex align-items-center justify-content-start">
//                                                 <div className="rounded me-4" style={{ width: 100, height: 100 }}>
//                                                     <img src="img/featur-3.jpg" className="img-fluid rounded" alt />
//                                                 </div>
//                                                 <div>
//                                                     <h6 className="mb-2">Big Banana</h6>
//                                                     <div className="d-flex mb-2">
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star text-secondary" />
//                                                         <i className="fa fa-star" />
//                                                     </div>
//                                                     <div className="d-flex mb-2">
//                                                         <h5 className="fw-bold me-2">2.99 $</h5>
//                                                         <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="d-flex justify-content-center my-4">
//                                                 <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <div className="position-relative">
//                                                 <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt />
//                                                 <div className="position-absolute" style={{ top: '50%', right: 10, transform: 'translateY(-50%)' }}>
//                                                     <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-9">
//                                     <div className="row g-4 justify-content-center">
//                                         {
//                                             fruitsData.map((v) => (
//                                                 <div className="col-md-6 col-lg-6 col-xl-4">
//                                                     <Link to={/shop/${v.id}}>
//                                                     <div className="rounded position-relative fruite-item">
//                                                         <div className="fruite-img">
//                                                             <img src={v.image} className="img-fluid w-100 rounded-top" alt />
//                                                         </div>
//                                                         <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>Fruits</div>
//                                                         <div className="p-4 border border-secondary border-top-0 rounded-bottom">
//                                                             <h4>{v.name}</h4>
//                                                             <p>{v.description}</p>
//                                                             <p>{v.type}</p>
//                                                             <div className="d-flex justify-content-between flex-lg-wrap">
//                                                                 <p className="text-dark fs-5 fw-bold mb-0">${v.price} / kg</p>
//                                                                 <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     </Link>
//                                                 </div>
//                                             ))
//                                         }

//                                         <div className="col-12">
//                                             <div className="pagination d-flex justify-content-center mt-5">
//                                                 <a href="#" className="rounded">«</a>
//                                                 <a href="#" className="active rounded">1</a>
//                                                 <a href="#" className="rounded">2</a>
//                                                 <a href="#" className="rounded">3</a>
//                                                 <a href="#" className="rounded">4</a>
//                                                 <a href="#" className="rounded">5</a>
//                                                 <a href="#" className="rounded">6</a>
//                                                 <a href="#" className="rounded">»</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Fruits Shop End*/}

//         </div>
//     );
// }

// export default Shop;