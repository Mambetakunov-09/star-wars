import  React from 'react';
import './item-list.css'

const Itemlist =() =>{
    return(
    <div className='item-list'>
            <ul className='list-item list-item-flush'>
                <li className='list-group-item'>
                    <span>Luke Skywalker</span>
                </li>
                <li className='list-group-item'>
                    <span>C-3PO</span>
                </li>
                <li className='list-group-item'>
                    <span>R2</span>
                </li>
                <li className='list-group-item'>
                    <span>Darth Vader</span>
                </li>
                <li className='list-group-item'>
                    <span>Leia Organa</span>
                </li>
            </ul>
    </div>

    )
};
export default Itemlist;