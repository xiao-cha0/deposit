const localStoragekeyName = 'recordList';
const recordListModel = {
  clone(date: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(date));
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStoragekeyName) || '[]') as RecordItem[];
  },
  save(date: RecordItem[]){
    window.localStorage.setItem(localStoragekeyName,JSON.stringify(date))
  }
};
export default recordListModel