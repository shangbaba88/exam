import { Form, Input, Button } from "antd";
import styles from "./index.module.css";
import Upload from "./upLoad";
import { useRef } from "react";
// import { upload_imgs } from '@/utils/index';
import axios from "@/utils/http";
import { useSelector, useDispatch } from "react-redux";
import { select_active_two } from "@/store/slice/subject";
import { upload_imgs } from "@/utils";

const { TextArea } = Input;

function RightContent() {
  const two_obj: any = useSelector(select_active_two);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  let active_file: any = useRef();

  //上传文件改变
  function file_change(file_info: any) {
    active_file.current = file_info;
  }

  async function submit_click() {
    const form_data = await form.validateFields();
    if (form_data) {
      if (active_file?.current?.fileList.length) {
        const uploadImg = await upload_imgs(active_file?.current?.fileList);
        form_data.img = uploadImg;
        console.log("uploadImg", uploadImg);
      }
    }
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 16 }}
      style={{ width: 800 }}
      initialValues={{}}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "请输入" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="描述"
        name="dec"
        rules={[{ required: true, message: "请输入" }]}
      >
        <TextArea />
      </Form.Item>
      <Upload change={file_change} />
      <Button
        onClick={submit_click}
        danger
        type="primary"
        className={styles.add_button}
      >
        保存
      </Button>
    </Form>
  );
}

export default RightContent;
