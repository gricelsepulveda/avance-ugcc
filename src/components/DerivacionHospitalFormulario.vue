<template>
  <ol class="list-unstyled" id="collapsibleFlushAccordion">
    <!-- Datos Llamada -->
    <li class="border border-primary mb-2 shadow-sm">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading1"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleFlushCollapse1"
        aria-controls="collapsibleFlushCollapse1"
        aria-expanded="true"
      > 
        <div>
          <span class="cl cl-arrow-right mr-2"></span>
          <span class="h5 mb-0">Datos Llamada</span>
        </div>
        <span
          class="toggler-icon cl cl-m-arrow-down cl-2x"
          aria-hidden="true"
        ></span>
      </button>
      <div
        class="collapse show"
        id="collapsibleFlushCollapse1"
        aria-labelledby="collapsibleFlushHeading1"
        data-parent="#collapsibleFlushAccordion"
      >
        <div class="pr-5 pb-3 pl-3">
          <div class="row">
            <div class="col-6">
              <h6 class="line line-info text-left">Responsable</h6>
              <div class="form-group">
                <label>Responsable Llamada:</label>
                <select class="form-control">
                  <option></option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <h6 class="line line-info text-left">Datos de Origen</h6>
              <div class="form-group">
                <label>(*) Hospital de Origen:</label>
                <select class="form-control" disabled="disabled">
                  <option></option>
                </select>
              </div>

              <div class="form-group">
                <label>Unidad de origen:</label>
                <select class="form-control">
                  <option></option>
                </select>
              </div>

              <div class="form-group">
                <label>Nombre médico derivador:</label>
                <select class="form-control">
                  <option></option>
                </select>
              </div>

              <div class="form-group">
                <label>Teléfono:</label>
                <select class="form-control">
                  <option></option>
                </select>
              </div>

            </div>
          </div>
        </div>
      </div>
    </li>
    <!-- Datos Paciente -->
    <li class="border border-primary shadow-sm">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading2"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleFlushCollapse2"
        aria-controls="collapsibleFlushCollapse2"
        aria-expanded="false"
      >
        <div>
          <span class="cl cl-arrow-right mr-2"></span>
          <span class="h5 mb-0">Datos Paciente</span>
        </div>
        <span
          class="toggler-icon cl cl-m-arrow-down cl-2x"
          aria-hidden="true"
        ></span>
      </button>
      <div
        class="collapse"
        id="collapsibleFlushCollapse2"
        aria-labelledby="collapsibleFlushHeading2"
        data-parent="#collapsibleFlushAccordion"
      >
        <div class="pr-5 pb-3 pl-3">
          <div class="row">
            <div class="col-6">
              <h6 class="line line-info text-left">Datos del Paciente</h6>
              <div class="row derivaciones__alert alert mt-3 mx-2 bg-info shadow">
                <div class="col-8">
                  <div class="form-group">
                    <label class="text-white my-2 mb-3">COVID: Registre cuando corresponda: </label>
                    <select class="form-control rounded-pill">
                      <option>Seleccione:</option>
                      <option>NO</option>
                      <option>NO RELACIONADO CON COVID</option>
                      <option>POSITIVO EXAMEN DE SARS-CoV-2</option>
                      <option>SOSPECHOSO SARS-CoV-2 CON EXAMEN</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label>RUT paciente:</label>
                    <select class="form-control">
                      <option></option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label>Nombre paciente:</label>
                    <input class="form-control" type="text" placeholder="Escriba aquí" value="Texto de ejemplo"/>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>Edad paciente:</label>
                        <select class="form-control">
                          <option></option>
                        </select>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="form-group">
                        <label>Sexo paciente:</label>
                        <select class="form-control">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>Paciente Fonasa:</label> <br>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" id="radioExample" type="radio"/>
                          <label class="form-check-label" for="radioExample">SI</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" id="radioExample" type="radio"/>
                          <label class="form-check-label" for="radioExample">NO</label>
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="form-group">
                        <label>Tramo Fonasa:</label>
                        <input class="form-control" type="text" placeholder="Escriba aquí" value="B" readonly="readonly"/>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>PRAIS:</label>
                        <input class="form-control" type="text" placeholder="Escriba aquí" value="000" readonly="readonly"/>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>(*) Tipo paciente:</label>
                        <select class="form-control" disabled="disabled">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>                  

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>Grupo Diagnóstico:</label>
                        <select class="form-control">
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>Diagnóstico:</label>
                        <select class="form-control">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Diagnóstico:</label>
                    <textarea class="form-control" type="password" placeholder="Escriba aquí" value="Texto de ejemplo"></textarea>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>Diagnóstico GES:</label>
                        <select class="form-control" disabled="disabled">
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>(*) Caracterización caso:</label>
                        <select class="form-control" disabled="disabled">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>                  
                  
                </div>
              </div>
            </div>
            <div class="col-6">
              <h6 class="line line-info text-left">Requerimiento y Condición de Traslado</h6>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label>(*) Requiere cama:</label>
                    <select class="form-control" disabled="disabled">
                      <option></option>
                    </select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>Detalle tipo de cama:</label>
                    <input class="form-control" type="text" placeholder="Escriba aquí" />
                  </div>
                </div>
                <div class="form-group col-12">
                  <label>Observaciones específicas:</label>
                  <textarea class="form-control" rows="15" type="password" placeholder="Escriba aquí"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DerivacionHospitalFormulario",
});
</script>
