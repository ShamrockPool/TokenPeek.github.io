import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo115_91Image from 'assets/img/logo/logo_115_91.jpg';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  MdExtension,
  MdKeyboardArrowDown,
  MdRadioButtonChecked,
  MdMood,
  MdPool,
  MdSearch,
  MdFormatListBulleted
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};





const navItems = [
  { to: '/', name: 'Token Search', exact: true, Icon: MdSearch },

];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    isOpenAdafolio: false,
    isOpenFunQuery: false,
    navAdaFolio: [],
  };

  //get adafolio groups and map to nav options
  async getAdafolioGroups(){
    const response = await fetch('https://poolpeek.com/api.asp?k=838967e9-940b-42db-8485-5f82a72a7e17&op=afgroups');
    const data = await response.json();
    var dataMap = data.poolpeek.adafolioGroups.map((rec, index) => (
      {to:'adafolio?adafolioid=' + rec.id + "&qname=" + encodeURIComponent(rec.name), name:ReactHtmlParser(rec.name), exact:false, Icon: MdRadioButtonChecked}  
    ));
    this.setState({ navAdaFolio: dataMap});
  }

  async componentDidMount() {
    this.getAdafolioGroups();    
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (  
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')} style={{alignItems: "center" }}>
      
        <Container>

        <Col style={{backgroundColor:'black', padding:'0px'}}>
              
              Cardano Native Token Explorer brought to you by LOCO and SHA. 
             
            </Col>

          {/* <Row className="justify-content-md-center">
            <Col  style={{backgroundColor: 'black', width:'115px', padding:'0px'}}>
              <img src={logo115_91Image}
                            width="115"
                            height="91"
                            className="pr-2"
                            title="Welcome to PoolPeek.com"/>
            </Col>

          </Row> */}
        </Container>

         
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <b><span className="">{name}</span></b>
                </BSNavLink>
              </NavItem>
            ))}






          


          </Nav>

        </div>
      </aside>
    );
  }
}

export default Sidebar;
