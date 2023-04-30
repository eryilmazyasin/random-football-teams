export type ILeagues =
  | "All"
  | "İngiltere Premier Ligue"
  | "İspanya La Liga"
  | "İtalya Serie A"
  | "Hollanda Eredivise"
  | "Fransa Ligue 1"
  | "Portekiz Primeira Ligue";

export type ITeamPower = "All" | "0 - 50" | "50 - 70" | "70 - 80" | "80 - 100";

export interface ITeams {
  team_ligue: string;
  team_name: string;
  team_rate: number;
  team_logo: string;
}

export default interface ILeague {
  title: ILeagues | string;
  teams: ITeams[];
}
