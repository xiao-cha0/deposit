const localStoragekeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  clone(date: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(date));
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