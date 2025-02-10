// union = |
// intersection = &

interface husband {
  hname: string;
}
interface wife {
  wname: string;
}
interface kid {
  kname: string;
}

type Data = (husband & wife) | kid;

const data1: Data = {
  hname: "dummy1",
  wname: "blabla",
};

const data2: Data = {
  hname: "dummy1",
  wname: "blabla",
  kname: "kid1",
};

function checkKid(data: Data) {
  if ("kname" in data) {
    console.log("Yes this coulple has kid and his name is: ", data.kname);
  } else {
    console.log("NO they don't ");
  }
}

checkKid(data1); // no
checkKid(data2); // yes
