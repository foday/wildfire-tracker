import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 
                    'AIzaSyDC5p-kg1eRKy0Vf99ZyYGBuZ4pKUmMqSU' }}
                    >
            </GoogleMapReact>
            
        </div>
    )
}

export default Map
