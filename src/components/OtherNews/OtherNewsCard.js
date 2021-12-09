import React from 'react';

const OtherNewsCard = (props) => {
    const { title, urlToImage} = props.otherNews;
    return (
        <div onClick={()=>props.onOtherNewsSelected(props.otherNews)}>
            <div  class="card mb-3" style={{maxWidth: "440px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={urlToImage} class="img-fluid rounded-start"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherNewsCard;