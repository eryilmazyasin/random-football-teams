import { ListItemAvatar } from "@mui/material";

export default interface ILigues {
  ingiltere_premier_league: ITeam[];
  ispanya_la_liga: ITeam[];
  italya_serie_a: ITeam[];
  hollanda_eredivise: ITeam[];
  fransa_ligue_1: ITeam[];
  portekiz_primeira_liga: ITeam[];
}

export interface ITeam {
  team_ligue: string;
  team_name: string;
  team_rate: number;
  team_logo: string;
}
