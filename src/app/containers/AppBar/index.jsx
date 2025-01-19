import { Drawer, Menu, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation, useNavigate } from "react-router-dom";
import AppLogo from "../../assets/television.png";

import APPLICATION_ROUTES_URLS from "../../routing/config/appsConfig";
import Typography from "antd/es/typography/Typography";
import useToggle from "../../hooks/useToggle";
import useDeviceSize from "../../hooks/useDeviceSize";
import { MenuOutlined } from "@ant-design/icons";
import { COLORS } from "../../utils/colors";

const MENU_OPTIONS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "TV Shows",
    path: "/tv-shows",
  },
];

const AppBar = () => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

  const { isOnMobile } = useDeviceSize();
  const { value: isMobileDrawerOpen, toggle: toggleMobileDrawerOpen } =
    useToggle();

  const toggleDrawer = () => {
    toggleMobileDrawerOpen();
  };

  return (
    <>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => navigate(APPLICATION_ROUTES_URLS.HOME)}
        >
          <img
            src={AppLogo}
            alt="app-logo"
            height={40}
            width={40}
            loading="lazy"
          />
          <span style={{ color: "#fff", marginLeft: 8, fontSize: 20 }}>
            RidTV
          </span>
        </div>

        {/* <Search
        placeholder="input search text"
        allowClear
        //   onSearch={onSearch}
        onChange={(e) => handleSearch(e)}
        enterButton
        style={{ width: 340 }}
      /> */}

        {!isOnMobile ? (
          <Menu theme="dark" mode="horizontal" selectedKeys={[currentPath]}>
            {MENU_OPTIONS.map((menu) => (
              <Menu.Item key={menu.path} onClick={() => navigate(menu.path)}>
                {menu.label}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <MenuOutlined
            style={{ color: "white" }}
            onClick={toggleMobileDrawerOpen}
          />
        )}
      </Header>

      {isMobileDrawerOpen && (
        <Drawer
          title="Menu"
          placement="right"
          open={isMobileDrawerOpen}
          onClose={toggleDrawer}
        >
          <Space direction="vertical">
            {MENU_OPTIONS.map((menu) => (
              <Typography.Text
                key={menu.path}
                onClick={() => navigate(menu.path)}
                style={{
                  color:
                    currentPath === menu.path
                      ? COLORS.PRIMARY_RED
                      : COLORS.BLACK,
                }}
              >
                {menu.label}
              </Typography.Text>
            ))}
          </Space>
        </Drawer>
      )}
    </>
  );
};

export default AppBar;
