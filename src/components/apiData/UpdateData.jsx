import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, stopLoading } from "../../store/actions";
import { withRouter } from "react-router-dom";
class UpdateData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setSingleData: this.props.setSingleData || {},
        };
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const { endpoint, method, fetchData, closeModal, param, stopLoading } = this.props;
        console.log("response", this.state.data);
        delete this.state.setSingleData._id;
        this.props.fetchData(
            endpoint,
            param ? param : "",
            method,
            this.state.setSingleData
        );
        if (!this.props.error) {
            closeModal();
            stopLoading();
            fetchData(endpoint, param ? param : "", "GET");
            //this.props.history.push("/")
        }

        // let response = await fetch(param? endpoint+param : endp, {
        //   method: method,
        //   body: JSON.stringify(this.state.data),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        //
        // if (response.ok) {
        //   // let data = await response.json();
        //   // console.log(data);
        //   // this.setState({
        //   //   id: data.id,
        //   // });
        //   console.log(response);
        //   closeModal();
        //   fetchData();
        // } else {
        //   let error = await response.json();
        //   console.log(error);
        // }
    };

    render() {
        const { setSingleData } = this.state;
        // For clonning each elements with new props
        return React.cloneElement(this.props.children, {
            state: this.state,
            setData: (state) =>
                this.setState({ setSingleData: { ...setSingleData, ...state } }),
            onSubmit: (e) => this.onSubmit(e),

            ...this.state,
        });
    }
}

export default withRouter(connect(
    (state) => ({ ...state }),
    (dispatch) => ({
        fetchData: (endpoint, id, method, body, params) => {
            dispatch(fetchData(endpoint, id, method, body, params));
        },
        stopLoading: () => {
            dispatch(stopLoading());
        },
    })
)(UpdateData));