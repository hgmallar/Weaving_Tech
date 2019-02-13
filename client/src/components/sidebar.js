import React from "react";
import { push as Menu } from "react-burger-menu";
import styled from "styled-components";

const FavCounter = styled.div``;

const Welcome = styled.div`
  /* margin-bottom: 0px; */
  font-size:25px;
`;

const UserName = styled.div`
  color: whitesmoke;
  margin-top: 0;
  font-size: 35px;
`;

const FavNum = styled.div`
  margin-top: 5px;
  color: darkred;
  font-size: 40px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Signout = styled.div``;

///burger style
var styles = {
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#7ed957",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  bmItem: {
    color: "lavender"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  },
  menuitem: {
    background: "yellow"
  }
};

export default props => {
  return (
    <Menu right styles={styles}>
      <Links>
        <a className="menu-item" href="/">
          Landing
        </a>

        <a className="menu-item" href="/map">
          Map
        </a>

        <a className="menu-item" href="/truck">
          Truck Home
        </a>
      </Links>

      {((props.username !== "") && (sessionStorage.getItem("userType") === "eater")) ?
        (<div><Welcome> Hey,</Welcome>
          <UserName>{props.username}</UserName>
          <FavCounter>Active Favorites: <FavNum>10</FavNum></FavCounter>
        </div>
        ) :
        (<div></div>)
      }
      {((props.username !== "") && (sessionStorage.getItem("userType") === "trucker")) ?
        (<div><Welcome> Hey,</Welcome>
          <UserName>{props.username}</UserName>
        </div>
        ) :
        (<div></div>)
      }
      <Signout onClick={props.logout}>
        <a className="menu-item" href="/">
          Sign Out
        </a>
        <br />
        <br />
      </Signout>
    </Menu>
  );
};
