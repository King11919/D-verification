import { useEffect, useState } from "react";
import Axios from "axios";
import { ROOT_URL } from "../../../App";
import { showNotification } from "../../../util/notification";
import { Modules } from "./styles";

export const Templatedashboard = ({ setActiveKey }) => {
    const BASE_URL = `${ROOT_URL}/constructor`;

    const [collegesCount, setCollegesCount] = useState(0);
    const [companiesCount, setCompaniesCount] = useState(0);

    const fetchDashboardData = () => {
        Axios.get(`${BASE_URL}/dashboard`, {})
            .then((res) => {
                setCollegesCount(res.data.collegesCount);
                setCompaniesCount(res.data.companiesCount);
                showNotification(
                    "Stats Success",
                    "Data Fetched successfully",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
                showNotification("Server Error", "Internal Server Error", "error");
            });
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return (



        <section class="projects no-padding-top">
            <div class="container-fluid">

            <div class="project p-2">
                    <div class="row bg-white has-shadow">
                        <div class=" col-lg-12 d-flex align-items-center justify-content-between">
                            <div class="project-title d-flex align-items-center">
                                <div class="image has-shadow"><img src="https://d19m59y37dris4.cloudfront.net/admin/1-4-5/img/project-1.jpg" alt="..." class="img-fluid" /></div>
                                <div class="text ml-3">
                                    <h3 class="h4 "></h3><div>Name</div>

                                    <small>Certificate Id</small>
                                </div>
                                <div class="text  ml-5" style={{ display: "flex", justifyContent: "center" }}>
                                    <h3 class="h4">Data Base Managment System</h3>
                                </div>

                            </div>



                            <div class="project-date"><span class="">


                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                        Delete
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                                        Share
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                        Export
                                    </button>
                                    &nbsp;
                                </div>


                            </span></div>
                        </div>

                    </div>
                </div>

                <div class="project p-2">
                    <div class="row bg-white has-shadow">
                        <div class=" col-lg-12 d-flex align-items-center justify-content-between">
                            <div class="project-title d-flex align-items-center">
                                <div class="image has-shadow"><img src="https://d19m59y37dris4.cloudfront.net/admin/1-4-5/img/project-1.jpg" alt="..." class="img-fluid" /></div>
                                <div class="text ml-3">
                                    <h3 class="h4 "></h3><div>Name</div>

                                    <small>Certificate Id</small>
                                </div>
                                <div class="text  ml-5" style={{ display: "flex", justifyContent: "center" }}>
                                    <h3 class="h4">Data Base Managment System</h3>
                                </div>

                            </div>



                            <div class="project-date"><span class="">


                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                        Delete
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                                        Share
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                        Export
                                    </button>
                                    &nbsp;
                                </div>


                            </span></div>
                        </div>

                    </div>
                </div>

                <div class="project p-2">
                    <div class="row bg-white has-shadow">
                        <div class=" col-lg-12 d-flex align-items-center justify-content-between">
                            <div class="project-title d-flex align-items-center">
                                <div class="image has-shadow"><img src="https://d19m59y37dris4.cloudfront.net/admin/1-4-5/img/project-1.jpg" alt="..." class="img-fluid" /></div>
                                <div class="text ml-3">
                                    <h3 class="h4 "></h3><div>Name</div>

                                    <small>Certificate Id</small>
                                </div>
                                <div class="text  ml-5" style={{ display: "flex", justifyContent: "center" }}>
                                    <h3 class="h4">Data Base Managment System</h3>
                                </div>

                            </div>



                            <div class="project-date"><span class="">


                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                        Delete
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                                        Share
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                        Export
                                    </button>
                                    &nbsp;
                                </div>


                            </span></div>
                        </div>

                    </div>
                </div>

                <div class="project p-2">
                    <div class="row bg-white has-shadow">
                        <div class=" col-lg-12 d-flex align-items-center justify-content-between">
                            <div class="project-title d-flex align-items-center">
                                <div class="image has-shadow"><img src="https://d19m59y37dris4.cloudfront.net/admin/1-4-5/img/project-1.jpg" alt="..." class="img-fluid" /></div>
                                <div class="text ml-3">
                                    <h3 class="h4 "></h3><div>Name</div>

                                    <small>Certificate Id</small>
                                </div>
                                <div class="text  ml-5" style={{ display: "flex", justifyContent: "center" }}>
                                    <h3 class="h4">Data Base Managment System</h3>
                                </div>

                            </div>



                            <div class="project-date"><span class="">


                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                        Delete
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                                        Share
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                        Export
                                    </button>
                                    &nbsp;
                                </div>


                            </span></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    );
};

export default Templatedashboard;































