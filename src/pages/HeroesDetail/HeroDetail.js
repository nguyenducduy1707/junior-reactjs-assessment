import React from 'react';
import PropTypes from 'prop-types';
import './HeroDetail.css';
import { useSelector } from 'react-redux';

// Loader image
const Loader = () => (
  <div className="loader center">
    <i className="fa fa-sync fa-spin fa-10x" />
  </div>
);
function HeroDetail() {
  const matchedHero = useSelector((state) => {
    return state.displayHeroDetail.selectedHeroesId;
  }
  );
  return (
    <div className="hero_detail">
      {matchedHero && matchedHero.img ? (
        <div
          className="header"
          style={{
            backgroundImage: `url(${`https://api.opendota.com${matchedHero.img}`})`,
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

export default HeroDetail;
