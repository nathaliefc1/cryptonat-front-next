import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
    width: 10%;
    margin: 5%;
`

export const CryptoTile = () => {

    return (
        <div className="row">
            <div className="card text-dark bg-light ">
                <div className="card-body">
                    <IMG src="/rocket.png" alt="icon" />
                    <h5 className="card-title">new features coming soon</h5>
                    <div >you want to know the lowest price in one day?</div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            I'll be back soon
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
};

