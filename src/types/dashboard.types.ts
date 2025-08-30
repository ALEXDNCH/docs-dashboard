export type TDashboardUsername = string;
export type TDashboardAppName = "MyApp" | "YouApp";

export interface IDocResponse {
  id: number;
  name: string;
  description: string;
  image: string | null;
}

export type Doc = IDocResponse & {
  sizeBytes: number;
  sizeLabel: string;
};
