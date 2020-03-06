import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/components/lib/clone';

Vue.use(Vuex);

const store =  new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record){
      const record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords');
     // recordStore.saveRecords();
    },
    saveRecords(state){
      window.localStorage.setItem('recordLIst', JSON.stringify(state.recordList))
    },
  },


});

export  default store;
