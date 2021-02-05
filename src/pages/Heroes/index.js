import React, { useEffect, memo } from 'react';
import PageLayout from 'components/PageLayout';
import { Link } from 'react-router-dom';
import './Heroes.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataSuccess, fetchDataError, getHeroDetail } from 'actions';
import { fetchHeroes } from './control';

function Heroes() {
  const heroes = useSelector((state) => state.displayAllHeros.list[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchHeroesData() {
      try {
        await fetchHeroes().then((result) => {
          dispatch(fetchDataSuccess(result));
        });
      } catch (error) {
        dispatch(fetchDataError(error));
      }
    }
    fetchHeroesData();
  }, []);
  // Truyền chính xác hero qua màn detail bằng việc click vào Link
  const getHeroId = (index) => {
    const matchedHero = heroes[index];
    dispatch(getHeroDetail(matchedHero));
  };
  return (
    <PageLayout>
      <div />
      <span>HEROES</span>
      <table className="heroes-table">
        <thead>
          <tr>
            <th>Heros</th>
            <th>Pro Pick/Bans</th>
            <th>Pro Wins</th>
          </tr>
        </thead>
        <tbody>
          {heroes?.map((hero, index) => (
            <tr key={hero?.id}>
              <td>
                <Link
                  to={{
                    pathname: `/heroes/${hero?.localized_name}/${hero?.id}`,
                  }}
                  onClick={() => getHeroId(index)}
                >
                  <div className="heroes_name_img">
                    <img src={`https://api.opendota.com${hero?.icon}`} alt="" />
                    <div className="heroes__name">{hero?.localized_name}</div>
                  </div>
                </Link>
              </td>
              <td>{`${hero?.pro_pick} / ${hero?.pro_ban}`}</td>
              <td>{hero?.pro_win}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageLayout>
  );
}

export default memo(Heroes);
