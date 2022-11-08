import React from "react";
import PropTypes from 'prop-types';
import { Routes,Route } from "react-router-dom";
import NoteBody from "./NoteBody";
import DetailPage from "../pages/DetailPage";

 function NoteApp() {
    return (
        <>
            <NoteBody/>
            <Routes>
                <Route path="/getInitialData/:id" element={DetailPage}></Route>   
            </Routes>
        </>
    )

 }

    

NoteApp.propTypes = {
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.string,
    title: PropTypes.string.isRequired,
}
export default NoteApp;




