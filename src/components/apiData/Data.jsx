import { Form } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { isLoading, fetchData } from "../../store/actions";

class Data extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: undefined,
            pageCount: null,
        }
    }
    componentDidMount = async () => {
        const { param } = this.props;
        this.props.fetchData(this.props.endpoint, param ? param : "", "GET");
    };

    componentDidUpdate = (prevProps) => {
        if (
            prevProps.endpoint !== this.props.endpoint ||
            prevProps.query !== this.props.query ||
            prevProps.page !== this.props.page ||
            prevProps.queryKey !== this.props.queryKey ||
            prevProps.param !== this.props.param
        ) {
            const { param } = this.props;
            this.props.fetchData(this.props.endpoint, param ? param : "", "GET");
        }
    }

    handleDelete = async (id) => {
        const { endpoint, param } = this.props;
        this.props.fetchData(this.props.endpoint, id, "DELETE");
        if (!this.props.error) {
            this.props.isLoading();
            this.props.fetchData(endpoint);
        }
    };

    render() {
        return this.props.children({ //The React docs say that you can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.
            handleDelete: (id) => this.handleDelete(id)
        })
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
)(Data);