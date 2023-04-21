export default interface ILeague {
  title: string;
  teams: {
    team_ligue: string;
    team_name: string;
    team_rate: number;
    team_logo: string;
  }[];
}
