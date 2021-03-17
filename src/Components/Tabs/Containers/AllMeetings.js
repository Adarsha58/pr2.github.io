import React, {Component}  from 'react';
import Meeting from './Meeting';
import axios from 'axios';
import CreateMeetings from './CreateMeetings';

const urlEndPoint = "http://localhost:5000/tasks";
class AllMeetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          meetings: [] ,
          updateForm: false,
          updateDefaultValues: null,
        };
    }

    updateHandler = async (e, updatedValues) => {
        await axios.put(`${urlEndPoint}/${this.state.updateDefaultValues.id}`, updatedValues).then(async res => {
            this.setState({updateForm: false, updateDefaultValues: null});
        });
        await this.fetch();
    }

    handleDoubleClick = (event, meeting) => {
        console.log('click detected');
        console.log(event.detail);
        if(event.detail === 2) {
            this.setState({updateForm:true, updateDefaultValues:meeting});

        }
    }

    componentDidMount() {
        this.fetch();
    }

   

    fetch = async () => {
        await axios.get(urlEndPoint).then(async (res) => {
            const data = await res.data;
            this.setState({meetings: data});  
        })
    } 

    handleDelete = async (event, id) => {
        event.preventDefault();
        await axios.delete(`${urlEndPoint}/${id}`).then(async res => {
            this.setState(previousState => {
                return {
                    meetings: previousState.meetings.filter(m => m.id !== id)
                }
            })
        })
    }
    render() {
        let defaultUpdateFormValues = null;
        if(this.state.updateForm) {
            defaultUpdateFormValues = {
                title: this.state.updateDefaultValues.title,
                date: this.state.updateDefaultValues.day,
                zoomLink: this.state.updateDefaultValues.textInfor,
                important: this.state.updateDefaultValues.important
            }
        }

        return(
            <div className='allMeetings'>
                {
                    this.state.meetings.length > 0 ? this.state.meetings.map((meeting, index) => {
                        return (<Meeting key={index} {...meeting} clickHandler={this.handleDelete} handleDoubleClick={this.handleDoubleClick} index = {index}/> );
                    }) : <h3>No Meetings Scheduled!</h3>      
                }

                {this.state.updateForm ? <CreateMeetings key={this.state.updateDefaultValues.id} updateHandler={this.updateHandler} {... defaultUpdateFormValues}/> : null}        
            </div>
        );
    }
}

export default AllMeetings;