import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Tooltip from "@material-ui/core/Tooltip";
import PooltoolImage from 'assets/img/pooltool.png';
import PoolPmImage from 'assets/img/poolpm.png';
import AdaPoolImage from 'assets/img/adapools.png';
import CardanoImage from 'assets/img/cardanoIcon.png';
import "../styles/components/Table.css";
import ReactHtmlParser from 'react-html-parser';
import Chart from './Chart';
import SocialMedia from './SocialMedia';
import { isEmpty } from 'utils/stringutil.js';
import ReactImageFallback from "react-image-fallback";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

var linkify = require('linkifyjs');
require('linkifyjs/plugins/hashtag')(linkify); // optional
var linkifyHtml = require('linkifyjs/html');

const width = window.innerWidth;

function checkIsImageUrl(url) {
    if (isEmpty(url)) {
        return false;
    }
    if (url.startsWith("http")) {
        return true;
    }
    return false;
}

function convertImageUrlToHttps(url) {
    return url.replace("http:", "https:");
}


export default class Token extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    render() {
        return (
            this.props.tokens.map(function (item, key) {
                return (

                        <tbody>
                            <tr>                               
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.policyid}</td>
                            </tr>
                        </tbody>

                )
            })
        )
    };
};

