import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './HeroDetail.css';
import { useSelector } from 'react-redux';
import { fetchHeroes } from 'pages/Heroes/control';

// Loader image
const Loader = () => (
  <div className="loader center">
    <i className="fa fa-sync fa-spin fa-10x" />
  </div>
);
function HeroDetail({ match }) {
  const [hero, setHero] = useState([]);
  const heroDetail = useSelector((state) => state.display);
  useEffect(() => {
    if (heroDetail !== []) {
      fetchHeroes().then((result) => {
        setHero(result);
      });
    } else {
      setHero(heroDetail);
    }
  }, []);
  // Check if params is matched in array of object
  let matchedHero = {};
  if (hero) {
    matchedHero = hero.find(
      (heroFound) => heroFound.localized_name === match.params.localized_name
    );
  }
  return (
    <div className="hero_detail">
      {matchedHero && matchedHero.img ? (
        <div
          className="header"
          style={{
            backgroundImage: `url(${`https://api.opendota.com${matchedHero?.img}`})`,
          }}
        >
          <div className="header__float">
            <div className="header__avatar">
              <img src={`https://api.opendota.com${matchedHero?.img}`} alt="" />
            </div>
            <h1 className="hero__name">{matchedHero?.localized_name}</h1>
            <div className="attack__type">
              <strong>{matchedHero?.attack_type}</strong> -{' '}
              {matchedHero?.roles && matchedHero?.roles.join(', ')}
            </div>
            <div className="str__agi__int">
              <div className="red">
                {matchedHero?.base_str} +{matchedHero?.str_gain}
              </div>
              <div className="green">
                {matchedHero?.base_agi} +{matchedHero?.agi_gain}
              </div>
              <div className="blue">
                {matchedHero?.base_int} +{matchedHero?.int_gain}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <div className="detail">
        <p>
          BASE ATTACK: <strong>{matchedHero?.base_attack_min}</strong> -{' '}
          <strong>{matchedHero?.base_attack_max}</strong>
        </p>
        <p>
          ATTACK RANGE: <strong>{matchedHero?.attack_range}</strong>
        </p>
        <p>
          ATTACK SPEED:{' '}
          <strong>
            {matchedHero?.attack_speed ? matchedHero?.attack_speed : '-'}
          </strong>
        </p>
        <p>
          HEALTH: <strong>{matchedHero?.base_health}</strong>
        </p>
        <p>
          PROJECTILE SPEED: <strong>{matchedHero?.projectile_speed}</strong>
        </p>
        <p>
          HEALTH REGEN: <strong>{matchedHero?.base_health_regen}</strong>
        </p>
        <p>
          MANA: <strong>{matchedHero?.base_mana}</strong>
        </p>
        <p>
          MANA REGEN: <strong>{matchedHero?.base_mana_regen}</strong>
        </p>
        <p>
          BASE ARMOR: <strong>{matchedHero?.base_armor}</strong>
        </p>
        <p>
          MAGIC RESISTANCE: <strong>{`${matchedHero?.base_mr}%`}</strong>
        </p>
        <p>
          MOVE SPEED: <strong>{matchedHero?.move_speed}</strong>
        </p>
        <p>
          TURN SPEED: <strong>{matchedHero?.turn_rate}</strong>
        </p>
        <p>
          NUMBER OF LEG: <strong>{matchedHero?.legs}</strong>
        </p>
        <p>
          CM ENABLED: <strong>{matchedHero?.cm_enabled ? 'yes' : 'no'}</strong>
        </p>
      </div>
    </div>
  );
}

HeroDetail.propTypes = {
  hero: PropTypes.shape({
    localized_name: PropTypes.string,
    img: PropTypes.string,
    attack_type: PropTypes.string,
    roles: PropTypes.array,
    base_str: PropTypes.number,
    base_agi: PropTypes.number,
    base_int: PropTypes.number,
    str_gain: PropTypes.number,
    agi_gain: PropTypes.number,
    int_gain: PropTypes.number,
    base_attack_min: PropTypes.number,
    base_attack_max: PropTypes.number,
    attack_range: PropTypes.number,
    attack_speed: PropTypes.number,
    base_health: PropTypes.number,
    projectile_speed: PropTypes.number,
    base_health_regen: PropTypes.number,
    base_mana: PropTypes.number,
    base_mana_regen: PropTypes.number,
    base_armor: PropTypes.number,
    base_mr: PropTypes.number,
    move_speed: PropTypes.number,
    turn_rate: PropTypes.number,
    legs: PropTypes.number,
    cm_enabled: PropTypes.bool,
  }),
};

HeroDetail.defaultProps = {
  location: {},
};

export default HeroDetail;
