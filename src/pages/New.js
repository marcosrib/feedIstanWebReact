import React, { Component } from 'react'
import './new.css'
import api from '../services/Api';
class New extends Component {

    state = {
        image: null,
        author: "",
        descriptions: "",
        hashtags: "",
        place: ""
    }

    handleSubmit =  async e => {
        e.preventDefault();
        
        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('descriptions', this.state.descriptions);
        data.append('hashtags', this.state.hashtags);
        data.append('place', this.state.place);
        console.log(data); 
        
        await api.post('posts', data)

        this.props.history.push('/') 



    }

    handleImageChange = e => {
        console.log(e.target.files[0]);
        
        this.setState({ image: e.target.files[0] })
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file"  onChange={this.handleImageChange}/>

                <input
                    type="text"
                    name="author"
                    placeholder="author do post"
                    onChange={this.handleChange}
                    value={this.state.author}
                />
                <input
                    type="text"
                    name="place"
                    placeholder="local do post"
                    onChange={this.handleChange}
                    value={this.state.place}
                />
                <input
                    type="text"
                    name="descriptions"
                    placeholder="descriptions do post"
                    onChange={this.handleChange}
                    value={this.state.descriptions}
                />
                <input
                    type="text"
                    name="hashtags"
                    placeholder="hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default New