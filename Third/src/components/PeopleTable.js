import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectPeople } from "../redux/reducers/people/selectors";
import { PeopleTablePagination } from "./PeopleTablePaginaton";
import { LOAD_USERS } from "../redux/reducers/people/actions";

export const PeopleTable = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);

  const changePage = (newPage) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: newPage,
        search: people.search,
      },
    });

  const search = (event) =>
    dispatch({
      type: LOAD_USERS,
      payload: {
        page: 1,
        search: event.target.value,
      },
    });

  return (
    <>
      <h1>Star wap people</h1>
      <form style={{ display: "inline-block" }}>
        <input
          type="text"
          value={people.search}
          onChange={search}
          placeholder="Search people"
          style={{ padding: "12px 20px" }}
        />
      </form>
      {people?.loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <table border={1} width="100%" cellPadding={2} cellSpacing={0}>
            <thead>
              <tr>
                <th>name</th>
                <th>birth_year</th>
                <th>eye_color</th>
                <th>gender</th>
                <th>height</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {people &&
                people?.data?.results.map((character) => {
                  const id = character.url.replaceAll(/\D/g, "");

                  return (
                    <tr key={character.name}>
                      <td>{character.name}</td>
                      <td>{character.birth_year}</td>
                      <td>{character.eye_color}</td>
                      <td>{character.gender}</td>
                      <td>{character.height}</td>
                      <td>
                        <Link to={`/people/${id}`}>Details</Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <PeopleTablePagination
            page={people.page}
            total={people.data.count}
            onChange={changePage}
          />
        </>
      )}
    </>
  );
};
