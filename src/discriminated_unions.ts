// tag type

interface warning {
  type: "warning";
  warnmsg: string;
}
interface error {
  type: "error";
  errmsg: string;
}
interface success {
  type: "success";
  msg: string;
}

type tagType = warning | error | success;

function handleMessage(type: tagType) {
  switch (type.type) {
    case "warning":
      console.log(type.warnmsg);
      break;
    case "success":
      console.log(type.msg);
      break;
    case "error":
      console.log(type.errmsg);
      break;
  }
}

handleMessage({ type: "success", msg: "Process succesfull" });
handleMessage({
  type: "warning",
  warnmsg: "You should check the process again!",
});
handleMessage({ type: "error", errmsg: "Process Failed!!!" });
