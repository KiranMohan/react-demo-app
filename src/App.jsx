import React from 'react';
import PropTypes from 'prop-types';
import CheckCircle from './icons/check_circle_outline-24px.svg';
import './style/common.css';

const App = ({ title }) => (
    <div>
        <div>{title}</div>
        <button type="button">
            {/* SVG icon with some onHover styling */}
            <CheckCircle className="blueIconOnHover" />
        </button>
    </div>
);

App.propTypes = {
    title: PropTypes.string,
};

export default App;
