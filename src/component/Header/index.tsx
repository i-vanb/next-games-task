'use client';
import styles from './Header.module.css';
import {useState} from "react";
import {OptionData} from "@/component/CSelect/props.type";
import Select from "@/component/CSelect";

const options = [
    {id: 1, value: 'account'},
    {id: 2, value: 'wallet'},
    {id: 3, value: 'bonuses'},
    {id: 4, value: 'bets'},
    {id: 5, value: 'history'},
];

const Header = () => {
    const [current, setCurrent] = useState(options[0]);

    const setOption = (option: OptionData) => setCurrent(option);

    return (
        <div className={styles.wrapper}>
            <Select options={options} onChange={setOption} current={current} />
        </div>
    )
}

export default Header;