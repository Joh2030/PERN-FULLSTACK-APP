// import React from "react";

// export default function Pagination({ next, previous }) {
//   return (
//     <div className="pagination">
//       <button
//         disabled={!next}
//         onClick={() => {
//           next;
//         }}
//       >
//         Next
//       </button>
//       <button
//         disabled={!previous}
//         onClick={() => {
//           setUrl(previous);
//         }}
//       >
//         Prev
//       </button>
//     </div>
//   );
// }

export default function Pagination({ next, previous, onNext, onPrevious }) {
  return (
    <div className="pagination">
      <button disabled={!previous} onClick={onPrevious}>
        Prev
      </button>
      <button disabled={!next} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
