import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, isLoading } from "../../store/actions";
class UpdateData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            singleData: this.props.singleData || {},
        };
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const { endpoint, method, fetchData, closeModal, param } = this.props;
        console.log("response", this.state.data);
        delete this.state.singleData._id;
        this.props.fetchData(
            endpoint,
            param ? param : "",
            method,
            this.state.singleData
        );
        if (!this.props.error) {
            closeModal();
            this.props.isLoading();
            this.props.fetchData(endpoint);
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
        const { singleData } = this.state;
        return React.cloneElement(this.props.children, {
            state: this.state,
            setData: (state) =>
                this.setState({ singleData: { ...singleData, ...state } }),
            onSubmit: (e) => this.onSubmit(e),

            ...this.state,
        });
    }
}

export default connect(
    (state) => ({ ...state }),
    (dispatch) => ({
        fetchData: (endpoint, id, method, body, params) => {
            dispatch(fetchData(endpoint, id, method, body, params));
        },
        isLoading: () => {
            dispatch(isLoading());
        },
    })
)(UpdateData);