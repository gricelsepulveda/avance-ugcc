<style scoped lang='scss'>
  * {
    box-sizing: border-box;
  }

  $color-1: #eeeeee;
  $color-2: #373737;
  $color-3: #bbbbbb;
  $color-4: #0F69C4;

  @mixin clean-list {
    list-style: none;
    list-style-image: none;
    list-indent: 0;
    list-style-type: none;
    list-style-position: outside;
    padding-inline-start: 0px;
    margin-block-start: 0;
    margin-block-end: 0 ;
  }

  @mixin flex-col-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  @mixin flex-row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  @mixin clean-margins {
    margin-left: 0;
    margin-right: 0;
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
  }

  .ugc-table-wrapper {
    width: 100%;
    @include flex-col-center;
    margin-bottom: 40px;
  }

  .ugc-table {
    width: calc(100% - 80px);
    @include flex-col-center;
    .ugc-tbl-headers-row, .ugc-tbl-body-row{
      @include flex-row-center;
      width: 100%;
      border-bottom: 1px solid $color-3;
      @include clean-margins;
      @include clean-list;
      &:nth-of-type(even) {
        background-color: $color-1;
      }
      .ugc-tbl-header-col, .ugc-tbl-body-col{
        @include flex-row-center;
        height: 50px;
        span {
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
          color: $color-2;
          &.left{ text-align: left;}
          &.center{ text-align: center;}
          &.right{ text-align: right;}
        }
        &:last-of-type{
          border-right: 0;
        }
      }
      .ugc-tbl-header-col {
        span {
          font-weight: 800;
          color: white;
        }
      }
    }
    .ugc-tbl-headers-row{
      border-top: $color-3;
      border-bottom: 2px solid $color-3;
      background-color: $color-4;
    }
    .ugc-tbl-body{
      width: 100%;
      @include flex-col-center;
      &.empty {
        height: 80px;
      }
    }
  }
  .ugc-table-search{
    margin-left: 40px;
    @include flex-row-center;
    margin-bottom: 20px;
    align-self: flex-start;
    input {
      height: 48px;
      padding-left: 20px;
      padding-right: 20px;
      width: 300px;
      border: 1px solid $color-3;
    }
    em {
      display: inline-block;
      margin-left: 10px;
      font-size: 18px;
      color: $color-2;
    }
  }
  .ugc-table-paginator{
    margin-right: 40px;
    margin-top: 20px;
    align-self: flex-end;
    @include flex-row-center;
    .ugc-tbl-pag-button {
      height: 36px;
      padding:0px;
      width: 36px;
      max-width: 36px;
      border: 0;
      @include flex-row-center;
      background: $color-4;
      color: white;
      font-size: 18px;
      &.disabled {
        background: $color-1;
      }
    }
    input {
      height: 36px;
      border: 0;
      width: 36px;
      margin-left: 5px;
      margin-right: 5px;
      text-align: center;
      pointer-events: none;
    }
    select {
      margin-left: 10px;
      height: 36px;
      border: 1px solid $color-3;
      width: 48px;
    }
  }
</style>

<template>
  <div class='ugc-table-wrapper mx-auto'>
    <div class='ugc-table-search'>
      <input type="text" v-model='search' @keyup='onSearch'/>
      <em class="fas fa-search"></em>
    </div>
    <div class='ugc-table'>
      <ul class='ugc-tbl-headers-row'>
        <li :style='{width: `${headers.width}%` }' class='ugc-tbl-header-col' v-for='headers in tableData.headers' :key='headers.id'>
          <span :class='headers.align'>{{ headers.value }}</span>
        </li>
      </ul>
      <div class='ugc-tbl-body' v-if='tableData.rows.length > 0'>
        <ul class='ugc-tbl-body-row' v-for='(rows, index) in tableData.rows' :key='`row-${index}`'>
          <li :style='{width: `${cols.width}%` }' class='ugc-tbl-body-col' v-for='cols in rows' :key='cols.id' @click="onclick">
            <span v-if='cols.render == null' :class='cols.align'>{{ cols.value }}</span>
            <div class='ugc-tbl-checker' v-else v-html="cols.render"></div>
          </li>
        </ul>
      </div>
      <div class='ugc-tbl-body empty' v-else><p>No hay resultados que mostrar</p></div>
    </div>
    <!--PAGINATOR-->
    <div class='ugc-table-paginator'>
      <button class='ugc-tbl-pag-button next' v-bind:class="{disabled: activePage == 1}" @click='changePage("prev")'>&#8592;</button>
      <input type="text" :value='activePage'/>
      <button class='ugc-tbl-pag-button next' @click='changePage("next")'>&#8594;</button>
      <select @change='changePerPage($event)'>
        <option v-for="(options, index) in pageOptions" :value="options" :selected='setSelected(options)' :key='`row-${index}`'>
          {{ options }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'

  export type TableCommon = {
    value: string | number | undefined,
    name: string,
    width: number | 'auto',
    align: 'left' | 'center' | 'right'
  }

  export interface TableCol extends TableCommon {
    render: string | null,
    editable: boolean,
    onEdit: boolean
  }

  export default Vue.component('Ugcc-table', {
    props: [ 'newData', 'headers' , 'rows', 'onclick'],
    data(): { pages: number; activePage: number; itemsPerPage: number; pageOptions: number[]; toDelete: number[]; tableData: { headers:any[], rows: any[]}, search: string } {
      let self=<any>this
      return {
        pages: 3,
        activePage: 1,
        itemsPerPage: 10,
        pageOptions: [3, 10, 50],
        toDelete: [1, 3],
        search: '',
        tableData: { 
          headers: self.headers,
          rows: self.rows
        }
      }
    },
    methods: {
      setSelected: function(number: number): boolean {
        let self=<any>this
        return number == self.itemsPerPage
      },
      changePage: function(action: 'prev' | 'next'): void{
        let self=<any>this
        const pg:number = self.activePage
        self.activePage = action == 'prev' && pg > 1 ? pg-1 : action == 'next' ? pg+1 : 1 
      },
      changePerPage: function(event:any): void{
        let self=<any>this
        self.itemsPerPage = event.target.value
      },
      bindNewData: function() : void{
        let self=<any>this
        if (self.newData != undefined && self.newData.length > 0 ) {
          self.tableData.rows.push(self.newData)
        }
      },
      onSearch: function() :void {
        let self=<any>this
        //@ts-ignore
        self.tableData.rows = self.rows.filter((row:TableCommon[]) => row.filter((col:TableCommon) => col.value.toString().includes(self.search)).length > 0)
      }
    },
    watch: {
      newData: function(newVal, oldVal): void{
        let self=<any>this
        self.bindNewData()
      }
    }
  })
</script>