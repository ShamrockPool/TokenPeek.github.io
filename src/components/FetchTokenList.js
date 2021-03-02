import React from 'react';
import { Col, Row, Form, Input, Pagination, PaginationItem, PaginationLink, Table, Button, Card, CardBody, CardHeader } from 'reactstrap';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import BootstrapTable from 'react-bootstrap-table-next';
import _ from 'lodash';
import { isEmpty } from 'utils/stringutil.js';
import Scroll from './Scroll';
import Token from 'components/Token';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
const WAIT_INTERVAL = 800

export default class FetchTokenList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: null,
            loading: true,
            baseQuery: "",
            searchQuery: "",
            currentPage: 0,
            pageCount: 0,
            tokens: null,
            //search params
            name: ""

        };

        this.options = {
            defaultSortName: 'name',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
        };

        this.columns = [{
            dataField: 'id',
            text: 'Product ID',
            sort: true
        }, {
            dataField: 'name',
            text: 'Product Name',
            sort: true
        }, {
            dataField: 'quantity',
            text: 'Quantity Minted',
            sort: true
        }];
    }
    handleChange = (query) => (e) => {

        var searchValue = e.target.value;

        this.state.name = e.target.value;
        this.setState({ name: e.target.value });

        clearTimeout(this.inputTimer);
        this.inputTimer = setTimeout((e) => {
            if (!isEmpty(searchValue)) {
                var filteredTokens = this.state.tokens.filter(token => token.name.toLowerCase().includes(searchValue.toLowerCase()));
                this.state.tokens = filteredTokens;
                this.setState({ tokens: filteredTokens, loading: false });
            }
            else {
                this.getTokenList();
            }
        }, WAIT_INTERVAL);
    }



    async componentDidMount() {

        await this.getTokenList();
    }

    async getTokenList() {

        this.setState({ tokens: {}, loading: true })

        var response = await fetch("http://161.97.156.204:8081/tokens/all");
        const data = await response.json();
        this.state.tokens = data;
        this.setState({ tokens: data, loading: false });
        console.log("tokens " + this.state.tokens[0].name);
    }

    mapObject(object, callback) {
        return Object.keys(object).map(function (key) {
            return callback(key, object[key]);
        });
    }

    render() {
        const { currentPage, pageCount } = this.state;

        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.tokens) {
            return <div>Tokens not found...</div>
        }

        return (

            <div className="container-fluid" style={{ align: "left", width: "99%" }}>

                <Scroll showBelow={250} />

                <Card className="mb-3">
                    <CardHeader><b>{'Cardano Tokens'}</b></CardHeader>
                    <Card body>
                        <Row>
                            <Col>
                                <h3>Total Tokens: {this.state.tokens.length}</h3>
                                <Input
                                    style={{ fontSize: 14 }}
                                    type="text"
                                    className="cr-search-form__input"
                                    placeholder="Search by Token Name...."
                                    onChange={this.handleChange()}
                                    value={this.state.name}
                                    placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'b;ue' }}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card body>
                        <BootstrapTable keyField='id' data={this.state.tokens} columns={this.columns} />

                        {/* <Table {...{ ['striped']: true }}>
                            <thead>
                                <tr>
                                    <th scope="row" style={{ align: "left", width: "30%", margin: "20px" }}>Name</th>
                                    <th scope="row" style={{ align: "left", width: "30%", margin: "20px" }}>Quantity</th> */}
                        {/* <th>Price</th>
                                    <th>PolicyID</th> */}
                        {/* </tr>
                            </thead>
                            {this.state.tokens && (
                                <Token tokens={this.state.tokens} />)}
                        </Table> */}
                    </Card>
                </Card>
            </div >
        );
    }
}