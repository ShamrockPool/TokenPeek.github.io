import React from 'react';
import { Col, Row, Form, Input, Pagination, PaginationItem, PaginationLink, Table, Button } from 'reactstrap';
import _ from 'lodash';
import { isEmpty } from 'utils/stringutil.js';
import Scroll from './Scroll';
import Pool from 'components/Pool';


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
            //search params
            name: ""

        };
    }
    //be7e2461a584b6532c972edca711fa466d7d0e8a86b6629fc0784ff6
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

        if (this.state.filtersWhereRemoved == false) {
            this.showFilters(this.state.pools.length);
        }
    }

    async getTokenList(query) {

        if (this.state.multiPoolOperators) {
            query += "&exclude_splitters=1";
        }

        this.setState({ pools: {}, loading: true })
        var response = await fetch(query);
        // const response = await fetch(this.state.baseUrl + this.state.searchQuery);
        const data = await response.json();
        this.state.pools = data.poolpeek.pools;
        this.setState({ pools: data.poolpeek.pools, loading: true })
        this.setState({ query: data.poolpeek.query, loading: true })
        this.setState({ pageCount: data.poolpeek.query.pageCount, loading: false })
    }

    mapObject(object, callback) {
        return Object.keys(object).map(function (key) {
            return callback(key, object[key]);
        });
    }







    handleOrderByClick(orderByType) {

        this.clearOrderChecks(orderByType);

        if (orderByType == "tickerOrder" || orderByType == "tickerOrderDescending") {
            if (orderByType == "tickerOrder") {
                if (this.state.tickerOrder == false) {
                    this.state.tickerOrder = true;
                    this.setState({ tickerOrder: true });

                    this.state.tickerOrderDescending = false;
                    this.setState({ tickerOrderDescending: false });
                } else {
                    this.state.tickerOrder = false;
                    this.setState({ tickerOrder: false });
                }
            }
            else {
                if (this.state.tickerOrderDescending == false) {
                    this.state.tickerOrderDescending = true;
                    this.setState({ tickerOrderDescending: true });

                    this.state.tickerOrder = false;
                    this.setState({ tickerOrder: false });
                } else {
                    this.state.tickerOrderDescending = false;
                    this.setState({ tickerOrderDescending: false });
                }
            }
        }

        else if (orderByType == "pledgeOrder" || orderByType == "pledgeOrderDescending") {
            if (orderByType == "pledgeOrder") {
                if (this.state.pledgeOrder == false) {
                    this.state.pledgeOrder = true;
                    this.setState({ pledgeOrder: true });

                    this.state.pledgeOrderDescending = false;
                    this.setState({ pledgeOrderDescending: false });
                } else {
                    this.state.pledgeOrder = false;
                    this.setState({ pledgeOrder: false });
                }
            }
            else {
                if (this.state.pledgeOrderDescending == false) {
                    this.state.pledgeOrderDescending = true;
                    this.setState({ pledgeOrderDescending: true });

                    this.state.pledgeOrder = false;
                    this.setState({ pledgeOrder: false });
                } else {
                    this.state.pledgeOrderDescending = false;
                    this.setState({ pledgeOrderDescending: false });
                }
            }
        }
        else if (orderByType == "blocksOrder" || orderByType == "blocksOrderDescending") {
            if (orderByType == "blocksOrder") {
                if (this.state.blocksOrder == false) {
                    this.state.blocksOrder = true;
                    this.setState({ blocksOrder: true });

                    this.state.blocksOrderDescending = false;
                    this.setState({ blocksOrderDescending: false });
                } else {
                    this.state.blocksOrder = false;
                    this.setState({ blocksOrder: false });
                }
            } else {
                if (this.state.blocksOrderDescending == false) {
                    this.state.blocksOrderDescending = true;
                    this.setState({ blocksOrderDescending: true });

                    this.state.blocksOrder = false;
                    this.setState({ blocksOrder: false });
                } else {
                    this.state.blocksOrderDescending = false;
                    this.setState({ blocksOrderDescending: false });
                }
            }
        }

        else if (orderByType == "activeStakeOrder" || orderByType == "activeStakeOrderDescending") {
            if (orderByType == "activeStakeOrder") {
                if (this.state.activeStakeOrder == false) {
                    this.state.activeStakeOrder = true;
                    this.setState({ activeStakeOrder: true });

                    this.state.activeStakeOrderDescending = false;
                    this.setState({ activeStakeOrderDescending: false });
                } else {
                    this.state.activeStakeOrder = false;
                    this.setState({ activeStakeOrder: false });
                }
            }
            else {
                if (this.state.activeStakeOrderDescending == false) {
                    this.state.activeStakeOrderDescending = true;
                    this.setState({ activeStakeOrderDescending: true });

                    this.state.activeStakeOrder = false;
                    this.setState({ activeStakeOrder: false });
                } else {
                    this.state.activeStakeOrderDescending = false;
                    this.setState({ activeStakeOrderDescending: false });
                }
            }
        }
        else if (orderByType == "marginOrder" || orderByType == "marginOrderDescending") {
            if (orderByType == "marginOrder") {
                if (this.state.marginOrder == false) {
                    this.state.marginOrder = true;
                    this.setState({ marginOrder: true });

                    this.state.marginOrderDescending = false;
                    this.setState({ marginOrderDescending: false });
                } else {
                    this.state.marginOrder = false;
                    this.setState({ marginOrder: false });
                }
            } else {
                if (this.state.marginOrderDescending == false) {
                    this.state.marginOrderDescending = true;
                    this.setState({ marginOrderDescending: true });

                    this.state.marginOrder = false;
                    this.setState({ marginOrder: false });
                } else {
                    this.state.marginOrderDescending = false;
                    this.setState({ marginOrderDescending: false });
                }
            }

        }


        var orderByList = "";
        if (this.state.tickerOrder == true) { orderByList += "Ticker,"; }
        if (this.state.pledgeOrder == true) { orderByList += "Pledge,"; }
        if (this.state.blocksOrder == true) { orderByList += "Blocks,"; }
        if (this.state.activeStakeOrder == true) { orderByList += "ActiveStake,"; }
        if (this.state.marginOrder == true) { orderByList += "Margin,"; }
        if (this.state.tickerOrderDescending == true) { orderByList += "Ticker(z-a),"; }
        if (this.state.pledgeOrderDescending == true) { orderByList += "Pledge(z-a),"; }
        if (this.state.blocksOrderDescending == true) { orderByList += "Blocks(z-a),"; }
        if (this.state.activeStakeOrderDescending == true) { orderByList += "ActiveStake(z-a),"; }
        if (this.state.marginOrderDescending == true) { orderByList += "Margin(z-a),"; }


        if (orderByList != "") {
            this.orderBy = "&order=" + orderByList;

            if (this.state.searchQuery !== "") {
                this.getPoolList(this.state.baseUrl + this.state.baseQuery + this.state.searchQuery + this.orderBy);
            }
            else
                this.getPoolList(this.state.baseUrl + this.state.baseQuery + this.orderBy);
        } else {
            this.getPoolList(this.state.baseUrl + this.state.baseQuery + this.state.searchQuery);
            this.getPoolList(this.state.baseUrl + this.state.baseQuery);

            if (this.state.searchQuery !== "") {
                this.getPoolList(this.state.baseUrl + this.state.baseQuery + this.state.searchQuery);
            }
            else
                this.getPoolList(this.state.baseUrl + this.state.baseQuery);
        }
    }

    render() {
        const { currentPage, pageCount } = this.state;

        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.pools) {
            return <div>Pools not found...</div>
        }

        return (

            <div className="container-fluid" style={{ align: "left", width: "99%" }}>

                <Scroll showBelow={250} />
                {this.state.showFilters &&
                    <div>
                        <h3><b>Filters:</b></h3>
                        <Table >
                            <tbody>
                                <tr>
                                    <td scope="row" style={{ width: "30%" }}>
                                        <Input
                                            style={{ fontSize: 14 }}
                                            type="text"
                                            className="cr-search-form__input"
                                            placeholder="Name...."
                                            onChange={this.handleChange("&name=")}
                                            value={this.state.name}
                                        />
                                    </td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>}

                <p><b>Total tokens:</b> {this.state.query.count}</p>
                <Row>
                    <Col>
                        <Pool pools={this.state.pools} />
                    </Col>
                </Row>

            </div >
        );
    }
}