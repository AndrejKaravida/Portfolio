"use client";

import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Input, Row } from "antd";
import emailjs from "@emailjs/browser";
import { MutatingDots } from "react-loader-spinner";
import classes from "./contact.module.css";

import avatar from "../../images/other/avatar-min.png";
import linkedin from "../../images/other/linkedin.png";
import github from "../../images/other/github.png";
import mail from "../../images/other/mail.png";
import Title from "antd/es/typography/Title";
import Image from "next/image";

export default function Contact() {
  const [form] = Form.useForm();
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageFailure, setMessageFailure] = useState(false);
  const [messageAlreadySubmitted, setMessageAlreadySubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/andrejkaravida", "_blank");
  };

  const openGitHub = () => {
    window.open("https://github.com/AndrejKaravida", "_blank");
  };

  const openEmailClient = () => {
    window.open("mailto:akaravidabusiness@gmail.com");
  };

  useEffect(() => {
    emailjs.init("user_OZOhLCC784Kqe2MbEW466");
  }, []);

  const sendEmailHandler = (values: any) => {
    setMessageFailure(false);
    setMessageSuccess(false);
    if (checkAbleToSend()) {
      setIsLoading(true);
      setMessageAlreadySubmitted(false);
      emailjs
        .send("service_xp0d98b", "template_owgq7s8", {
          name: values.Name,
          email: values.Email,
          message: values.Message,
        })
        .then(() => {
          setIsLoading(false);
          setMessageSuccess(true);
          setMessageFailure(false);
          setFormSubmittedHandler();
        })
        .catch(() => {
          setIsLoading(false);
          setMessageFailure(true);
          setMessageSuccess(false);
        });
    } else {
      setMessageAlreadySubmitted(true);
    }
  };

  const displaySuccessMessage = messageSuccess ? (
    <Alert
      message="Thank you for contacting me. I'll get back to you shortly."
      type="success"
    />
  ) : null;

  const displayAlreadySubmittedMessage = messageAlreadySubmitted ? (
    <Alert
      message="You have already submitted the form. I will try to reply as soon as possible. Also, feel free to reach me via Linkedin."
      type="warning"
    />
  ) : null;

  const displayErrorMessage = messageFailure ? (
    <Alert
      message="There was an error when submitting the message. Please check your inputs or try again later."
      type="error"
    />
  ) : null;

  const displayLoader = isLoading ? (
    <MutatingDots
      height="100"
      width="100"
      color="#1890ff"
      secondaryColor="#4fa94d"
      radius="12.5"
      visible={isLoading}
    />
  ) : null;

  const setFormSubmittedHandler = () => {
    const expDate = new Date(new Date().getTime() + 3600 * 24 * 1000);
    localStorage.setItem("formSubmitted", expDate.toString());
  };

  const checkAbleToSend = () => {
    const dateString = localStorage.getItem("formSubmitted");
    if (dateString) {
      const expirationDate = new Date(dateString);
      return expirationDate && expirationDate < new Date();
    } else {
      return true;
    }
  };

  const socialLinks = [
    // <div className={classes.social} key={1}>
    //   <Image className={classes.socialIcon} src={linkedin} alt="" />
    //   <span onClick={openLinkedIn} className={classes.socialText}>
    //     linkedin.com/in/andrejkaravida
    //   </span>
    // </div>,
    <div className={classes.social} key={2}>
      <Image className={classes.socialIcon} src={github} alt="" />
      <span onClick={openGitHub} className={classes.socialText}>
        github.com/AndrejKaravida
      </span>
    </div>,
    <div className={classes.social} key={3}>
      <Image className={classes.socialIcon} src={mail} alt="" />
      <span onClick={openEmailClient} className={classes.socialText}>
        akaravidabusiness@gmail.com
      </span>
    </div>,
  ];

  const validateMessages = {
    required: "${name} is required!",
    types: {
      email: "${name} is not a valid email!",
    },
  };

  return (
    <React.Fragment>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Image src={avatar} className={classes.avatar} alt={""} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col style={{ textAlign: "center" }} span={18}>
          <Title className={classes.title}>
            Thanks for taking the time to reach out. How can I help you today?{" "}
          </Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col style={{ textAlign: "center" }} span={18}>
          <p className={classes.subtitle}>
          I am a frontend developer with over 7 years of experience in web development. I am passionate about creating beautiful and functional websites. I am always looking for new opportunities to work on exciting projects. If you have a project in mind, feel free to reach out to me. I would love to hear from you!
          </p>
        </Col>
      </Row>
      <Form
        className={classes.form}
        form={form}
        onFinish={sendEmailHandler}
        validateMessages={validateMessages}
      >
        <Row justify="center">
          <Col xs={24} lg={0}>
            {socialLinks}
          </Col>
          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                <Form.Item name={["Name"]} rules={[{ required: true, min: 1 }]}>
                  <Input className={classes.formItem} placeholder="Name:" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                <Form.Item
                  name={["Email"]}
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input className={classes.formItem} placeholder="Email:" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ marginTop: "30px", textAlign: "center" }}>
                <Form.Item
                  name={["Message"]}
                  rules={[{ required: true, min: 1 }]}
                >
                  <Input.TextArea
                    className={classes.formItemMessage}
                    placeholder="Message: "
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col
                span={24}
                style={{ textAlign: "center", marginBottom: "30px" }}
              >
                <div style={{ marginTop: "20px" }}>{displayLoader}</div>
                {displaySuccessMessage}
                {displayErrorMessage}
                {displayAlreadySubmittedMessage}
                <Button
                  htmlType={"submit"}
                  className={classes.formButton}
                  type="primary"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={0} lg={8}>
            {socialLinks}
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}
