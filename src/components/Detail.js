import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            //state값이 존재하면(정상진입했으면)
            return (
                <div>
                    <span>{location.state.title}</span>
                </div>
            );
        }else{
            return null;
        }
        
    }
}
export default Detail;