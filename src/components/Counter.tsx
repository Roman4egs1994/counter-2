import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'

type CounterPropsType = {
    name: string
}


export const Counter = (props: CounterPropsType) => {


    let count = 0
    const numberValueStart = 0;

    let [counter, setCounter] = useState(count)
    let [numberStart, setNumberStart] = useState(numberValueStart)
    let [error, setError] = useState<null | string>(null)

    const onClickCounterClick = () => {
        setCounter(counter + 1)
    }

    const onClickCounterClickNull = () => {
        setCounter(0)
    }


    let maxValue = 0
    const onChangeInputMax = (event: ChangeEvent<HTMLInputElement>) => {
        maxValue = Number(event.currentTarget.value);
    }


    let startValue = 0
    const onChangeInputStart = (event: ChangeEvent<HTMLInputElement>) => {
        startValue = Number(event.currentTarget.value);
        if (startValue < 0) {
            setError('Incorrect value')
        } else if (startValue >= 0){
            setNumberStart(startValue)
           setError("enter values and press 'set' ")
        }
    }


    const onClickSetButtonStartValue = () => {
        setCounter(numberStart)
        setError('')
    }

    return (
        <>
            <div>
                <h1 className={s.title}>asd</h1>
                <div className={s.wrapper}>
                    <div className={s.counterWrapper}>
                        <div className={s.scoreboard}>
                            <div className={s.valueMax}>
                                <p>max value:</p>
                                <input
                                    className={s.inputMax}
                                    type={"number"}
                                    onChange={onChangeInputMax}
                                />
                            </div>
                            <div className={s.valueStart}>
                                <p>start value:</p>
                                <input className={error  ? s.errorInputStart : s.inputStart}
                                       type={"number"}
                                       onChange={onChangeInputStart}
                                />
                            </div>
                        </div>

                        <div className={s.wrapperButtons}>
                            <Button disabled={true} className={s.setButton} nameButton={'set'} callBack={onClickSetButtonStartValue}/>
                        </div>

                    </div>
                </div>
            </div>


            <div className={s.back}>
                <h1 className={s.title}>{props.name}</h1>
                <div className={s.wrapper}>
                    <div className={s.counterWrapper}>
                        <div className={s.scoreboard}>
                            {/*<div className={counter >= 5 ? s.counterNumberFive : s.counterNumber}>*/}
                            {/*    {counter}*/}
                            {/*    <div className={s.error}>{error}</div>*/}
                            {/*</div>*/}


                            {error && <div className={s.error}>{error}</div>}
                            {error === '' && <div className={s.counterNumber}>{counter}</div>}



                        </div>

                        <div className={s.wrapperButtons}>
                            <Button
                                disabled={counter >= 5 ? true : false}
                                className={s.setButton}
                                nameButton={'inc'}
                                callBack={onClickCounterClick}
                            />

                            <Button
                                disabled={counter <= 0 ? true : false}
                                className={s.setButton1}
                                nameButton={'reset'}
                                callBack={onClickCounterClickNull}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>


    );
};

