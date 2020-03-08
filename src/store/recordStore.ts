
import clone from '@/components/lib/clone';
const localStoragekeyName = 'recordList';
const  data: RecordItem[] | undefined = undefined;

const recordStore  = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStoragekeyName) || '[]') as RecordItem[];
    return this.recordList
  },
  saveRecords(){
    window.localStorage.setItem(localStoragekeyName,JSON.stringify(this.recordList))
  },
  createRecord(record: RecordItem){
    const record2: RecordItem = clone(record);
    record2.createAt = new Date().toISOString();
    this.recordList?.push(record2);
    recordStore.saveRecords();
  }
};
recordStore.fetchRecords();
export default recordStore;