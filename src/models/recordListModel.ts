import clone from '@/components/lib/clone';

const localStoragekeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem){
    const record2: RecordItem = clone(record);
    record2.createAt = new Date();
    this.data.push(record2);
    this.save();
  },
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStoragekeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save(){
    window.localStorage.setItem(localStoragekeyName,JSON.stringify(this.data))
  }
};
export default recordListModel