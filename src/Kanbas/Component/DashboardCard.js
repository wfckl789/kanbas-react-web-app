import React, {Component} from "react";
import {Link} from "react-router-dom";
import {VscNotebook} from "react-icons/vsc";

const DashboardCard = (props) => {
    const { onDelete, course, onSetCourse } = props;
    return (
        <div className="d-flex flex-wrap col-12 col-sm-4 col-md-3 col-xl-2">
            <div className="card" style={{margin: "15px 0px 15px 0px"}}>
                <img src="https://via.placeholder.com/300x170/b5d6f7" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text" style={{fontSize: 12}}>
                        <a style={{color: "cornflowerblue"}} className="d-inline-block text-truncate" >
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                {course.name || ''}
                                <button
                                    className="btn btn-sm btn-warning m-1"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onSetCourse(course);
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger m-1"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onDelete(course._id);
                                    }}>
                                    Delete
                                </button>
                            </Link>
                        </a><br/>
                        <a style={{fontSize: 14}}>{course.number || ''}</a><br/>
                        <VscNotebook/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard;