import React, { Component } from 'react'
import axios from 'axios'

const SK_API_ARTISTDATES = 'https://api.songkick.com/api/3.0/artists//calendar.json?apikey=E3ZwjI3B1GSjGTe1'
const SK_API_LOCATIONDATES = 'https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey=E3ZwjI3B1GSjGTe1'

const SK_API_LOCALSEARCH = 'https://api.songkick.com/api/3.0/search/locations.json?query=manchester&apikey=E3ZwjI3B1GSjGTe1'
const SK_API_ARTISTSEARCH = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=E3ZwjI3B1GSjGTe1&query='

export class MainComp extends Component {

    async componentDidMount(){
       let test = await axios.get(`${SK_API_LOCALSEARCH}`)
       console.log(test.data)
    }

    render() {
        return (
            <div>
                <h1>Main Component</h1>
            </div>
        )
    }
}

export default MainComp
