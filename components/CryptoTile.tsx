import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    
`

export const CryptoTile = (/*title, rate, fluctuation*/) => {

    return (
        <Row className="row">
            <div className="card text-dark bg-light ">
                <div className="card-body">
                    <img src="" alt="icon" />
                    <h5 className="card-title">title</h5>
                    <div >rate</div>
                    <div >fluctuation</div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            select favorite
                        </label>
                    </div>
                </div>
            </div>
        </Row>

    )
};

