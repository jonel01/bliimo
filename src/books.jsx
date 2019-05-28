/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';

 class books extends Component{
    render(){
        return (
            <div>{
                this.props.items.map((item, i) => {
                    let {title, imageLinks, infoLink, authors, retailPrice} = item.volumeInfo
                    return (
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a href ={infoLink} target = "_blank" key={i} className ="pieces-of-book">
                        <img src ={imageLinks !== undefined? imageLinks.thumbnail : ""} 
                        alt="This Image is Unavailable" style={{backgroundColor: 'white', textAlign:'center'
                        }} className="image-of-book"/>
                        
                        <div className="title-of-book"><b>Title of Book:</b><br></br>{title}<br></br>
                        <b>Author:</b><br></br>{authors}
                        {retailPrice}</div></a>
                        
                    );
                })
            }</div>
        );
    }
}
export default books;