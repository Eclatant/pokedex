import React from 'react';
import PokedexPercentBar from './PokedexPercentBar';


const PokedexStats = ({displaySprite, stats, species })=>(
  <div className="pokedex-stats pokedex-popup-block">
    <div>
      <div className="pokedex-stats-sprites">
        <img src={displaySprite} alt="No Data"/>
      </div>
      <div className="pokedex-stats-wrapper">
        {stats.map(({ stat, base_stat})=>(
          <PokedexPercentBar key={stat.name} min="0" max="300" value={base_stat} title={stat.name} />
        ))
        }
      </div>
    </div>
    <div>
      <div className="pokedex-stats-description">
        { species.flavor_text_entries && species.flavor_text_entries.length>0
          ? <p></p>
          : <div style={{textAlign:"center"}}><div className="loader"></div></div>
        }
      </div>
    </div>
  </div>
);

export default PokedexStats;
