
import Page from 'components/Page';
import React from 'react';


class AboutUsPage extends React.Component {
  state = {
    loading: true
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (


      <Page
        className="AboutUsPage"
        title={this.props.title}
      >
        <div>

          <b>A different kind of Cardano Stake Pool Explorer</b>
          <br /><br />

PoolPeek.com is a Cardano stake pool explorer that analyzes the publicly available registration data and other data
elements such as number of produced blocks and active stake. Delegators can use our powerful query features to narrow down lists of
pools and then drill deeper using our external links feature. Stake pool operators can use PoolPeek.com to keep an
eye on their competition. We offer a range or filters on ticker, name, description, blocks, margin, pledge, cost and active stake.
<br /><br />

PoolPeek.com was created by small stake pool owners who believe all pools should have a fighting chance.
A random sort order is default for most lists at PoolPeek.com. The idea is that all pools get a random chance to be at
the top of the list. An exception to this is the 'ticker' sort. Tickers sort alphabetically as you type.
There are many great small pools out there that don't get a chance to showcase their pool because of some silly ranking algorithm.
As we move forward we plan to write tools that will help small pools advertise.
<br /><br />

          <b>The Developers</b>
          <br /><br />

PoolPeek.com is developed and maintained by small stake pool owners <a href="https://shamrock-pool.com/" target="_blank">SHA</a> and <a href="http://locoada.com" target="_blank">LOCO</a>
          <br /><br />

You can reach us on
<br /><br />

          <b>Twitter: </b><a href="https://twitter.com/CardanoPoolPeek" target="_blank" rel="noreferrer">https://twitter.com/CardanoPoolPeek</a>
          <br></br>
          <b>Telegram group chat: </b><a href="https://t.me/poolpeek" target="_blank" rel="noreferrer">https://t.me/poolpeek</a>
          <br /><br />

We have devoted many hours developing and maintaining PoolPeek.com, If you like what you see and want to support our efforts,
please consider tipping us:
<br /><br />


          <a href={"https://poolpeek.com/pool/99541BED40B1015A1D81083184973B59A3F50BCE4392492E99FF0BEF"}
            target="_blank" rel="noreferrer"><p>TRAIN:</p></a>
addr1q9z0fjsenn4ne6zjswl3r3k98uuehe7ve7e8649kjsy5yg33myr8mpq6wk3nmqw2hg8v5a6kmlpmk889ye20qussqekslteph6
<br /><br />

          <a href={"https://poolpeek.com/pool/BE7E2461A584B6532C972EDCA711FA466D7D0E8A86B6629FC0784FF6"}
            target="_blank" rel="noreferrer"><p>SHA:</p></a>
addr1q8ds9zyklmzphd6us528kqlcjmhq874ase5tk8qfc7a7p5fxh64unn46g3scmqzdym6epgkmmzv9uzvymqgdndtwh2psmwddeg
<br /><br />

          <b>Pool Search</b>
          <br /><br />

Pool Search randomly displays all pools in our system that are not retiring or retired.
You can click the 'Pool Search' option again anytime to re-order the list.
After the pools display you can page through the results and refine the query using the basic or advanced filters and sorting.
<br /><br />


          <b>Pool Queries</b>
          <br /><br />

Our text based pool queries look for keywords in the pool's data, the search is not exact and user is left to decide if
the pool meets the actual criteria. This gives us the flexibility to filter pools in ways other sites can't.
If you believe a pool is missing from one of our Pool Queries or you have an idea for a new Pool Query, please contact us.
<br /><br />


          <b>Fabulous 500</b>
          <br /><br />

500 random small pools with less than 100 blocks and less than 10 million in active stake.
Click the navigation option again to pull a different set of 500 random pools.
We support the true decentralization of the Cardano network and believe small pools are a vital part of it.
Fabulous 500 allow you to display pools in a fun random way by ticker, name or description.
Just an interesting way for a potential delegator to maybe see something of interest and
then click the pools website link or pool.pm link to find out more.
<br /><br />


          <a href="https://adafolio.com/" target="_blank"><b>adafolio.com</b></a> <b>Porfolios</b>
          <br /><br />

adafolio.com is proudly made for the Cardano Community by the team at Viper Staking!<br />
We worked with the Viper team to integrate adafolio.com portfolios into PoolPeek.com.<br />
The list of portfolios and pools display in a random order and allow you browse and research the pools
just as you would using any other PoolPeek.com query.<br />
 Further the decentralization of Cardano by spreading out your delegation to multiple stake pools.
<br /><br />


          <b>The Old Site</b>
          <br /><br />

You can still access the "classic" version of PoolPeek.com using the link below:
<br /><br />

          <a target="_blank" href="https://PoolPeek.com/PoolPeekClassic.asp">Pool Peek Classic</a>
          <br />
https://PoolPeek.com/PoolPeekClassic.asp
<br /><br />


          <b>THANK YOU</b>
          <br /><br />

PoolPeek.com would like to thank the following sites for supplying us tools that make our site even better:
<br />
          <ul>
            <li><a href="Pool.pm" target="_blank">Pool.pm</a></li>
            <li><a href="adafolio.com" target="_blank">adafolio.com</a></li>
            <li><a href="adapools.org" target="_blank">adapools.org</a></li>
            <li><a href="pooltool.io" target="_blank">pooltool.io</a></li>
          </ul>

          <h2>PoolPeek.com Website Privacy Statement</h2>
          <p>This document was last updated on February 21st, 2021.</p>

          <b> ACKNOWLEDGEMENT AND ACCEPTANCE OF TERMS</b>
          <br />
          <p>PoolPeek.com is committed to protecting your privacy. This Privacy Statement sets forth our current privacy practices with regard to the
          information we collect when you or your computer interact with our website.   By accessing PoolPeek.com, you acknowledge and fully
          understand PoolPeek.com Privacy Statement and freely consent to the information collection and use
practices described in this Website Privacy Statement.</p>


          <b> PARTICIPATING MERCHANT POLICIES</b>
          <br />
          <p>Related services and offerings with links from this website, including vendor sites, have their own privacy statements that can be viewed by
          clicking on the corresponding links within each respective website. Online merchants and others who participate in
          PoolPeek.com services are encouraged to participate in industry privacy initiatives and to take a responsible attitude towards consumer privacy.
          However, since we do not have direct control over the policies or practices of participating merchants and other third parties,
          we are not responsible for the privacy practices or contents of those sites.  We recommend and encourage that you always review the privacy
policies of merchants and other third parties before you provide any personal information or complete any transaction with such parties.</p>

          <b> INFORMATION WE COLLECT AND HOW WE USE IT</b>

          <p>PoolPeek.com collects certain information from and about its users three ways: directly from our Web Server logs, the user, and with Cookies.</p>

          <b> Web Server Logs.</b>
          <br /><p>When you visit our Website, we may track information to administer the site and analyze its usage. Examples of information we may
track include: </p>
 Your Internet protocol address. <br />
 The kind of browser or computer you use. <br />
 Number of links you click within the site. <br />
 State or country from which you accessed the site. <br />
 Date and time of your visit. <br />
 Name of your Internet service provider. <br />
 Web page you linked to our site from. <br />
 Pages you viewed on the site. <br />
          <br />

          <b> Use of Cookies</b>
          <br />
          <p>PoolPeek.com may use cookies to personalize or enhance your user experience.  A cookie is a small text file that is placed
          on your hard disk by a Web page server.  Cookies cannot be used to run programs or deliver viruses to your computer.
Cookies are uniquely assigned to you, and can only be read by a Web Server in the domain that issued the cookie to you. </p>

          <p>One of the primary purposes of cookies is to provide a convenience feature to save you time.  For example, if you
          personalize a web page, or navigate within a site, a cookie helps the site to recall your specific information on
          subsequent visits.  Hence, this simplifies the process of delivering relevant content and eases site
navigation by providing and saving your preferences and login information as well as providing personalized functionality. </p>

          <p>You have the ability to accept or decline cookies.  Most Web browsers automatically accept cookies, but you can usually
          modify your browser setting to decline cookies. If you reject cookies by changing your browser settings then be aware that this may
disable some of the functionality on our Website.</p>

          <b> Personal Information Users</b>
          <br />

          <p>We will not disclose personally identifiable information we collect from you to third parties without your permission except to
the extent necessary including:</p>

To fulfill your service requests for services. <br />
To protect ourselves from liability, <br />
To respond to legal process or comply with law<br />
          <br />

          <b> CHANGES TO THIS STATEMENT</b>
          <br />
          <p>PoolPeek.com has the discretion to occasionally update this privacy statement.
          When we do, we will also revise the “updated” date at the top of this Privacy page.
          We encourage you to periodically review this privacy statement to stay informed about how we are helping to protect
          the personal information we collect.  Your continued use of the service constitutes your agreement to
this privacy statement and any updates.</p>

          <b> CONTACTING US</b>
          <br />
          <p>If you have questions regarding our Privacy Statement, its implementation, failure to adhere to
          this Privacy Statement and/or our general practices, please contact us at
          CardanoPoolPeek@gmail.com We will use commercially reasonable efforts to promptly
respond and resolve any problem or question.</p>


        </div>
      </Page>
    );
  }
}
export default AboutUsPage;
