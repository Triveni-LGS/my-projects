import React from "react";

const Products = ({data}) => {
    return(
        <div>
        <div className="row">
        {data.map(data => (
                    <div key={data.recipe.label} className="col-md-4">
                        <div className='card' style={{ width: '18rem' }}>
                            <img className="card-img-top" src={data.recipe.image} alt='card image cap' />
                            <div className='card-body'>
                                <center>
                                    <h5 className='card-title'>{data.recipe.label}</h5>
                                    <p className='card-text'>Total Amount of Calories : {Math.round(data.recipe.calories)}</p>
                                    <a href={data.recipe.url} className='btn btn-primary'>View Recipe</a>
                                </center>
                            </div>
                        </div>
                    </div>
                ))}
             
        </div>
        </div>
    )
}
export default Products