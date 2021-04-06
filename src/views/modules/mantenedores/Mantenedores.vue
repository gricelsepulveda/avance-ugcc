<style scoped lang='scss'>
  $color-1: #eeeeee;
  $color-1: #373737;
  $color-3: #bbbbbb;
  $color-4: #0F69C4;

  * {
    color: $color-1;
    box-sizing: border-box;
  }

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

  @mixin flex-row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  @mixin flex-col-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .flex-row-center{
    @include flex-row-center;
  }
  .flex-col-center{
    @include flex-col-center;
  }
  .create-zone{
    position: relative;
    span {
      font-size: 18px;
    }
    input {
      margin-left: 20px;
      width: 300px;
      height: 48px;
      padding-left: 20px;
      padding-right: 20px;
      border: 1px solid $color-3;
    }
    .ugcc-list-wrapper{
      position: relative
    }
    .ugcc-list{
      @include flex-col-center;
      @include clean-list;
      background: white;
      border: 1px solid $color-3;
      width: 300px;
      position: absolute;
      top: calc(100% - 2px);
      right: 0px;
      border-top: 0px;
      &.open {
        border-top: 1px solid $color-3;
      }
      li {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        height: 36px;
        text-align: left;
        cursor: pointer;
        position: relative;
        &:hover {
          line-height: 36px;
          background: $color-4;
          color: white;
          .ugcc-list-checkin{
            em {
            color: white;
            }
          }
        }
        .ugcc-list-checkin{
          position: absolute;
          right: 20px;
          height: 36px;
          line-height: 36px;
          em {
            color: $color-4;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="container-fluid">
    <Toast message='Esta region ya existe' v-bind:show='showToast' v-bind:right='200' v-bind:top='200' />
    <Modal 
      title="Modificando region - Region I"
      v-bind:body="`<div class='flex-col-center' style='width: 100%'>
              <span>Nombre Region</span>
              <input type='text' value='Region I' style='margin-top: 10px'>
              <span style='margin-top: 20px'>Disponible:</span>
              <input type='checkbox' style='margin-top: 10px'>
              <div class='flex-row-center ugcc-modal-buttons' style='align-self: flex-end; margin-top: 40px'>
                <button type='button' class='normal'>Cancelar</button>
                <button type='button' class='destacado'>Guardar</button>
              </div>
            </div>`"
      v-bind:show='openModal'
      v-bind:onclose='setClose'
      size='sm'
    />
    <!--ENCABEZADO-->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="text-center mt-5">Mantenedor regiones</h1>
      </div>
    </div>
    <!--DEFINIR REGION-->
    <div class="row">
      <div class="col-lg-6 mx-auto mt-5 mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto flex-row-center create-zone">
            <span>Crear region:</span>
            <div class='ugcc-list-wrapper'>
              <input type='src' v-model='new_region' @keyup='onCreateRegion' @click='setOpen' placeholder="Ej: Region Metropolitana">
              <ul class='ugcc-list' v-bind:class='{open: openList}' v-if="openList">
                <li @click='onCreateSelectedRegion(regions.NOMBRE_REGION)' v-for='regions in filteredRegions' :key='`filtered-${regions.ID_REGION}-${regions.NOMBRE_REGION}`'>
                  {{ regions.NOMBRE_REGION }}
                  <span class='ugcc-list-checkin' v-if='checkExist(tableData.rows, regions.ID_REGION)'>
                    <em class="fas fa-check"></em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <TablaMantenedor 
        v-bind:newData='new_region_selection'
        v-bind:headers='tableData.headers'
        v-bind:rows='tableData.rows'
        v-bind:onclick='oneClick'
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TablaMantenedor, { TableCol, TableCommon} from "./TablaMantenedor.vue"
  import Toast from './Toast.vue'
  import Modal from './Modal.vue'
  
  export type Regions = {
    ID_REGION: number | undefined,
    NOMBRE_REGION: string,
    ESTADO: boolean
  }
        
  export default Vue.extend({
    name: "Mantenedores",
    data(): { result: any, delay:number, clicks:number, timer: any, regions: Regions[]; new_region: string; filteredRegions: Regions[],  showToast:boolean, openModal:boolean, openList: boolean, new_region_selection: TableCol[] | undefined, tableData: { headers:TableCommon[], rows:TableCol[][]}  } {
      return {
        result: [],
        delay: 700,
        clicks: 0,
        timer: null,
        regions: [
          { ID_REGION: 1, NOMBRE_REGION: 'Region I', ESTADO: true },
          { ID_REGION: 2, NOMBRE_REGION: 'Region II', ESTADO: true },
          { ID_REGION: 3, NOMBRE_REGION: 'Region III', ESTADO: true },
          { ID_REGION: 4, NOMBRE_REGION: 'Region IV', ESTADO: true },
          { ID_REGION: 5, NOMBRE_REGION: 'Region V', ESTADO: true },
          { ID_REGION: 6, NOMBRE_REGION: 'Region VI', ESTADO: true },
          { ID_REGION: 7, NOMBRE_REGION: 'Region VII', ESTADO: true },
          { ID_REGION: 8, NOMBRE_REGION: 'Region VIII', ESTADO: true },
          { ID_REGION: 9, NOMBRE_REGION: 'Region IX', ESTADO: true },
          { ID_REGION: 10, NOMBRE_REGION: 'Region X', ESTADO: true },
          { ID_REGION: 11, NOMBRE_REGION: 'Region XI', ESTADO: true },
          { ID_REGION: 12, NOMBRE_REGION: 'Region XII', ESTADO: true }
        ],
        filteredRegions: [],
        openList: false,
        openModal: false,
        new_region: '',
        new_region_selection: undefined,
        tableData: {
          headers: [
            { value: '#', name: 'ID_REGION', width: 10, align: 'center'},
            { value: 'Nombre', name: 'NOMBRE_REGION', width: 40, align: 'center'},
            { value: 'Estado', name: 'ESTADO', width: 25, align: 'center'},
            { value: 'Eliminar', name: 'DELETE', width: 15, align: 'center'}
          ],
          rows: [
            [
              { value: 1, name: 'ID_REGION', width: 10, align: 'center', render: null, editable: false, onEdit: false},
              { value: 'Region I', name: 'NOMBRE_REGION', align: 'center', width: 40, render: null, editable: true, onEdit: false},
              { value: 'Disponible', name: 'ESTADO', align: 'center', width: 25, render: null, editable: true, onEdit: true},
              { value: 'Eliminar', name: 'DELETE', width: 15, align: 'center', render: `<input type='checkbox'>`, editable: true, onEdit: false}
            ],
            [
              { value: 2, name: 'ID_REGION', width: 10, align: 'center', render: null, editable: false, onEdit: false},
              { value: 'Region II', name: 'NOMBRE_REGION', align: 'center', width: 40, render: null, editable: true, onEdit: false},
              { value: 'No disponible', name: 'ESTADO', align: 'center', width: 25, render: null, editable: true, onEdit: true},
              { value: 'Eliminar', name: 'DELETE', width: 15, align: 'center', render: `<input type='checkbox'>`, editable: true, onEdit: false}
            ],
            [
              { value: 3, name: 'ID_REGION', width: 10, align: 'center', render: null, editable: false, onEdit: false},
              { value: 'Region III', name: 'NOMBRE_REGION', align: 'center', width: 40, render: null, editable: true, onEdit: false},
              { value: 'No disponible', name: 'ESTADO', align: 'center', width: 25, render: null, editable: true, onEdit: true},
              { value: 'Eliminar', name: 'DELETE', width: 15, align: 'center', render: `<input type='checkbox'>`, editable: true, onEdit: false}
            ]
          ]
        },
        showToast: false
      }
    },
    methods: {
      onCreateRegion: function(): void{
        this.openList = true
        this.filteredRegions = this.new_region != '' ? this.regions.filter((region) => region.NOMBRE_REGION.includes(this.new_region)) : []
      },
      checkExist: function (dataToCheck:TableCol[][], regionInd:number | undefined): boolean {
          let checker:boolean = false
          dataToCheck.filter((row:TableCol[], indRow) => row.filter((col:TableCol) => col.name == 'ID_REGION' ? col.value == regionInd ? checker = true : null : null) )
          return checker
      },
      onCreateSelectedRegion: function(itemName:string): void {
        let self=<any>this
        this.openList = false
        let filter = this.regions.filter((region) => region.NOMBRE_REGION == itemName)

        if (filter.length > 0){
          const formatRegion = () => {  
            let item:TableCol[] = [
                { value: filter[0].ID_REGION, name: 'ID_REGION', width: 10, align: 'center', render: null, editable: false, onEdit: false},
                { value: filter[0].NOMBRE_REGION, name: 'NOMBRE_REGION', align: 'center', width: 40, render: null, editable: true, onEdit: false},
                { value: filter[0].ESTADO ? 'Disponible' : 'No Disponible' , name: 'ESTADO', align: 'center', width: 25, render: null, editable: true, onEdit: true},
                { value: 'Eliminar', name: 'DELETE', width: 15, align: 'center', render: `<input type='checkbox'>`, editable: true, onEdit: false}
            ]
            return item
          }
          let check:boolean = this.checkExist(this.tableData.rows, filter[0].ID_REGION)
          if (check == false ) { 
            this.new_region_selection = formatRegion() 
          } else { 
            this.showToast = true
            setTimeout(() => { this.showToast = false }, 2000) 
          }
        }
      },
      onRowClick: function() : void {
        if (this.result.includes('dblclick')) {
          this.openModal = true
          this.result = []
        }
      },
      setOpen: function() :void  {
        this.openList = !this.openList
      },
      setClose: function() :void  {
        this.openModal = false
      },
      oneClick(event:any): void {
        this.clicks++;
        if (this.clicks === 1) {
          this.timer = setTimeout( () => {
            this.result.push(event.type);
            this.clicks = 0
          }, this.delay);
        } else {
          clearTimeout(this.timer);  
          this.result.push('dblclick');
          this.clicks = 0;
        }
        this.onRowClick()        
      }   
    },
    components: {
      TablaMantenedor,
      Toast,
      Modal
    }
  })
</script>