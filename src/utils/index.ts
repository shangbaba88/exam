import COS from "cos-js-sdk-v5";

export const upload_imgs = function (files: any) {
  let cos = new COS({
    SecretId: "AKIDLfsy450vqV4XwHXfgh9Uiu41sfRWTHxY",
    SecretKey: "iYK5ylTA81rZEvV3gMJIF3h9UMzVq250",
  });

  return new Promise((resolve) => {
    let upload_files_data = files.map((item: any) => {
      const file_name = item.name;
      const ramdom = Math.random().toString(36).slice(-8);
      const result_file_name = `topic/${ramdom}_${file_name}`;

      return {
        Bucket: "shang-pro-1322981524" /* 填写自己的 bucket，必须字段 */,
        Region: "ap-shanghai" /* 存储桶所在地域，必须字段 */,
        Key: result_file_name /* 存储在桶里的对象键（例如:1.jpg，a/b/test.txt，图片.jpg）支持中文，必须字段 */,
        Body: item.originFileObj, // 上传文件对象
        SliceSize:
          1024 *
          1024 *
          5 /* 触发分块上传的阈值，超过5MB使用分块上传，小于5MB使用简单上传。可自行设置，非必须 */,
      };
    });

    console.log("upload_files_data", upload_files_data);

    cos.uploadFiles(
      {
        files: upload_files_data,
        SliceSize: 1024 * 1024 * 10,
        onFileFinish: function (err, data, options) {},
      },
      async function (err, res_data) {
        if (err) {
          console.log("err", err);
        } else {
          const img_urls = res_data.files.map((item) => {
            return item.data.Location;
          });
          resolve(img_urls);
        }
      }
    );
  });
};
