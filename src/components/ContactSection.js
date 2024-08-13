import { Button, Form, Input, message } from "antd";

import { FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const [form] = Form.useForm();
  const finish = (values) => {
    message.success("your form was submitted");
    form.resetFields();
  };
  return (
    <>
      <div className="bg-gray-600 text-white  mt-[7rem] md:pt-[4rem] pb-[4rem]">
        <div className="flex  justify-center">
          {" "}
          <p className="font-semibold text-center w-[70%] text-3xl">
            Contact Details
          </p>
        </div>

        <div className="flex justify-center md:pt-[5rem] pt-3 ">
          <div className="w-[70%] flex flex-col  md:flex-row">
            <div className="md:w-[40%] w-[100%]  flex flex-col justify-center gap-5 ">
              <div className="flex gap-5 items-center">
                <FaUserAlt className="text-red-600 md:text-4xl text-2xl" />
                <div className="flex flex-col">
                  <p className="text-lg font-bold ">Name</p>
                  <p className="text-md">Sabin Thokar</p>
                </div>
              </div>

              <div className="flex gap-5   items-center">
                <FaLocationDot className="text-red-600 md:text-4xl text-2xl" />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Address</p>
                  <p className="text-md">Bouddha</p>
                </div>
              </div>

              <div className="flex gap-5   items-center">
                <MdEmail className="text-red-600 md:text-4xl text-2xl" />
                <div className="flex flex-col">
                  <p className="text-lg font-bold ">Mail</p>
                  <p className="text-md">sabin1076@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="md:w-[60%] w-[100%] flex flex-col ">
              <p className="text-xl pt-[3rem] md:pt-0 font-semibold">
                Message me
              </p>
              <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={finish}
              >
                <Form.Item
                  label=<p className="font-semibold text-white">Name</p>
                  name="Name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input className="text-gray-500" />
                </Form.Item>

                <Form.Item
                  label=<p className="font-semibold text-white">Email</p>
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                      type: "email",
                    },
                  ]}
                >
                  <Input className="text-gray-500" />
                </Form.Item>

                <Form.Item
                  label=<p className="font-semibold text-white">Message</p>
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea className="text-gray-500" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
