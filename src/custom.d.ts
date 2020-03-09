type RecordItem = {
  tags: Tag[];
  FromItem: string;
  type: string;
  amount: number;
  createdAt: Date | string;
}

type Tag = {
  id: string;
  name: string;
}
type RootState ={
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
  createRecordError: Error | null;
  createTagError: Error | null;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean;
  save: () => void;

}