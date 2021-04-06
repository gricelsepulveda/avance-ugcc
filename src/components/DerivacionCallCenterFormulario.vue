<template>
  <ol class="list-unstyled" id="collapsibleFlushAccordion">
    <!-- Bitátora -->
    <li class="border border-primary mb-1">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading2"
        type="button"
        data-toggle="collapse"
        data-target="#bitacora"
        aria-controls="bitacora"
        aria-expanded="true"
      >
        <div>
          <span class="cl cl-arrow-right mr-2"></span>
          <span class="h5 mb-0">Bitácora</span>
        </div>
        <span
          class="toggler-icon cl cl-m-arrow-down cl-2x"
          aria-hidden="true"
        ></span>
      </button>
      <div
        class="collapse show"
        id="bitacora"
        aria-labelledby="collapsibleFlushHeading2"
        data-parent="#collapsibleFlushAccordion"
      >
        <div class="pr-5 pb-3 pl-3">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-hover">
                <thead class="bg-light">
                  <tr class="text-center">
                    <th scope="col">Id derivación anterior</th>
                    <th scope="col">Fecha de egreso</th>
                    <th scope="col">Destino</th>
                    <th scope="col">Tipo Compra</th>
                    <th scope="col">Autoriza</th>
                    <th scope="col">Motivo</th>
                    <th scope="col">Justificación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center">
                    <td v-for="i in 7" :key="i">--</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-12 text-center">
              <button type="button" class="btn btn-outline-success mr-4">
                Derivación exitosa
              </button>
              <button type="button" class="btn btn-outline-danger">
                Derivación erronea
              </button>
            </div>
          </div>

          <div class="row my-5">
            <div
              class="col-12 d-flex justify-content-center align-items-center"
            >
              <p>Motivo de anulación:</p>

              <div class="form-group mx-4 mb-0">
                <select class="form-control" style="width: 10rem;">
                  <option>Seleccione</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <button type="button" class="btn btn-outline-danger">
                Derivación nula
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <h6 class="line line-info text-left">Bitácora</h6>
              <table class="table table-bordered table-hover">
                <thead class="bg-light">
                  <tr class="text-center">
                    <th scope="col">Fecha</th>
                    <th scope="col">Usuarios</th>
                    <th scope="col">Desde</th>
                    <th scope="col">Tipo Compra</th>
                    <th scope="col">Hacia</th>
                  </tr>
                </thead>
                <tbody v-if="sd">
                  <tr class="text-center">
                    <td v-for="i in 5" :key="i">--</td>
                  </tr>
                </tbody>

                <tbody v-else>
                  <tr class="text-center">
                    <td colspan="12" class="py-4"><i class="fas fa-info-circle"></i> No existen archivos anexados al proceso</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </li>
    <!-- Derivación -->
    <li class="border border-primary mb-1">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading2"
        type="button"
        data-toggle="collapse"
        data-target="#derivacion"
        aria-controls="derivacion"
        aria-expanded="false"
      >
        <div>
          <span class="cl cl-arrow-right mr-2"></span>
          <span class="h5 mb-0">Derivación</span>
        </div>
        <span
          class="toggler-icon cl cl-m-arrow-down cl-2x"
          aria-hidden="true"
        ></span>
      </button>
      <div
        class="collapse"
        id="derivacion"
        aria-labelledby="collapsibleFlushHeading2"
        data-parent="#collapsibleFlushAccordion"
      >
        <div class="pr-5 pb-3 pl-3">
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>ID derivación</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="form-group">
                <label>Fecha de creación</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="form-group">
                <label>Último modificador</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group">
                    <label>Convenio</label> <br />
                    <div class="form-check form-check-inline">
                      <input
                        id="radioExample321"
                        type="radio"
                        class="form-check-input"
                      />
                      <label for="radioExample321" class="form-check-label"
                        >SI</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        id="radioExample123"
                        type="radio"
                        class="form-check-input"
                      />
                      <label for="radioExample123" class="form-check-label"
                        >NO</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Caso Especial</label> <br />
                    <div class="form-check form-check-inline">
                      <input
                        id="radioExample"
                        type="radio"
                        class="form-check-input"
                      /><label for="radioExample" class="form-check-label"
                        >SI</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        id="radioExample"
                        type="radio"
                        class="form-check-input"
                      /><label for="radioExample" class="form-check-label"
                        >NO</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Paciente crónico</label> <br />
                    <div class="form-check form-check-inline">
                      <input
                        id="radioExample"
                        type="radio"
                        class="form-check-input"
                      /><label for="radioExample" class="form-check-label"
                        >SI</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        id="radioExample"
                        type="radio"
                        class="form-check-input"
                      /><label for="radioExample" class="form-check-label"
                        >NO</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label>Contingencia</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder=""
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Creador</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="form-group">
                <label>Ultima Modificación</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label>Descartar Búsqueda por GRD</label>
                    <div class="form-check">
                      <input
                        id="radioExample"
                        type="radio"
                        class="form-check-input"
                      /><label for="radioExample" class="form-check-label"
                        >SI</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        id="radioExample"
                        type="radio"
                        class="form-check-input"
                      /><label for="radioExample" class="form-check-label"
                        >NO</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-7">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Ej: Cardiopatías congénitas, trasplantes y quemados"
                      value=""
                    />
                  </div>
                </div>
              </div>

              <div class="row my-2 mb-4">
                <div class="col-2 d-flex align-items-center">
                  <div class="form-group mb-0">
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        id="customCheckExampleds"
                        type="checkbox"
                        disabled="disabled"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheckExamplesd"
                        >ECMO</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <button
                    type="button"
                    class="btn btn-success btn-sm btn-block rounded-3"
                  >
                    Ver Ficha ECMO
                  </button>
                </div>
                <div class="col-6 d-flex align-items-center">
                  <div class="form-group mb-0">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        id="checkExampleav"
                        type="checkbox"
                      />
                      <label class="form-check-label" for="checkExampleav"
                        >Asistencia Ventricular</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4 py-3">
                <div class="col d-flex align-items-center">
                  <div class="form-group mb-0">
                    <label class="mr-3 mb-0">Alerta de Búsqueda</label>
                    <div class="form-check form-check-inline">
                      <input
                        id="alerta_busqueda"
                        type="radio"
                        class="form-check-input"
                      />
                      <label for="alerta_busqueda" class="form-check-label"
                        >Rojo</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        id="alerta_busqueda"
                        type="radio"
                        class="form-check-input"
                      />
                      <label for="alerta_busqueda" class="form-check-label"
                        >Amarillo</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        id="alerta_busqueda"
                        type="radio"
                        class="form-check-input"
                      />
                      <label for="alerta_busqueda" class="form-check-label"
                        >Verde</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <input
                    class="form-control"
                    type="text"
                    placeholder=""
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <!-- Datos Llamada -->
    <li class="border border-primary mb-1">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading1"
        type="button"
        data-toggle="collapse"
        data-target="#datosLlamada"
        aria-controls="datosLlamada"
        aria-expanded="false"
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
        class="collapse"
        id="datosLlamada"
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
    <li class="border border-primary mb-1">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading2"
        type="button"
        data-toggle="collapse"
        data-target="#datosPaciente"
        aria-controls="datosPaciente"
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
        id="datosPaciente"
        aria-labelledby="collapsibleFlushHeading2"
        data-parent="#collapsibleFlushAccordion"
      >
        <div class="pr-5 pb-3 pl-3">
          <div class="row">
            <div class="col-6">
              <h6 class="line line-info text-left">Datos del Paciente</h6>
              <div class="row derivaciones__alert alert mt-3 mx-2 bg-info  shadow">
                <div class="col-12">
                  <div class="form-group">
                    <label class="text-white my-2 mb-3">COVID: Registre cuando corresponda: </label>
                    <select class="form-control rounded-pill">
                      <option>Seleccione:</option>
                      <option>POSITIVO EXAMEN DE SARS-CoV-2</option>
                      <option>NEGATIVO EXAMEN DE SARS-CoV-2</option>
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
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Escriba aquí"
                      value="Texto de ejemplo"
                    />
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
                          <input
                            class="form-check-input"
                            id="radioExamplefonasa"
                            type="radio"
                          />
                          <label class="form-check-label" for="radioExamplefonasa"
                            >SI</label
                          >
                        </div>

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            id="radioExamplefonasa"
                            type="radio"
                          />
                          <label class="form-check-label" for="radioExamplefonasa"
                            >NO</label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="form-group">
                        <label>Tramo Fonasa:</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Escriba aquí"
                          value="B"
                          readonly="readonly"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>PRAIS:</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Escriba aquí"
                          value="000"
                          readonly="readonly"
                        />
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
                    <textarea
                      class="form-control"
                      type="password"
                      placeholder="Escriba aquí"
                      value="Texto de ejemplo"
                    ></textarea>
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
              <h6 class="line line-info text-left">
                Requerimiento y Condición de Traslado
              </h6>
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
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Escriba aquí"
                    />
                  </div>
                </div>
                <div class="form-group col-12">
                  <label>Observaciones específicas:</label>
                  <textarea
                    class="form-control"
                    rows="15"
                    type="password"
                    placeholder="Escriba aquí"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <!-- Datos de Destino -->
    <li class="border border-primary mb-1">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading2"
        type="button"
        data-toggle="collapse"
        data-target="#datosDestino"
        aria-controls="datosDestino"
        aria-expanded="false"
      >
        <div>
          <span class="cl cl-arrow-right mr-2"></span>
          <span class="h5 mb-0">Datos de Destino</span>
        </div>
        <span
          class="toggler-icon cl cl-m-arrow-down cl-2x"
          aria-hidden="true"
        ></span>
      </button>
      
      <div
        class="collapse"
        id="datosDestino"
        aria-labelledby="collapsibleFlushHeading2"
        data-parent="#collapsibleFlushAccordion"
      >
        <div class="pr-5 pb-3 pl-3">
          <div class="row mt-3">
            <div class="col-12 text-center">
              <button type="button" class="btn-pill-info mr-3 shadow">
                Buscar Destino
              </button>
              <button type="button" class="btn-pill-info shadow">
                Asignar Destino Manual
              </button>
            </div>
            <div class="col-12">
              <div class="row mt-5">
                <!-- Col Izq -->
                <div class="col-6">
                  <div class="form-group">
                    <label>Tipo de Destino:</label>
                    <select class="form-control" disabled>
                      <option>Seleccione</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Destino:</label>
                    <input class="form-control" type="text" disabled />
                  </div>
                  <div class="form-group">
                    <label>Nombre Médico Unidad Receptora:</label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="form-group">
                    <label>Teléfono:</label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="form-group">
                    <label for="camaEncontrada">Cama Encontrada</label>
                    <b-form-datepicker id="camaEncontrada" v-model="camaEncontrada" class="mb-2"></b-form-datepicker>
                  </div>
                </div>
                <!-- Col Der -->
                <div class="col-6">
                  <div class="form-group">
                    <label for="pacienteLlega">Paciente llega a hospital/clínica destino</label>
                    <b-form-datepicker id="pacienteLlega" v-model="pacienteLlega" class="mb-2"></b-form-datepicker>
                  </div>
                  <div class="form-group">
                    <label for="egresoPaciente">Egreso de Paciente hospital/clínica</label>
                    <b-form-datepicker id="egresoPaciente" v-model="egresoPaciente" class="mb-2"></b-form-datepicker>
                  </div>
                  <div class="form-group">
                    <label>Tipo de Compra:</label>
                    <select class="form-control" disabled>
                      <option>Seleccione</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Tipo de Egreso:</label>
                    <select class="form-control" disabled>
                      <option>Seleccione</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row pt-4">
            <div class="col-12">
              <h6 class="line line-info text-left">Archivos Anexados al Proceso</h6>

              <div class="row mt-3">
                <div class="col-4">
                  <div class="form-group">
                    <label>Seleccione un archivo:</label>
                    <div class="custom-file">
                      <input class="custom-file-input" id="customFileExample" type="file" />
                      <label class="custom-file-label" for="customFileExample" data-browse="Seleccionar">Escoge un archivo</label>
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="form-group col-12">
                    <label>Descripción:</label>
                    <textarea class="form-control" type="text" rows="5" placeholder="Agregue una descripción (opcional)"></textarea>
                  </div>
                </div>
                <div class="col-3 text-center my-auto">
                  <button @click="archivoAnexado = !archivoAnexado" type="button" class="btn btn-pill-primary bg-primary text-white rounded-pill mt-3 shadow"><i class="iconos-btn fas fa-file-upload mr-2"></i>Anexar Archivo</button>
                </div>
              </div>

              <div class="row">
                <div class="col-12 text-center">
                  <table class="table table-bordered table-hover mt-4">
                    <thead class="bg-light">
                      <tr class="text-center">
                        <th scope="col">N°</th>
                        <th scope="col">Archivo</th>
                        <th scope="col">Tamaño</th>
                        <th scope="col">Fecha Subida</th>
                        <th scope="col">Comentario</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody v-if="archivoAnexado">
                      <tr class="text-center">
                        <td>1</td>
                        <td v-for="item in 4" :key="item">--</td>
                        <td>
                          <div class="d-flex justify-content-evenly">
                            <span class="d-inline-block cl cl-download text-success fw-bold cursor-pointer"></span>
                            <span class="d-inline-block cl cl-close-line text-danger fw-bold cursor-pointer"></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr class="text-center">
                        <td colspan="12" class="py-4"><i class="fas fa-info-circle"></i> No existen archivos anexados al proceso</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <!-- Observaciones -->
    <li class="border border-primary">
      <button
        class="btn text-left w-100 d-flex align-items-start justify-content-between p-3"
        id="collapsibleFlushHeading2"
        type="button"
        data-toggle="collapse"
        data-target="#observaciones"
        aria-controls="observaciones"
        aria-expanded="false"
      >
        <div>
          <span class="cl cl-arrow-right mr-2"></span>
          <span class="h5 mb-0">Observaciones</span>
        </div>
        <span
          class="toggler-icon cl cl-m-arrow-down cl-2x"
          aria-hidden="true"
        ></span>
      </button>

      <div
        class="collapse"
        id="observaciones"
        aria-labelledby="collapsibleFlushHeading2"
        data-parent="#collapsibleFlushAccordion"
      >
        <div class="pr-5 pb-3 pl-3">
          <div class="row pt-4">
            <div class="col-12">
              
              <h6 class="line line-info text-left">Comentarios: Derivación en Curso</h6>
              
              <div class="row">
                <div class="col-12 text-center">

                  <button @click="comentarioNuevo = !comentarioNuevo" v-if="!comentarioNuevo" type="button" class="btn btn-pill-primary bg-primary text-white rounded-pill mt-3"><i class="iconos-btn fas fa-comments mr-2"></i>Crear Comentario</button>

                  <!-- Formulario Nuevo Comentario -->
                  <div class="container" v-if="comentarioNuevo">
                    <div class="row mt-4">
                      <div class="col-12 p-4 text-left border shadow rounded-3">
                        <p class="line line-accent text-left">Nuevo Comentario</p>
                        <div class="row">
                          <div class="col-3 text-left">
                            <div class="form-group">
                              <label>Creado por:</label>
                              <input class="form-control" type="text" value="Karina Guzman" disabled />
                            </div>
                          </div>

                          <div class="col-2 text-left">
                            <div class="form-group">
                              <label>Fecha:</label>
                              <input class="form-control" type="text" :value="hoy" disabled />
                            </div>
                          </div>

                          <div class="col-2 text-left">
                            <div class="form-group">
                              <label>Hora:</label>
                              <input class="form-control" type="text" :value="hora" disabled />
                            </div>
                          </div>

                          <div class="col">
                            <div class="form-group">
                              <label>Comentario:</label>
                              <textarea v-model="comentarioInput" class="form-control" type="text" rows="5" placeholder="Escriba su comentario"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row my-4 mb-5">
                      <div class="col-12 d-flex justify-content-evenly">
                        <button @click="comentarioNuevoTabla = !comentarioNuevoTabla" type="button" class="btn btn-pill-success bg-success text-white rounded-pill mt-3"><i class="iconos-btn fas fa-plus-circle mr-2"></i>Subir Comentario</button>
                        
                        <button @click="comentarioInput = ''" type="button" class="btn btn-pill-accent rounded-pill mt-3"><i class="iconos-btn fas fa-backspace mr-3"></i>Limpiar</button>

                        <button @click="comentarioNuevo = false" type="button" class="btn btn-pill-danger bg-danger text-white rounded-pill mt-3"><i class="iconos-btn fas fa-times-circle mr-2"></i>Cancelar</button>
                      </div>
                    </div>
                  </div>

                  <table class="table table-bordered table-hover mt-4">
                    <thead class="bg-light">
                      <tr class="text-center">
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Creado por</th>
                        <th scope="col">Perfil</th>
                        <th scope="col">Llega Destino</th>
                        <th scope="col">Fecha llega destino</th>
                        <th scope="col">Sector búsqueda</th>
                        <th scope="col">Tipo cama llega</th>
                        <th scope="col">Establecimiento consultado</th>
                        <th scope="col">Responsable en destino</th>
                        <th scope="col">Causal rechazo</th>
                        <th scope="col">Comentario</th>
                      </tr>
                    </thead>
                    <tbody v-if="comentarioNuevoTabla">
                      <tr class="text-center">
                        <td v-for="item in 12" :key="item">--</td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr class="text-center">
                        <td colspan="12" class="py-4"><i class="fas fa-info-circle"></i> No existen archivos anexados al proceso</td>
                      </tr>
                    </tbody>
                  </table>
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
import Vue from "vue"
import dataStore from "@/store/data"

export default Vue.extend({
  name: "DerivacionCallCenterFormulario",
  data() {
    return {
      camaEncontrada: "",
      pacienteLlega: "",
      egresoPaciente: "",
      archivoAnexado: false,
      comentarioNuevo: false,
      comentarioNuevoTabla: false,
      comentarioInput: ""
    }
  },
  computed: {
    hoy: () => dataStore.hoy,
    hora: () => dataStore.hora,
  },
});
</script>

<style lang="scss">
.form-check {
  .form-check-input {
    left: 25px;
    top: -3px;
  }
}
.table thead th {
  vertical-align: middle;
}
i,
.btn i {
  &.iconos-btn {
    font-weight: 900;
  }
  &.fas.fa-info-circle {
    color: #006fb3;
  }
}
table {
  thead {
    th {
      font-size: 0.85rem;
    }
  }
}
.cursor-pointer {
  cursor: pointer;
}

</style>
