import React from 'react';
import PropTypes from 'prop-types';
import './HeroDetail.css';

function HeroDetail({ location = {} }) {
  const { hero = {} } = location.state || {};
  return (
    <div className="hero_detail">
      <div
        className="header"
        style={{
          backgroundImage: `url(${`https://api.opendota.com${hero.img}`})`,
        }}
      >
        <div className="header__float">
          <div className="header__avatar">
            <img src={`https://api.opendota.com${hero.img}`} alt="" />
          </div>
          <h1 className="hero__name">{hero.localized_name}</h1>
          <div className="attack__type">
            <strong>{hero.attack_type}</strong>
            {' '}
            -
            {' '}
            {hero.roles && hero.roles.join(', ')}
          </div>
          <div className="str__agi__int">
            <div className="red">
              {hero.base_str}
              {' '}
              +
              {hero.str_gain}
            </div>
            <div className="green">
              {hero.base_agi}
              {' '}
              +
              {hero.agi_gain}
            </div>
            <div className="blue">
              {hero.base_int}
              {' '}
              +
              {hero.int_gain}
            </div>
          </div>
        </div>
      </div>
      <div className="detail">
        <p>
          BASE ATTACK:
          {' '}
          <strong>{hero.base_attack_min}</strong>
          {' '}
          -
          {' '}
          <strong>{hero.base_attack_max}</strong>
        </p>
        <p>
          ATTACK RANGE:
          {' '}
          <strong>{hero.attack_range}</strong>
        </p>
        <p>
          ATTACK SPEED:
          {' '}
          <strong>{hero.attack_speed ? hero.attack_speed : '-'}</strong>
        </p>
        <p>
          HEALTH:
          {' '}
          <strong>{hero.base_health}</strong>
        </p>
        <p>
          PROJECTILE SPEED:
          {' '}
          <strong>{hero.projectile_speed}</strong>
        </p>
        <p>
          HEALTH REGEN:
          {' '}
          <strong>{hero.base_health_regen}</strong>
        </p>
        <p>
          MANA:
          {' '}
          <strong>{hero.base_mana}</strong>
        </p>
        <p>
          MANA REGEN:
          {' '}
          <strong>{hero.base_mana_regen}</strong>
        </p>
        <p>
          BASE ARMOR:
          {' '}
          <strong>{hero.base_armor}</strong>
        </p>
        <p>
          MAGIC RESISTANCE:
          {' '}
          <strong>{`${hero.base_mr}%`}</strong>
        </p>
        <p>
          MOVE SPEED:
          {' '}
          <strong>{hero.move_speed}</strong>
        </p>
        <p>
          TURN SPEED:
          {' '}
          <strong>{hero.turn_rate}</strong>
        </p>
        <p>
          NUMBER OF LEG:
          {' '}
          <strong>{hero.legs}</strong>
        </p>
        <p>
          CM ENABLED:
          {' '}
          <strong>{hero.cm_enabled ? 'yes' : 'no'}</strong>
        </p>
      </div>
    </div>
  );
}

HeroDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      hero: PropTypes.shape({
        //
        localized_name: PropTypes.string,
        img: PropTypes.string,
        attack_type: PropTypes.string,
        // eslint-disable-next-line react/forbid-prop-types
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
    }),
  }),
};

HeroDetail.defaultProps = {
  location: {},
};

export default HeroDetail;
