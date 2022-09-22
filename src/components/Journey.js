/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Journey(props){
    return(
        <div className="travel--info">
            <img src={props.imgUrl} className="travel--img"/>
            <div className="travel--details">
                <p>
                    <img src="../images/Location-Icon.png" className="location--icon"/>{props.location}
                    <a href= {props.maplink} target="_blank" className="travel--location--link" >View on Google Maps</a>
                </p>
                <h1 className="travel--title">{props.title}</h1>
                <p className="travel--duration">{props.date.startDate} - {props.date.endDate} </p>
                <p className="travel--description">{props.description}</p>
            </div>
        </div>
    )
}