import React, { useState, useEffect, memo } from 'react';
import PageLayout from 'components/PageLayout';
import { Link } from 'react-router-dom';
import './Heroes.css';
import { useDispatch } from 'react-redux';
import { displayAction } from 'actions';
import { fetchHeroes } from './control';

function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchHeroes().then((result) => {
      setHeroes(result);
      dispatch(displayAction(result));
    });
  }, [dispatch]);

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
          {heroes.map((hero) => (
            <tr key={hero.id}>
              <td>
                <Link
                  to={{
                    pathname: `/heroes/${hero.localized_name}`,
                    // state: { hero },
                  }}
                >
                  <div className="heroes_name_img">
                    <img src={`https://api.opendota.com${hero.icon}`} alt="" />
                    <div className="heroes__name">{hero.localized_name}</div>
                  </div>
                </Link>
              </td>
              <td>{`${hero.pro_pick} / ${hero.pro_ban}`}</td>
              <td>{hero.pro_win}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageLayout>
  );
}

export default memo(Heroes);
