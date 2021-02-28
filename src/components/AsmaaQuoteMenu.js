/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import Categories from "./media/categories";
import Logo from "./media/AsmaaQuoteLogo.png";
import { Link } from "react-router-dom";
import { AlignCenterOutlined } from '@ant-design/icons';

const { Header } = Layout;

class AsmaaQuoteMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Link to={"/"}>
          <img alt="AsmaaQuoteLogo" src={Logo} style={{ height: "40px" }} />
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={this.props.selected.toString()}
          style={{ lineHeight: "64px", float: "right" }}
          id="mainmenu"
        >
          {Categories.map((item, key) => {
            return (
              <Menu.Item key={key}>
                <Link to={"/" + item.name}> {item.name}</Link>
              </Menu.Item>
            );
          })}
          <Menu.Item key={Categories.length + 1}>
            <Link to={"/Gallery"}>Gallery</Link>
          </Menu.Item>
          <Menu.Item key={Categories.length + 2}>
            <Link to={"/Khawater"}>Khawater</Link>
          </Menu.Item>
          <Menu.Item key={Categories.length + 3}>
            <Link to={"/About"}>About</Link>
          </Menu.Item>
        </Menu>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{ float: "right" }}
          id="togglemenu"
        >
          <Button
            className="barsMenu"
            type="default"
            onClick={this.showDrawer}
            style={{ verticalAlign: "center" }}
          >
            <AlignCenterOutlined />
          </Button>
        </Menu>

        <Drawer
          title="Asmaa Quote"
          placement="top"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            {Categories.map((item, key) => {
              return (
                <Link to={"/" + item.name} onClick={this.onClose}>
                  {" "}
                  <p>{item.name}</p>
                </Link>
              );
            })}
            <Link to="/Gallery" onClick={this.onClose}>
              <p>Gallery</p>
            </Link>
            <Link to="/Khawater" onClick={this.onClose}>
              <p>Khawater</p>
            </Link>
            <Link to="/About" onClick={this.onClose}>
              <p>About</p>
            </Link>
          </div>
        </Drawer>
      </Header>
    );
  }
}

export default AsmaaQuoteMenu;
