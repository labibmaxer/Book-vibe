import React from 'react';
import bookimg from  "../assets/hero_img.jpg"
import Allbooks from './Allbooks';
const Home = () => {
    return (
        <div>
            {/* <h1></h1>
             */}
             <div className="hero bg-base-200 mt-30 container mx-auto ">
  <div className="hero-content flex-col lg:flex-row-reverse bg-gray-100 rounded-3xl w-250 justify-between ">
    <img
      alt="Tailwind CSS hero component"
      src={bookimg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div> 
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-success mt-4 text-white ">View the List</button>
    </div>
  </div>
</div>
{/* <h1>Books</h1> */}
<Allbooks></Allbooks>
        </div>
    );
};

export default Home;