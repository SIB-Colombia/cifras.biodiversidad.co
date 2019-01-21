import gql from "graphql-tag";

const Fragments = {
    groups: gql`
    fragment grupos on GrupoBiologicoType {
        id
        nombre
        grupoBiologicoHijos {
            id
            nombre
            grupoBiologicoHijos {
                id
                nombre
                grupoBiologicoHijos {
                    id
                    nombre
                }
            }
        }
    }`,
    numbers: gql`
    fragment numeros on VistaGrupoBiologicoType {
        registros
        especies
        especiesAmenaza
        especiesVU
        especiesEN
        especiesCR
        registrosAmenaza
        registrosVU
        registrosEN
        especiesCR
        especiesCites
        especiesCitesI
        especiesCitesII
        especiesCitesIII
        registrosCites
        registrosCitesI
        registrosCitesII
        registrosCitesIII
        especiesExoticas
        especiesEndemicas
        especiesMigratorias
        registrosExoticas
        registrosEndemicas
        registrosMigratorias
    }`,
    numbers2: gql`
    fragment numeros2 on VistaGeograficaType {
        registros
        especies
        especiesAmenaza
        especiesVU
        especiesEN
        especiesCR
        registrosAmenaza
        registrosVU
        registrosEN
        especiesCR
        especiesCites
        especiesCitesI
        especiesCitesII
        especiesCitesIII
        registrosCites
        registrosCitesI
        registrosCitesII
        registrosCitesIII
        especiesExoticas
        especiesEndemicas
        especiesMigratorias
        registrosExoticas
        registrosEndemicas
        registrosMigratorias
    }`
};


export const GROUPS = gql`
    query Groups {
        animales: grupoBiologico(id: 1) {
            ...grupos
        }
        plantas: grupoBiologico(id: 24) {
            ...grupos
        }
        hongos: grupoBiologico(id: 37) {
            ...grupos
        }
        algas: grupoBiologico(id: 41) {
            ...grupos
        }
        liquenes: grupoBiologico(id: 46) {
            ...grupos
        }
        vistaGeneralColombia: vistaGeoByGeografia(geografiaId: 1) {
            ...numeros2
            geografia {
                nombre
                id
            }
        }
        vistaGeneralDepartamento: vistaGeoByGeografia(geografiaId: 29) {
            ...numeros2
            geografia {
                nombre
                id
            }
        }
        vistaGruposColombia: vistaGrupoBiologicoByGeografia(geografiaId: 1) {
            ...numeros
            grupoBiologicoGeografia {
                grupoBiologico {
                    nombre
                    id
                }
            }
        }
        vistaGruposDepartamento: vistaGrupoBiologicoByGeografia(geografiaId: 29) {
            ...numeros
            grupoBiologicoGeografia {
                grupoBiologico {
                    nombre
                    id
                }
            }
        }
        
    }
    ${Fragments.groups}
    ${Fragments.numbers}
    ${Fragments.numbers2}
`;

export const GEO = gql`
    query Towns {
        vistaGeneralColombia: vistaGeoByGeografia(geografiaId: 1) {
            ...numeros2
            geografia {
                nombre
            }
        }
        vistaGeneralDepartamento: vistaGeoByGeografia(geografiaId: 29) {
            ...numeros2
            geografia {
                nombre
            }
        }
        vistaMunicipios: vistaGeoByGeografiaPadre(geografiaPadreId: 29) {
            ...numeros2
            geografia {
                nombre
            }
        }
    }
    ${Fragments.numbers2}
`;

export const COMPANIES = gql`
    query entidades {
      vistaEntidades: vistaEntidadPublicadoraByGeografia(geografiaId: 29) {
        id
        registros
        especies
        entidadPublicadoraGeografia {
          entidadPublicadora {
            id
            nombre
          }
        }
      }
    }
`;