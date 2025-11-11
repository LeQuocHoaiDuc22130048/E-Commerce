import React from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcons, dataMenus } from './constants';
import styles from './style.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/imgs/Logo-Owen-Slogan-1.png';
import ReloadIcon from '@icons/svgs/reload.svg';
import HeartIcon from '@icons/svgs/heart.svg';
import CartIcon from '@icons/svgs/cart.svg';

const Header = () => {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container
    } = styles;

    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcons.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenus.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenus.slice(3, dataMenus.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>

                    <div className={containerBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={ReloadIcon}
                            alt='Reload'
                        />
                        <img
                            width={26}
                            height={26}
                            src={HeartIcon}
                            alt='Heart'
                        />
                        <img width={26} height={26} src={CartIcon} alt='Cart' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
