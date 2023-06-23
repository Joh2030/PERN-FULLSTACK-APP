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
