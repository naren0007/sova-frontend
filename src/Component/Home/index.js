import React from 'react'
import HealthyDiet from "../../assets/images/healthy-diet.webp";
import HealthGoal from "../../Data/healthGoal.json";

export default function Home() {
    return (
        <>
            {/* banner */}
            <section className="bannerContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <div className="bannerImage">
                                <img src={HealthyDiet} className="img-fluid" width="455" height="370" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-flex align-items-center">
                            <div className="bannerContent text-white">
                                <h1>Discover a Healthier You</h1>
                                <h5 className="my-4">Get a personalized nutrition program based on your lifestyle, habits and blood analysis.</h5>
                                <button type="button" className="btn-white mt-3">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* we help you acheive your  health goal */}
            <section className="healthGoal my-5 ">
                <div className="container">
                    <h2 className="headStyle d-inline-block">WE HELP YOU ACHIEVE YOUR HEALTH GOALS</h2>
                    <div className="row mt-5">
                        {HealthGoal.map((goal) => (
                            <div className="col-md-6 col-lg-4">
                                <div className="goalList text-center">
                                    <i className={`fas ${goal.icon}`} ></i>
                                    <h4 className="mt-4">{goal.title}</h4>
                                    <p className="mt-0">{goal.discription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
