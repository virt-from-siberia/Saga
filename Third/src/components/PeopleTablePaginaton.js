const LIMIT = 10;

export const PeopleTablePagination = ({
                                        page, total, onChange = () => {
  }
                                      }) => {
  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div>
      {Array.from({length: totalPages}, (_, index) => index + 1).map(
        (pageIndex) => {
          const isActive = pageIndex === page;

          const action = () => {
            if (isActive) return;
            onChange(pageIndex);
          };

          return isActive ? (
            <b onClick={action} key={pageIndex}>
              {" "}
              {pageIndex}
            </b>
          ) : (
            <span onClick={action} key={pageIndex}>
              {" "}
              {pageIndex}
            </span>
          );
        }
      )}
    </div>
  );
};
