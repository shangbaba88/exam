import { Route, Routes, Navigate } from "react-router-dom";
import "@/App.scss";
import Login from "@/pages/Login";
import Layout from "./com_component/Layout";
import { routersData } from "./config";
import AdminManage from "./pages/AdminManage";
import CorretExam from "./pages/CorretExam";
import CorretExamList from "./pages/CorretExamList";
import ExamHistory from "./pages/ExamHistory";
import ExamSelect from "./pages/ExamSelect";
import PersonInfo from "./pages/PersonInfo";
import StudentManage from "./pages/StudentManage";
import StudentAdd from "./pages/StudentAdd";
import SubjectManage from "./pages/SubjectManage";
import Exam from "./pages/Exam";
import ReadExam from "./pages/ReadExam";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={"/login"} />}></Route>
        {/* 页面1  登录 */}
        <Route path={routersData.login.path} element={<Login />}></Route>
        {/*页面12： 管理员管理 （超级管理员） */}
        <Route
          path={routersData.admin_manage.path}
          element={<AdminManage />}
        ></Route>
        {/* 页面8： 批改试卷（管理员） */}
        <Route
          path={routersData.corret_exam.path}
          element={<CorretExam />}
        ></Route>
        {/* 页面7： 批阅试卷列表（管理员） */}
        <Route
          path={routersData.corret_exam_list.path}
          element={<CorretExamList />}
        ></Route>
        {/* 页面4： 考试 (学生) */}
        <Route path={routersData.exam.path} element={<Exam />}></Route>
        {/* 页面5： 学生考试记录 （学生） */}
        <Route
          path={routersData.exam_history.path}
          element={<ExamHistory />}
        ></Route>
        {/* 页面3： 考题选择 （学生） */}
        <Route
          path={routersData.exam_select.path}
          element={<ExamSelect />}
        ></Route>
        {/* 页面2： 个人信息录入（学生 管理员） */}
        <Route
          path={routersData.person_info.path}
          element={<PersonInfo />}
        ></Route>
        {/* 页面6 查看试卷（学生 管理员） */}
        <Route path={routersData.read_exam.path} element={<ReadExam />}></Route>
        {/* 页面9： 学生管理(管理员) */}
        <Route
          path={routersData.student_manage.path}
          element={<StudentManage />}
        ></Route>
        {/* 页面11： 考题录入（管理员） */}
        <Route
          path={routersData.subject_add.path}
          element={<StudentAdd />}
        ></Route>
        {/* 页面10： 课程管理 （管理员） */}
        <Route
          path={routersData.subject_manage.path}
          element={<SubjectManage />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
