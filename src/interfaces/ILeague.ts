export type ILeagues =
  | "All"
  | "İngiltere Premier Ligue"
  | "İspanya La Liga"
  | "İtalya Serie A"
  | "Hollanda Eredivise"
  | "Fransa Ligue 1"
  | "Portekiz Primeira Ligue";

export default interface ILeague {
  title: ILeagues | any;
  teams: {
    team_ligue: string;
    team_name: string;
    team_rate: number;
    team_logo: string;
  }[];
}
