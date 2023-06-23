export default function Pagination({ next, previous, onNext, onPrevious }) {
  return (
    <div className="pagination">
      <button
        type="button"
        className="btn btn-light m-2"
        disabled={!previous}
        onClick={onPrevious}
      >
        Prev
      </button>
      <button
        type="button"
        className="btn btn-light m-2"
        disabled={!next}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}
