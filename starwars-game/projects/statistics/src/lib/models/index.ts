export interface Statistic {
  year: number
  month: number
  nbSuccess: number,
  nbFailed: number
}

export type Statistics = Statistic[]