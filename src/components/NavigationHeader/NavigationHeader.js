import React from "react";
import "./NavigationHeader.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import { logout } from "../../redux/Slice/userSlice";
import Utilis from "../../utils/Toast";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function NavigationHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out")) {
      dispatch(logout());
      navigate("/login");
      Utilis.sToast("Account Logged Out Successfully");
    }
  };
  return (
    <Container id="nav-head-container">
      <Row>
        <Col id="nav-head-col">
          <div id="nav-head-div">
            <div id="navigation-div">
              <div id="navigation-text" onClick={() => navigate("/")}>
                Home
              </div>
              <div id="navigation-text" onClick={() => navigate("/services")}>
                Services
              </div>
              <div id="navigation-text" onClick={() => navigate("/contact")}>
                Contactus
              </div>
              {/* <div id="navigation-text" onClick={() => navigate("/about")}>
                About Us
              </div> */}
              {token && (
                <div
                  id="navigation-text"
                  onClick={() => navigate(`orderHistory/${userInfo?._id}`)}
                >
                  Orders
                </div>
              )}
            </div>
            <div>
              {token ? (
                <div>
                  <div
                    id="profile-logout-div"
                    className="dropdown-container dropdown-button"
                  >
                    <div id="profile-view-div">
                      {userInfo?.firstName?.charAt(0)?.toUpperCase()}
                    </div>
                    <HiOutlineLogout
                      color="white"
                      size={30}
                      onClick={handleLogout}
                    />
                    {/* <div className="dropdown-content">
                      <a
                        onClick={() =>
                          navigate(`orderHistory/${userInfo?._id}`)
                        }
                      >
                        Your Orders
                      </a>
                    </div> */}
                  </div>
                </div>
              ) : (
                <Button id="question-btn" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
