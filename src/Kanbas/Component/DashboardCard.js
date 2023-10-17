import React, {Component} from "react";
import {Link} from "react-router-dom";
import {VscNotebook} from "react-icons/vsc";

const DashboardCard = (props) => {
    const a = 0;
    return (
        <div className="d-flex flex-wrap col-12 col-sm-4 col-md-3 col-xl-2">
            <div className="card" style={{margin: "15px 0px 15px 0px"}}>
                <img src="https://via.placeholder.com/300x170/b5d6f7" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text" style={{fontSize: 12}}>
                        <a style={{color: "cornflowerblue", maxWidth: 180}} className="d-inline-block text-truncate" >
                            <Link key={props._id} to={`/Kanbas/Courses/${props.course._id}`} className="list-group-item">
                                {props.course.name || ''}
                            </Link>
                        </a><br/>
                        <a style={{fontSize: 14}}>{props.course.number || ''}</a><br/>
                        <VscNotebook/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard;