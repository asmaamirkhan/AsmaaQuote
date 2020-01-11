/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import { db } from '../config';
import Data from './myquotes';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    insert = () => {
        Data.forEach((item, index) => {
            db.collection('quotes').add({
                    "title": item.title,
                    "category": item.category,
                    "content": item.content,
                    "author": item.author
            }).then(function () {
                    console.log("Document successfully written!");
                })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    })

}

render() {
    return (
        <div>
            <button onClick={this.insert}>Insert</button>
        </div>
    );

}
}

export default Content;