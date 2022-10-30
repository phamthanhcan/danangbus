const RouteItem = ({index, name}) => {
  return (
    <li>
      <h3>
        <span>{index+1}</span>
        {name}
      </h3>
    </li>
  )
}

const ListRoute = ({ routes }) => {

  // routes.map((route) => {
  //   return (
  //     <ul key={route.id}>
  //       <li>
  //         <h2>{route.title}</h2>
  //         <ul>
  //           {route.list.map((item, index) => {
  //             return (
  //               <li>
  //                 <span>{index+1}</span>
  //                 <h3>{item.name}</h3>
  //               </li>
  //             )
  //           })}
  //         </ul>
  //       </li>
  //     </ul>
  //   )
  // })
}

export default ListRoute;
