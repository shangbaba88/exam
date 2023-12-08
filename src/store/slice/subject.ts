// 课程相关
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/http";
import { AxiosRes } from "@/utils/http";
import { RootState } from "../index";

const initialState = {
  subject_tree: [], // 课程树结构
  active_two: {
    title: "", // 二级课程名称
    value: "", // 二级课程id
  }, // 二级分类信息
};

export const get_subject_tree_async = createAsyncThunk(
  "get/subject_tree",
  async (action, state) => {
    const res: AxiosRes = await axios.get("/api/subject");
    return res.data.data;
  }
);

export const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    set_subject_active_two: (state, active) => {
      state.active_two = active.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_subject_tree_async.fulfilled, (state, res) => {
      state.subject_tree = res.payload;
    });
  },
});

export const select_subject_tree = (state: RootState) => {
  return state.subject.subject_tree;
};

export const select_active_two = (state: RootState) => {
  return state.subject.active_two;
};

export const { set_subject_active_two } = subjectSlice.actions;

export default subjectSlice.reducer;
