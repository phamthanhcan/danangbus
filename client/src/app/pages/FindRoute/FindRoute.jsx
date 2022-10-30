import ListRoute from "./components/ListRoute";

const routes = [
  {
    id: 1,
    title: "Tuyến buýt liên tỉnh",
    list: [
      {
        id: 1,
        name: "Đà Nẵng - Hội An",
        price: "45000"
      },
      {
        id: 2,
        name: "Đà Nẵng - Ái Nghĩa",
        price: "45000"
      },
      {
        id: 3,
        name: "Đà Nẵng - Tam Kỳ",
        price: "45000"
      },
      {
        id: 4,
        name: "Đà Nẵng - Phú Đa",
        price: "45000"
      },
    ]
  },
  {
    id: 2,
    title: "Tuyến buýt trợ giá",
    list: [
      {
        id: 1,
        name: "Đà Nẵng - Hội An",
        price: "45000"
      },
      {
        id: 2,
        name: "Đà Nẵng - Ái Nghĩa",
        price: "45000"
      },
      {
        id: 3,
        name: "Đà Nẵng - Tam Kỳ",
        price: "45000"
      },
      {
        id: 4,
        name: "Đà Nẵng - Phú Đa",
        price: "45000"
      },
    ]
  },
]

const FindRoute = () => {
  return (
    <>
      <h1>LỘ TRÌNH TUYẾN</h1>
      <ListRoute routes={routes}/>
    </>
  )
}   

export default FindRoute;
