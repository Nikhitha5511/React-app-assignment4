import React from 'react';


const Body=({quoteData})=>{

    return(
       <div className='quotesSection'>
         <ul >
        {quoteData.map((quote, index) => (
          <li  className='quotesdiv' key={index}>
            <blockquote>
              <p>{quote.quote}</p>
              <footer className="authordetails">{quote.author}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
       </div>
    )
}

export default Body;

