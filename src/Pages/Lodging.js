import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Error from "../_utils/Error";
import SlideShow from "../components/SlideShow/SlideShow";
import Title from "../components/Title&SubTitle/Title";
import "./Lodging.scss";
import Profile from "../components/Profile/Profile";
import Tags from "../components/Tags/Tags";
import StarRating from "../components/StarRating/StarRating";
import Collapser from "../components/Collapser/Collapser";

const Lodging = ({ apparts }) => {
    const { lodgingId } = useParams();
    const lodging = apparts.find((lodging) => lodging.id === lodgingId);

    return lodging ? (
        <div>
            <SlideShow slides={lodging.pictures} />

            <div className="lodging_info_block">
                <div className="lodging_titles">
                    <Title
                        titles={lodging.title}
                        locations={lodging.location}
                    />
                    <Tags tags={lodging.tags} />
                </div>
                <div className="profile_main_block">
                    <Profile profile={lodging.host} />
                    <StarRating stars={lodging.rating} />
                </div>
            </div>

            <div className="collapse_block">
                <Collapser title='Description' content={lodging.description}/>
                <Collapser title='Équipements' content={lodging.equipments.map((equipment, i) => (
                    <li key={i}>{equipment}</li>
                ))}/>
            </div>
        </div>
    ) : (
        <Navigate to="/error" replace={<Error />} />
    );
};

export default Lodging;
