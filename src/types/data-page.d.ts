export interface IDataPage<IData extends object> extends IData {
  limit: number;
  total: number;
  skip: number;
}
