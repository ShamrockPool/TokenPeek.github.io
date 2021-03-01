import React from 'react';
import { Col, Row, Form, Input, Pagination, PaginationItem, PaginationLink, Table, Button, Card, CardBody, CardHeader } from 'reactstrap';
import _ from 'lodash';
import { isEmpty } from 'utils/stringutil.js';
import Scroll from './Scroll';
import Token from 'components/Token';

import TokenData from 'assets/fakeTokenJSON.json';

import { Collapse } from 'react-collapse';
import { FormGroup, FormControlLabel, Switch, Checkbox } from '@material-ui/core';
const WAIT_INTERVAL = 750
let queryParams = {
    "poolid": "",
    "ticker": "",
    "name": "",
    "description": "",
    "blockfrom": "",
    "blockto": "",
    "marginfrom": "",
    "marginto": "",
    "pledgefrom": "",
    "pledgeto": "",
    "costfrom": "",
    "costto": "",
    "activestakefrom": "",
    "activestaketo": "",
    "location": ""
};

const sid = Math.floor(Math.random() * 100) + Date.now()


export default class FetchTokenList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: null,
            loading: true,
            baseUrl: "https://poolpeek.com/api.asp?k=838967e9-940b-42db-8485-5f82a72a7e17&sid=" + sid,
            baseQuery: "",
            searchQuery: "",
            currentPage: 0,
            pageCount: 0,
            tokens: null,
            //search params
            name: ""

        };
    }
    handleChange = (query) => (e) => {


        if (query === "&name=") {
            queryParams.name = query + e.target.value;
            this.setState({ name: e.target.value });
        }

        clearTimeout(this.inputTimer);
        this.inputTimer = setTimeout((e) => {

            var allQueryParams = "";
            this.mapObject(queryParams, function (key, value) {
                if (value !== "") {
                    allQueryParams += value;
                }
            })

            if (allQueryParams) {
                this.state.searchQuery = allQueryParams;
                this.getTokenList(this.state.baseUrl + this.state.baseQuery + this.state.searchQuery);
            }
        }, WAIT_INTERVAL);
    }


    async componentDidMount() {

        await this.getTokenList(this.state.baseUrl + this.state.baseQuery);
    }

    async getTokenList(query) {

        this.setState({ tokens: {}, loading: true })
        // var response = await fetch(query);
        // const data = await response.json();
        // this.state.tokens = data.poolpeek.tokens;
        console.log("tokens " + TokenData.tokenpeek.tokens[0].name);

        this.state.tokens = TokenData.tokenpeek.tokens;
        this.setState({ tokens: TokenData.tokenpeek.tokens, loading: true });


        // this.setState({ query: data.poolpeek.query, loading: false });
    }

    mapObject(object, callback) {
        return Object.keys(object).map(function (key) {
            return callback(key, object[key]);
        });
    }

    render() {
        const { currentPage, pageCount } = this.state;

        // if (this.state.loading) {
        //     return <div>loading...</div>
        // }

        // if (!this.state.pools) {
        //     return <div>Tokens not found...</div>
        // }

        return (

            <div className="container-fluid" style={{ align: "left", width: "99%" }}>

                <Scroll showBelow={250} />

                <Card className="mb-3">
                    <CardHeader><b>{'Cardano Tokens'}</b></CardHeader>
                    <Card body>
                        <Row>
                            <Col>
                                <Input
                                    style={{ fontSize: 14 }}
                                    type="text"
                                    className="cr-search-form__input"
                                    placeholder="Search by Token Name...."
                                    onChange={this.handleChange("&name=")}
                                    value={this.state.name}
                                    placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'b;ue' }}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card body>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>PolicyID</th>
                                </tr>
                            </thead>
                            {this.state.tokens &&(
                            <Token tokens={this.state.tokens} />)}
                        </Table>
                    </Card>


                </Card>
            </div >
        );
    }
}