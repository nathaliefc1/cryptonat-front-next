import React from 'react';

export const CryptoTile = () => {

    return (
        <div className="card text-dark bg-light ">
            <div className="card-body">
                <img src="" alt="icon" />
                <h5 className="card-title">Title</h5>
                <div >Rate</div>
                <div >Fluctuation</div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" >
                        select favorite
                        </label>
                </div>
            </div>
        </div>

    )
};
