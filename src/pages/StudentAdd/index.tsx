import styles from "./index.module.css";
import { TreeSelect, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_subject_tree_async,
  select_active_two,
  select_subject_tree,
  set_subject_active_two,
} from "@/store/slice/subject";
import { AppDispatch } from "../../store/index";
import RightContent from "./rightContent";

function StudentAdd() {
  const dispatch: AppDispatch = useDispatch();
  const treeData = useSelector(select_subject_tree);
  const active_two_obj: any = useSelector(select_active_two);

  useEffect(() => {
    dispatch(get_subject_tree_async()).then((res) => {
      console.log("@@@", res);
      const active_two_subject = res.payload[0].children[0];
      dispatch(set_subject_active_two(active_two_subject));
    });
  }, []);

  const onChange = (newValue: string, nameArr: any) => {
    dispatch(
      set_subject_active_two({
        title: nameArr[0],
        value: newValue,
      })
    );
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div className={styles.top_left}>{active_two_obj.title}</div>
        <div className={styles.top_right}>
          <TreeSelect
            style={{ width: "100%" }}
            value={active_two_obj.value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />
        </div>
        <Button type="primary" className={styles.add_button}>
          新增题目
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className=""></div>
        </div>
        <div className={styles.right}>
          <RightContent />
        </div>
      </div>
    </div>
  );
}

export default StudentAdd;
