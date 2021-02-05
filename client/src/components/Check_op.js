import React from 'react'
import style from './Check_op.module.css'


const Check_op = () => { 
    return ( 
        <div className={style.Check_op}>
            <form>
            <div>
            <div>대여 기간</div>
            <input type="date"/>
            </div>

            <div>
            <div>대여 수량</div>
                <select name="job">
                    <option value="">대여 수량</option>
                    <option value="1" selected="selected">1</option>
                    <option value="2" >2</option>
                    <option value="3">3</option>
                </select>
            </div>
            </form>
        </div>
    ); 
} 
export default Check_op;

