// import { useState } from "react";

// import { ReactComponent as ArrowDown } from "../images/chevron-down.svg";
// import { ReactComponent as ArrowUp } from "../images/chevron-up.svg";

// import Breadcrumbs from "./Breadcrumbs";

// export default function HierarchicalSystem({ items }) {

//     const [expandedIndex, setExpandedIndex] = useState(-1);

//     const handleClick = (nextIndex) => {
//         setExpandedIndex((currentExpandedInex) => {
//             if (currentExpandedIndex === nextIndex) {
//                 return -1
//             } else {
//                 return nextIndex
//             }
//         })
//     };

//     const renderedItems = items.map((item, index) => {

//         const isExpanded = index === expandedIndex

//         const icon = (
//             <span className="">
//                 {isExpanded ? (
//                     <ArrowDown />
//                 ) : (
//                     <ArrowUp />
//                 )}
//             </span>
//         )

//     }

//     );

//     return (
//         <div>
//             <div>
//                 <Breadcrumbs />
//             </div>

//             <div>
//                 <div className="" onClick={() => handleClick(index)}>
//                     {icon}
//                 </div>

//                 {isExpanded && (
//                     <div className="">
//                         {items}
//                     </div>
//                 )}

//             </div>

//             return <div className="">
//                 {renderedItems}
//             </div>


//         </div>
//     );
// }
