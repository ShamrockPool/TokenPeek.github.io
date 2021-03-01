import FetchTokenList from 'components/FetchTokenList';
import Page from 'components/Page';
import React from 'react';
import { isEmpty } from 'utils/stringutil.js';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      poolid: ""
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DashboardPage"
      >
        {isEmpty(this.props.match.params.poolid) ? <FetchTokenList query={this.props.query} multiPoolOperators={true} />
          :
          <FetchTokenList query={this.props.query} multiPoolOperators={true} poolid={this.props.match.params.poolid} />
        }


      </Page>
    );
  }
}
export default DashboardPage;
