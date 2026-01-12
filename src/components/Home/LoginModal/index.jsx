import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form, Input, notification } from "antd";
import Axios from "axios";
import { ROOT_URL } from "../../../App";
import * as actionTypes from "../../../store/actions";
import { CustomModal } from "./styles";

export const LoginFormModal = ({ loginType, isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    // Axios.post(`${ROOT_URL}/${loginType}/login`, {
    //   ...values,
    // })
    const adminMail = "admin@gmail.com";
    const password = "12345";
    if (adminMail === values.email && password === values.password) {
      notification.success({
        name: "Login Successful",
        message: "Login Successful",
        placement: "bottomLeft",
      });
      if (loginType === "company") {
        navigate("company?module=external&view=list#");
      }
      if (loginType === "user") {
        navigate("student");
      }
      if (loginType === "college") {
        navigate("institute/home?module=company&view=list#");
      }
      return;
    }
    return alert("Invalid credentials");
  };

  return (
    // <CustomModal
    //       title={false}
    //       footer={false}
    //       open={isModalOpen}
    //       onOk={handleOk}
    //       onCancel={handleCancel}
    //     >
    //       <Form
    //         name="Login Form"
    //         onFinish={onFinish}
    //         onFinishFailed={onFinishFailed}
    //         autoComplete="off"
    //       >
    //         <div className="form">
    //           <div className="admin-id">
    //             <Form.Item
    //               label="Email"
    //               name="email"
    //               rules={[
    //                 {
    //                   type: "email",
    //                   message: "The input is not valid E-mail!",
    //                 },
    //                 {
    //                   required: true,
    //                   message: "Please input E-mail!",
    //                 },
    //               ]}
    //             >
    //               <Input placeholder="Email" autoComplete="new-password" />
    //             </Form.Item>
    //           </div>

    //           <div className="password">
    //             <Form.Item
    //               label="Password"
    //               name="password"
    //               rules={[
    //                 {
    //                   required: true,
    //                   message: "Please input password!",
    //                 },
    //               ]}
    //             >
    //               <Input.Password
    //                 placeholder="Password"
    //                 autoComplete="new-password"
    //               />
    //             </Form.Item>
    //           </div>
    //         </div>

    //         <div className="actions">
    //           <div className="login-btn">
    //             <Button type="primary" htmlType="submit">
    //               Login
    //             </Button>
    //           </div>
    //           <div className="forget-password">Forgot Password ?</div>
    //         </div>
    //       </Form>
    //     </CustomModal>

    <CustomModal
      title={false}
      footer={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="Login Form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div class="form-group">
          <div className="">
            <div className="admin-id">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input E-mail!",
                  },
                ]}
              >
                {/* <Input placeholder="Email" autoComplete="new-password" /> */}
                {/* <div style={{ marginLeft: '2%' }}>
                  <Input.Password

                    placeholder="Email"
                    autoComplete="new-password" />
                </div> */}

                <input
                  type="text"
                  class="login__input"
                  placeholder="Email"
                  autoComplete="new-password"
                />
              </Form.Item>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div className="password">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input password!",
                },
              ]}
            >
              <input
                type="password"
                class="login__input"
                placeholder="Password"
                autoComplete="new-password"
              />
              {/* <Input.Password
                placeholder="Password"
                autoComplete="new-password"
              /> */}
            </Form.Item>
          </div>
        </div>

        <div className="actions">
          <div className="">
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Login
            </Button>
          </div>
          <div class="form-group ">
            <div className="forget-password">Forgot Password ?</div>
          </div>
        </div>
      </Form>
    </CustomModal>
  );
};

export default LoginFormModal;
