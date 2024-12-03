import React, {Component} from 'react';
// mock的数据
import data from "../Data/Mock"
// 颜色
import {Colors} from '../utility'

import {PaperPlaneOutline, PencilOutline,CloseCircleOutline} from 'react-ionicons'

class PriceList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        // eslint-disable-next-line array-callback-return
                        data.map((item) => {
                            return (
                                <li className="list-group-item d-flex justify-content-between align-items-center"
                                    key={item.id}>
                                   <span className="col-1">
                                      <PaperPlaneOutline
                                          color={'#00000'}
                                          height="25px"
                                          width="25px"
                                      />
                                   </span>
                                    <span className="col-5">
                                        {item.title}
                                   </span>
                                    <span className="col-2">
                                        {(item.category.type === 'income') ? '+' : '-'}
                                        {item.price}元
                                   </span>
                                    <span className="col-2">
                                       {item.date}
                                   </span>
                                    <a className="col-1"
                                       fontSize="20px"
                                       color={'#fff'}
                                    >
                                        <PencilOutline
                                            className="rounded-circle"
                                            style={{backgroundColor: Colors.green, padding: '5px'}}
                                            color={'#00000'}
                                            height="25px"
                                            width="25px"
                                            fontSize="30px"
                                        ></PencilOutline>
                                    </a>
                                    <a className="col-1"
                                       fontSize="20px">
                                        <CloseCircleOutline
                                            className="rounded-circle"
                                            style={{ backgroundColor: Colors.red, padding: '5px'}}
                                            color={'#00000'}
                                            height="25px"
                                            width="25px"
                                            fontSize="30px"
                                        >
                                        </CloseCircleOutline>
                                    </a>
                                </li>
                            )

                        })

                    }
                </ul>
            </div>
        );
    }
}

export default PriceList;
