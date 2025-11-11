import React from 'react';
import styles from '../style.module.scss';
import fbIcon from '@icons/svgs/facebook.svg';
import instaIcon from '@icons/svgs/insta.svg';
import ytbIcon from '@icons/svgs/ytb.svg';

const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;
    const handleIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'insta':
                return instaIcon;
            case 'ytb':
                return ytbIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleIcon(type)} alt={type} />
        </div>
    );
};

export default BoxIcon;
