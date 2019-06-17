import React from "react";

const UserOutputComp = (props) => {
    const style = {
        color: 'green',
        border: '1px dashed magenta',
        cursor: 'pointer',
    };

    const lookup = () => {
        let url = `https://st2.depositphotos.com/2697407/9174/v/950/depositphotos_91740450-stock-illustration-get-a-life-motivational-poster.jpg`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <p style={style} onClick={lookup}>{props.name}</p>
        </div>
    );
}

export default UserOutputComp;